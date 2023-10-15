import {
  PriorityQueue,
  MinPriorityQueue,
  MaxPriorityQueue,
} from "@datastructures-js/priority-queue";

// const numbers = [3, -2, 5, 0, -1, -5, 4];

// const mpq = MaxPriorityQueue.fromArray(numbers);

// console.log(numbers); // [-5, -1, -2, 3, 0, 5, 4]
// mpq.dequeue(); // 5
// mpq.dequeue(); // 4
// mpq.dequeue(); // 3
// mpq.enqueue(17);
// console.log(numbers); // [ 0, -1, -5, -2 ]

////////////////////////////////////////////////////// DREW ////////////////////////////////////////////////////////////////////////

const minpq = new PriorityQueue((a, b) => {
  return a.i > b.i ? 1 : -1;
});
let a = { i: 4 };
let b = { i: 6 };
let c = { i: 8 };
// const rando = [, { i: 6 }, { i: 8 }];

// obj[4] = 4;
// obj[6] = 6;
// obj[8] = 8;

minpq.enqueue(a);
minpq.enqueue(b);
minpq.enqueue(c);
delete a.i;
console.log(minpq.dequeue()); // 4
console.log(minpq.dequeue()); // 6
console.log(minpq.dequeue()); // 8
console.log(minpq.dequeue()); // null
