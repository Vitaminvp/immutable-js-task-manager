// Core
import { Repeat } from 'immutable';

const repeat = Repeat('value', 7);
const list = repeat.toList();

console.log('→ repeat', repeat);
console.log('→ list', list);
