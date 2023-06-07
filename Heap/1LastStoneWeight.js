/**
 * @param {number[]} stones
 * @return {number}
 */

/**
 *          Complexity
 * ---------------------------
 * Time     O(n^2)
 * ----------------------------
 * Space    O(n)
 */

// Heap DATA Struct
// Naive, slow but easy to understand approach

////////////////////////////-------------------///////////////////////////////////////////////
////////////////////////////        1          ///////////////////////////////////////////////
////////////////////////////-------------------///////////////////////////////////////////////

class MaxHeap {
  compareFcn;
  heap;
  constructor(compareFcn) {
    this.compareFcn = compareFcn;
    this.heap = new Array();
  }

  insert(val) {
    this.heap.push(val);
    this.heap.sort(this.compareFcn);
  }

  extract = () => this.heap.shift();
  peek = () => this.heap[0];
  size = () => this.heap.length;
}

// Could be customized
function compareFcn(a, b) {
  if (a > b) return -1;
  if (a < b) return 1;
  if (a === b) return 0;
}

var lastStoneWeight = function (stones) {
  let heap = new MaxHeap(compareFcn);

  for (let i = 0; i < stones.length; i++) {
    heap.insert(stones[i]);
  }

  while (heap.size() > 1) {
    let first = heap.peek();
    heap.extract();
    let second = heap.peek();
    heap.extract();
    if (first === second) {
      continue;
    } else {
      let left = first - second;
      heap.insert(left);
    }
  }
  return heap.peek() ? heap.peek() : 0;
};

////////////////////////////-------------------///////////////////////////////////////////////
////////////////////////////        2          ///////////////////////////////////////////////
////////////////////////////-------------------///////////////////////////////////////////////

// Fast implementation

var lastStoneWeight1 = function (stones) {
  while (stones.length > 1) {
    stones.sort((a, b) => a - b);
    console.log(stones);

    stones[stones.length - 2] =
      stones[stones.length - 1] - stones[stones.length - 2];
    console.log(stones);

    stones.pop();
  }
  return stones[0];
};

////////////////////////////-------------------///////////////////////////////////////////////
////////////////////////////        3          ///////////////////////////////////////////////
////////////////////////////-------------------///////////////////////////////////////////////

// Optimizing Heap Data Structure
class MaxHeap2 {
  compareFcn;
  heap;
  constructor(compareFcn) {
    this.compareFcn = compareFcn;
    this.heap = new Array();
  }

  insert(val) {
    this.heap.push(val);
    this.heap.sort(this.compareFcn);
  }

  extract = () => this.heap.pop();
  peek = () => this.heap[this.heap.length - 1];
  size = () => this.heap.length;
}

// Could be customized
function compareFcn(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
  if (a === b) return 0;
}

var lastStoneWeight2 = function (stones) {
  let heap = new MaxHeap2(compareFcn);

  for (let i = 0; i < stones.length; i++) {
    heap.insert(stones[i]);
  }

  while (heap.size() > 1) {
    let first = heap.extract();
    let second = heap.extract();
    if (first === second) {
      continue;
    } else {
      let left = first - second;
      heap.insert(left);
    }
  }
  return heap.peek() ? heap.peek() : 0;
};

// console.log(lastStoneWeight([1, 2, 5, 7, 8, 15]));
// console.log(lastStoneWeight1([1, 2, 5, 7, 8, 15]));
console.log(lastStoneWeight2([1, 2, 5, 7, 8, 15]));
