// Core
import { Map, Set } from 'immutable';

const map1 = Map({ a: 1, b: 2, c: 3 });
const map2 = Map({ a: 1, b: 2, c: 3 });
const set = Set()
    .add(map1)
    .add(map2);

console.log('→ set', set);

/**
 * проверка по значению (value),
 * не по ссылке (reference)
 */
console.log('→ set.has(map1)', set.has(map1));
console.log('→ set.has(map2)', set.has(map2));
