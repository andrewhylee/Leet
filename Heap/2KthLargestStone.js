/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.keyIndex = k - 1;
  this.memStorage = nums;
};

/**
 * @param {number} val
 * @return {number}
 *
 *  NAIVE WAY
 */
KthLargest.prototype.add = function (val) {
  this.memStorage.push(val);
  this.memStorage.sort((a, b) => b - a);
  return this.memStorage[this.keyIndex];
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

/**
 * HEAP WAY
 *  110ms vs 3788ms
 *  3% runtime...
 */

class MinHeap {
  constructor(nums, size) {
    this.heap = [];
    this.size = size;
    this.length = 0;
    for (let num of nums) this.add(num);
  }

  calculateParent(i) {
    return Math.floor((i - 1) / 2);
  }

  calculateLeftChild(i) {
    return 2 * i + 1;
  }

  bubbleUp(i) {
    let heap = this.heap;
    let parent = this.calculateParent(i);
    while (i > 0 && heap[parent] > heap[i]) {
      [heap[parent], heap[i]] = [heap[i], heap[parent]];
      i = parent;
      parent = this.calculateParent(i);
    }
  }

  getMin() {
    return this.heap[0];
  }

  bubbleDown(i) {
    let length = this.length;
    let heap = this.heap;
    let child = this.calculateLeftChild(i);

    while (child < length) {
      let rightCh = child + 1;
      if (rightCh < length && heap[rightCh] < heap[child]) {
        child++;
      }

      if (heap[i] <= heap[child]) return;

      [heap[i], heap[child]] = [heap[child], heap[i]];
      i = child;
      child = this.calculateLeftChild(i);
    }
  }

  add(num) {
    if (this.length < this.size) {
      this.length++;
      this.heap.push(num);
      this.bubbleUp(this.length - 1);
    } else if (num > this.heap[0]) {
      this.heap[0] = num;
      this.bubbleDown(0);
    }
  }
}

/**
 * @param {number} k
 * @param {number[]} nums
 */
class KthLargest_heap {
  /**
   * @param {number} k
   * @param {number[]} nums
   * @constructor
   */
  constructor(k, nums) {
    this.heap = new MinHeap(nums, k);
  }

  /**
   * @param {number} val
   * @return {number}
   */
  add(val) {
    this.heap.add(val);
    return this.heap.getMin();
  }
}
