// Core
import { Set, Map, List } from 'immutable';

const set = Set([
    Map({ name: 'jack' }),
    Map({ name: 'jack' }),
    Map({ name: 'john' }),
    List([ 'apple', 'banana' ]),
    List([ 'apple', 'banana' ]),
    List([ 4, 5, 6 ]),
]);

console.log('→ set', set);
