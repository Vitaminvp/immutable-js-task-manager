// Core
import { List } from 'immutable';

let list1 = List();
let list2 = List();
let list3 = null;

const unknownSize = 1000000;

console.time('without mutations');
for (let i = 0; i < unknownSize; i++) {
    list1 = list1.push(i);
}
console.timeEnd('without mutations');

console.time('with mutations');
list3 = list2.withMutations((mutatableCollection) => {
    for (let i = 0; i < unknownSize; i++) {
        mutatableCollection.push(i);
    }
});
console.timeEnd('with mutations');

console.log('→ list1', list1);
console.log('→ list2', list2);
console.log('→ list3', list3);
