import {scenario as C} from './scenario.js';
export function initialState(){return {cash:C.openingCash,bills:C.reserves.bills,groceries:C.reserves.groceries,goal:C.reserves.goal,selectedGoal:C.goals[0],basket:null,transactions:[],coins:0,gems:0,rewarded:false,owned:[],equipped:null,helper:{cash:C.helper.cash,groceries:C.helper.groceries,slots:C.helper.slots,status:'available'},notice:''};}
export const available=s=>s.cash-s.bills-s.groceries-s.goal;
export const has=(s,id)=>s.transactions.some(t=>t.id===id);
export function reduce(s,a){let n=structuredClone(s);n.notice='';const reject=message=>({...s,notice:message});
 function charge(id,label,amount){if(has(n,id))return false;n.cash-=amount;n.transactions.push({id,label,amount});return true;}
 switch(a.type){
 case 'goal':if(!C.goals.includes(a.value))return reject('Choose one of the available goals.');n.selectedGoal=a.value;break;
 case 'basket':if(has(n,'grocery'))return reject('Groceries are already purchased. Reset to try another basket.');if(!C.baskets.some(b=>b.id===a.value))return reject('Choose a complete basket.');n.basket=a.value;break;
 case 'buy-grocery':{if(has(n,'grocery'))return n;const b=C.baskets.find(b=>b.id===n.basket);if(!b)return reject('Select a complete basket before checkout.');if(b.cost>available(n)+n.groceries)return reject('This basket would use protected money. Adjust your plan first.');charge('grocery',b.name,b.cost);n.groceries=0;break;}
 case 'pay-utility':if(has(n,'utility'))return n;if(!has(n,'grocery'))return reject('Complete your grocery visit first.');if(n.bills<C.utility||n.cash<C.utility)return reject('There is not enough reserved bill money.');charge('utility','Utility bill',C.utility);n.bills-=C.utility;break;
 case 'revise-goal':if(!has(n,'utility')||has(n,'repair'))return reject('This adjustment belongs to the repair review.');n.goal=C.revisedGoal;break;
 case 'pay-repair':if(has(n,'repair'))return n;if(!has(n,'utility'))return reject('Review the utility bill first.');if(available(n)<C.repair)return reject(`You need ${C.repair-available(n)} more available cash. Nothing has been charged.`);charge('repair','Car repair',C.repair);break;
 case 'claim-reward':if(n.rewarded)return n;if(!has(n,'repair'))return reject('Finish the learning sequence before collecting this reward.');n.coins+=C.reward.coins;n.gems+=C.reward.gems;n.rewarded=true;break;
 case 'buy-item':{const item=C.items.find(i=>i.id===a.value);if(!item)return reject('This item is unavailable.');if(n.owned.includes(item.id))return n;if(n[item.currency]<item.price)return reject(`You need ${item.price-n[item.currency]} more ${item.currency==='coins'?'Style Coins':'Gems'}. Household cash cannot be used here.`);n[item.currency]-=item.price;n.owned.push(item.id);break;}
 case 'equip':if(!n.owned.includes(a.value))return reject('Purchase the cosmetic before equipping it.');n.equipped=a.value;break;
 case 'unequip':n.equipped=null;break;
 case 'hire':if(n.helper.status==='active')return n;if(n.helper.cash-n.helper.groceries<C.helper.fee)return reject('This separate example has insufficient available cash.');n.helper.cash-=C.helper.fee;n.helper.status='active';break;
 case 'cancel-help':if(n.helper.status!=='active')return n;n.helper.cash+=C.helper.fee;n.helper.status='canceled';break;
 case 'reset-help':n.helper=initialState().helper;break;
 case 'reset':return initialState();
 default:return reject('That action is unavailable.');
 }if(available(n)<0)throw new Error('Invariant: protected allocations exceed cash.');return n;}
