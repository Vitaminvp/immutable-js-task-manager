// Core
import { List } from 'immutable';

const list1 = List([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]);
const list2 = list1.interpose('🌙');

console.log('→ list1', list1);
console.log('→ list2', list2);

const list3 = list1.interleave('hello');
const list4 = list1.interleave([ 'h', 'e', 'l', 'l', 'o' ]);

console.log('→ list3', list3);
console.log('→ list4', list4);
