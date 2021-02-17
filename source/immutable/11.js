// Core
import { List } from 'immutable';

const list = List([ 1, 2, 3, 4 ]);

const array = [ ...list, 5, 6, 7 ];

console.log('→ array', array);
