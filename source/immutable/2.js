// Core
import { List } from 'immutable';

const array = [];
const list = List();

console.time('array push 1 time');
array.push(1);
console.timeEnd('array push 1 time');

console.time('list push 1 time');
list.push(1);
console.timeEnd('list push 1 time');

console.time('array push 100000 times');
for (let i = 0; i < 1000000; i++) {
    array.push(i);
}
console.timeEnd('array push 100000 times');

console.time('list push 100000 times');
for (let i = 0; i < 1000000; i++) {
    list.push(i);
}
console.timeEnd('list push 100000 times');
