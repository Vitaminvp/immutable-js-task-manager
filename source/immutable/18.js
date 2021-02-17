// Core
import { List } from 'immutable';

const list = List.of(1, 2, 3).asMutable();

console.log('→ mutable list', list);
list.push(4);
console.log('→ mutable list', list);
console.log('→ mutable list.wasAltered()', list.wasAltered());

list.asImmutable();
list.push(5);

console.log('→ immutable list', list);
