// Core
import { Stack, List } from 'immutable';

const stack1 = Stack([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]); // LIFO

const first = stack1.peek(); // or .first()

console.log('→ stack', stack1);
console.log('→ first.peek()', first);

const stack2 = stack1.shift();

console.log('→ stack1.shift()', stack2);

const stack3 = stack2.unshift(74); // or .push()

console.log('→ stack2.unshift()', stack3);

const stack4 = stack3.unshiftAll(List.of(87, 43));

console.log('→ stack3.unshiftAll()', stack4);

const second = stack4.get(4);

console.log('→ stack4.get()', second);
