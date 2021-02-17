// Core
import { fromJS } from 'immutable';

const nested1 = fromJS({ a: { b: { c: [ 3, 4, 5 ] } } });
console.log('→ nested1', nested1);

const nested2 = nested1.mergeDeep({ a: { b: { d: 6 } } });
console.log('→ nested2', nested2);

const d = nested2.getIn([ 'a', 'b', 'd' ]);
console.log('→ d', d);

const nested3 = nested2.updateIn([ 'a', 'b', 'd' ], (value) => value + 1);
console.log('→ nested3', nested3);

const nested4 = nested3.updateIn([ 'a', 'b', 'c' ], (list) => list.push(6));
console.log('→ nested4', nested4);
