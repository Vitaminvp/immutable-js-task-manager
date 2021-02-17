// Core
import { List } from 'immutable';

const array1 = [ ...Array(1000000).keys() ];
const list1 = List(array1);

console.time('array.filter');
array1.filter((item) => item !== 500000);
console.timeEnd('array.filter');

console.time('list.filter');
list1.filter((item) => item !== 500000);
console.timeEnd('list.filter');

console.time('array.map');
array1.map((item) => item ** 20);
console.timeEnd('array.map');

console.time('list.map');
list1.map((item) => item ** 20);
console.timeEnd('list.map');
