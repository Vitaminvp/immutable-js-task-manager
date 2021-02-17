// Core
import { List } from 'immutable';

const list1 = List([ 1, 2, 3 ]);
const list2 = list1.push(4);

console.log('→ list1:', list1);
console.log('→ list2:', list2);
console.log('→ list1 === list2:', list1 === list2);

/* Приблизительная имплементация метода List.prototype.push */

// List.prototype.push = function (value) {
//     1) make a copy
//     const clone = deepCopy(this);
//
//     2) edit the copy
//     clone[clone.length] = value;
//
//     3) return the copy
//     return clone;
// };
