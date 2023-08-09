export class SizedHeap {
  // Defaults to maxHeap if type not specified
  constructor(k, nums, type) {
    this.heap = [];
    this.size = k;
    this.type = type;
    for (const num of nums) {
      this.add(num);
    }
  }
  calculateParent(idx) {
    return idx ? Math.ceil(idx / 2) - 1 : 0;
  }

  calculateLeftChild(idx) {
    return idx * 2 + 1;
  }

  conditionCheck(a, b) {
    // Defaults to maxHeap

    // Null Checks
    if (a === null || a === undefined || b === null || b === undefined)
      return false;

    if (this.type === "min") {
      return a > b; // first should be less
      // So SWITCH == TRUE if first is greater
    } else {
      // type === "max"
      return a < b; // first should be more
      // So SWITCH == TRUE if first is lesser
    }
  }

  bubbleUp(idx) {
    let h = this.heap;
    while (idx > 0) {
      let largest = idx;
      let p = this.calculateParent(idx);
      if (this.conditionCheck(h[p], h[largest])) {
        [h[p], h[largest]] = [h[largest], h[p]]; // if P bigger, then Switch
        this.bubbleUp(p);
      } else {
        break;
      }
    }
  }

  bubbleDown(idx) {
    let h = this.heap;
    while (idx < h.length) {
      let smallest = idx;
      let cLeft = this.calculateLeftChild(idx);
      let cRight = cLeft + 1;
      // if (h[cLeft] < h[smallest]) {
      if (this.conditionCheck(h[smallest], h[cLeft])) {
        smallest = cLeft;
      } else if (this.conditionCheck(h[smallest], h[cRight])) {
        smallest = cRight;
      }

      if (smallest !== idx) {
        [h[idx], h[smallest]] = [h[smallest], h[idx]];
        this.bubbleDown(smallest);
      } else {
        break;
      }
    }
  }

  peek() {
    return this.heap[0];
  }

  extractTop() {
    let top = this.heap[0];
    let bottom = this.heap[this.heap.length - 1];

    this.heap[0] = bottom;
    this.heap[this.heap.length - 1] = top;

    this.heap.pop();
    this.bubbleDown(0);
  }

  add(num) {
    if (this.heap.length < this.size) {
      this.heap.push(num);
      this.bubbleUp(this.heap.length - 1);
    } else if (this.conditionCheck(this.heap[0], num)) {
      this.heap.push(num);
      this.bubbleUp(this.heap.length - 1);
      this.heap.pop();
    }
  }
}

// ======================================================================================================
// ======================================================================================================
// ======================================================================================================

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.heap = new SizedHeap(k, nums, "min");
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  this.heap.add(val);
  return this.heap.peek();
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

// ======================================================================================================
// ===================================  Max Heap  =======================================================
// ======================================================================================================

class MaxHeap {
  // This is a max-heap
  constructor(nums) {
    this.heap = [];
    for (const num of nums) {
      this.add(num);
    }
  }
  calculateParent(idx) {
    return idx ? Math.ceil(idx / 2) - 1 : 0;
  }

  calculateLeftChild(idx) {
    return idx * 2 + 1;
  }

  // conditionCheck(a, b) {
  //   // default to maxHeap

  //   if (this.type === "min") {
  //     return a > b; // first should be less
  //     // So SWITCH == TRUE if first is greater
  //   } else {
  //     // type === "max"
  //     return a < b; // first should be more
  //     // So SWITCH == TRUE if first is lesser
  //   }
  // }

  bubbleUp(idx) {
    let h = this.heap;
    while (idx > 0) {
      let largest = idx;
      let p = this.calculateParent(idx);
      if (h[p] < h[largest]) {
        [h[p], h[largest]] = [h[largest], h[p]];
        this.bubbleUp(p);
      } else {
        break;
      }
    }
  }

  bubbleDown(idx) {
    let h = this.heap;
    while (idx < h.length) {
      let smallest = idx;
      let cLeft = this.calculateLeftChild(idx);
      let cRight = cLeft + 1;
      if (h[cLeft] > h[smallest]) {
        smallest = cLeft;
      } else if (h[cRight] > h[smallest]) {
        smallest = cRight;
      }

      if (smallest !== idx) {
        [h[idx], h[smallest]] = [h[smallest], h[idx]];
        this.bubbleDown(smallest);
      } else {
        break;
      }
    }
  }

  peek() {
    return this.heap[0];
  }

  extractTop() {
    let top = this.heap[0];
    let bottom = this.heap[this.heap.length - 1];

    this.heap[0] = bottom;
    this.heap[this.heap.length - 1] = top;

    this.heap.pop();
    this.bubbleDown(0);
  }

  add(num) {
    this.heap.push(num);
    this.bubbleUp(this.heap.length - 1);
  }
}

// ======================================================================================================
// ===================================  Min Heap  =======================================================
// ======================================================================================================

// const regularMaxHeap = new SizedHeap(5, [44, 66, 55, 11, 77, 888], "min");
// const regularMaxHeap1 = new MaxHeap([44, 66, 55, 11, 77, 888]);
// regularMaxHeap.extractTop();
// console.log(regularMaxHeap.peek());
