// Core
import { List } from 'immutable';

// Instruments
import { sum, memoizeBad } from '../helpers';

console.log('🙁 Плохая мемоизация');
const memoSumBad = memoizeBad(sum);

const list1 = List([ ...Array(1000000).keys() ]);

console.time('memoSumBad — first call');
memoSumBad(list1);
console.timeEnd('memoSumBad — first call');
console.time('memoSumBad — second call');
memoSumBad(list1); // Не так уж и бесплатно!..
console.timeEnd('memoSumBad — second call');
console.time('memoSumBad — first call');
memoSumBad(list1); // Не так уж и бесплатно!..
console.timeEnd('memoSumBad — first call');
console.time('memoSumBad — second call');
memoSumBad(list1); // Не так уж и бесплатно!..
console.timeEnd('memoSumBad — second call');
