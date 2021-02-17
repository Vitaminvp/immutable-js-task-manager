// Core
import { Map } from 'immutable';

const originalMap = Map({ a: 1, b: 2, c: 3 });
const updatedMap = originalMap.set('b', 2);

/* No-op: .set() вернул ссылку */
console.log('→ originalMap === updatedMap', originalMap === updatedMap);
