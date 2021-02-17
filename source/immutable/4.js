// Core
import { Map } from 'immutable';

const map1 = Map({ name: 'Jack' });
const map2 = map1.set('name', 'Bob');
const map3 = map1.set('name', 'Jack');

console.log('→ map1', map1);
console.log('→ map2', map2);
console.log('→ map3', map3);
console.log('→ map1 === map2', map1 === map2);
console.log('→ map1 === map3', map1 === map3);
