// Core
import { List } from 'immutable';

// Instruments
import { sum, memoize } from '../helpers';

console.log('🙂 Хорошая мемоизация');
const memoSumGood = memoize(sum);

const list1 = List([ ...Array(1000000).keys() ]);

console.time('memoSumGood — first call');
memoSumGood(list1);
console.timeEnd('memoSumGood — first call');
console.time('memoSumGood — second call');
memoSumGood(list1); // Бесплатно! :)
console.timeEnd('memoSumGood — second call');
console.time('memoSumGood — third call');
memoSumGood(list1); // Бесплатно! :)
console.timeEnd('memoSumGood — third call');

console.log('♻️ Изменение коллекции');
const list2 = list1.push(1);

console.time('memoSumGood — fourth call');
memoSumGood(list2);
console.timeEnd('memoSumGood — fourth call');
console.time('memoSumGood — fifth call');
memoSumGood(list2); // Бесплатно! :)
console.timeEnd('memoSumGood — fifth call');
console.time('memoSumGood — sixth call');
memoSumGood(list2); // Бесплатно! :)
console.timeEnd('memoSumGood — sixth call');
