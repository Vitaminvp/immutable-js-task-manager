// Core
import { List } from 'immutable';

const list1 = List([ 1, 2, 3 ]);
const list2 = List([ 4, 5, 6 ]);
const list3 = list1.zip(list2);

console.log('list.zip() result:', list3);
