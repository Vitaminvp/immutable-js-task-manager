// Core
import { Map } from 'immutable';

const store1 = Map({
    apple: Map({
        price: 10,
    }),
    banana: Map({
        price: 20,
    }),
});

const store2 = store1.setIn([ 'apple', 'price' ], 500);

console.log('→ store1', store1);
console.log('→ store2', store2);
console.log('→ store1 === store2', store1 === store2);

console.log(' --- 🚧 🚧 🚧 ---');

const applePrice = store1.get('apple').get('price');
const bananaPrice = store1.getIn([ 'banana', 'price' ]);

console.log('→ applePrice', applePrice);
console.log('→ bananaPrice', bananaPrice);
