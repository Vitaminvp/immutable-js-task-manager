// Core
import { Map } from 'immutable';

const originalMap = Map({ a: 1, b: 2, c: 3 });
const updatedMap = originalMap.set('b', 1000);

console.log('→ originalMap === updatedMap', originalMap === updatedMap);

const anotherUpdatedMap = originalMap.set('b', 1000);

console.log(
    '→ updatedMap === anotherUpdatedMap',
    updatedMap === anotherUpdatedMap,
);

console.log(
    '→ updatedMap.equals(anotherUpdatedMap)',
    updatedMap.equals(anotherUpdatedMap),
);
