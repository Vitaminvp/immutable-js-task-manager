// Core
import { fromJS } from 'immutable';

const list1 = fromJS([[[ 1 ], [ 2 ], [ 3 ]], [[ 4 ], [ 5 ], [ 6 ]]]);
const list2 = list1.flatten(1);
const list3 = list1.flatten(2);
const list4 = list1.flatten();
const list5 = list1.flatten(true); // shallow

console.log('→ list1', list1);
console.log('→ flatten(1)', list2);
console.log('→ flatten(2)', list3);
console.log('→ flatten()', list4);
console.log('→ flatten(true)', list5);
