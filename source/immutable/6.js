// Instruments
import { sum, memoizeBad } from '../helpers';

console.log('🙁 Плохая мемоизация');
const memoSumBad = memoizeBad(sum);

const array1 = [ ...Array(10000000).keys() ];

console.time('memoSumBad — first call');
memoSumBad(array1);
console.timeEnd('memoSumBad — first call');
console.time('memoSumBad — second call');
memoSumBad(array1);
console.timeEnd('memoSumBad — second call');
console.time('memoSumBad — third call');
memoSumBad(array1);
console.timeEnd('memoSumBad — third call');
console.time('memoSumBad — fourth call');
memoSumBad(array1);
console.timeEnd('memoSumBad — fourth call');

console.log(' --- 🚧 🚧 🚧 ---');

console.log('😉 Без мемоизации вообще');
console.time('sum — first call');
sum(array1);
console.timeEnd('sum — first call');
console.time('sum — second call');
sum(array1);
console.timeEnd('sum — second call');
console.time('sum — third call');
sum(array1);
console.timeEnd('sum — third call');
console.time('sum — fourth call');
sum(array1);
console.timeEnd('sum — fourth call');
