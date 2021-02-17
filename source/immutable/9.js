// Core
import { List } from 'immutable';

const array1 = [ ...Array(10000).keys() ].map((item) => ({
    id:       `id-${item}`,
    favorite: true,
    name:     `name-${item}`,
}));

const array2 = array1.map((item) => ({
    id:       item.id,
    favorite: Math.random() * 2 > 1,
    name:     Math.random() * 2 > 1 ? `changed-${item.name}` : item.name,
}));

console.log('array1 :', array1);
console.log('array2 :', array2);

console.time('native JavaScript array');
array1.map((item1) => ({
    ...item1,
    ...array2.find((item2) => item2.id === item1.id),
}));
console.timeEnd('native JavaScript array');

const list1 = List(array1);
const list2 = List(array2);

console.time('Immutable List');
list1.merge(list2);
console.timeEnd('Immutable List');
