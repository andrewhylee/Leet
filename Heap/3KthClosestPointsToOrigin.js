import { SizedHeap } from "./SizedHeap.js";

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
const calculateDistance = (x, y) => {
  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
};

var kClosest = function (points, k) {
  if (points.length === 0) {
    console.log([]);
    return;
  }
  const SmallestSizedMaxHeap = new SizedHeap(k, [], "max");

  SmallestSizedMaxHeap.conditionCheck = (a, b) => {
    // Null Checks
    if (a === null || a === undefined || b === null || b === undefined)
      return false;
    return calculateDistance(a[0], a[1]) < calculateDistance(b[0], b[1]);
  };

  for (const point of points) {
    if (SmallestSizedMaxHeap.heap.length < k) {
      SmallestSizedMaxHeap.add(point);
    } else if (
      SmallestSizedMaxHeap.conditionCheck(point, SmallestSizedMaxHeap.peek())
    ) {
      SmallestSizedMaxHeap.extractTop();
      SmallestSizedMaxHeap.add(point);
    }
  }

  return SmallestSizedMaxHeap.heap;
};

// kClosest([], 5);
// kClosest(
//   [
//     [1, 3],
//     [-2, 2],
//   ],
//   1
// );
kClosest(
  [
    [3, 3],
    [5, -1],
    [-2, 4],
  ],
  2
);

// ======================================================================================================
// ======================================================================================================
// ======================================================================================================
// Found Solution

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */

const dist = (point) => {
  return point[0] * point[0] + point[1] * point[1];
};

var kClosest = function (points, k) {
  const n = points.length;
  let map = [];

  for (let i = 0; i < n; ++i) {
    map.push({
      distance: dist(points[i]),
      points: points[i],
    });
  }
  map.sort((a, b) => a.distance - b.distance);

  let ans = [];
  for (let j = 0; j < k; j++) {
    ans.push(map[j].points);
  }
  return k === n ? points : ans;
};

// ======================================================================================================
// ======================================================================================================
// ======================================================================================================
// Official Submission

// /**
//  * @param {number[][]} points
//  * @param {number} k
//  * @return {number[][]}
//  */

// var kClosest = function (points, k) {
//   if (points.length === 0) {
//     console.log([]);
//     return;
//   }
//   const SmallestSizedMaxHeap = new SizedHeap(k, [], "max");

//   SmallestSizedMaxHeap.conditionCheck = (a, b) => {
//     // Null Checks
//     if (a === null || a === undefined || b === null || b === undefined)
//       return false;
//     return calculateDistance(a[0], a[1]) < calculateDistance(b[0], b[1]);
//   };

//   for (const point of points) {
//     if (SmallestSizedMaxHeap.heap.length < k) {
//       SmallestSizedMaxHeap.add(point);
//     } else if (
//       SmallestSizedMaxHeap.conditionCheck(point, SmallestSizedMaxHeap.peek())
//     ) {
//       SmallestSizedMaxHeap.extractTop();
//       SmallestSizedMaxHeap.add(point);
//     }
//   }

//   return SmallestSizedMaxHeap.heap;
// };

// const calculateDistance = (x, y) => {
//   return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
// };

// class SizedHeap {
//   // Defaults to maxHeap if type not specified
//   constructor(k, nums, type) {
//     this.heap = [];
//     this.size = k;
//     this.type = type;
//     for (const num of nums) {
//       this.add(num);
//     }
//   }
//   calculateParent(idx) {
//     return idx ? Math.ceil(idx / 2) - 1 : 0;
//   }

//   calculateLeftChild(idx) {
//     return idx * 2 + 1;
//   }

//   conditionCheck(a, b) {
//     // Defaults to maxHeap

//     // Null Checks
//     if (a === null || a === undefined || b === null || b === undefined)
//       return false;

//     if (this.type === "min") {
//       return a > b; // first should be less
//       // So SWITCH == TRUE if first is greater
//     } else {
//       // type === "max"
//       return a < b; // first should be more
//       // So SWITCH == TRUE if first is lesser
//     }
//   }

//   bubbleUp(idx) {
//     let h = this.heap;
//     while (idx > 0) {
//       let largest = idx;
//       let p = this.calculateParent(idx);
//       if (this.conditionCheck(h[p], h[largest])) {
//         [h[p], h[largest]] = [h[largest], h[p]]; // if P bigger, then Switch
//         this.bubbleUp(p);
//       } else {
//         break;
//       }
//     }
//   }

//   bubbleDown(idx) {
//     let h = this.heap;
//     while (idx < h.length) {
//       let smallest = idx;
//       let cLeft = this.calculateLeftChild(idx);
//       let cRight = cLeft + 1;
//       // if (h[cLeft] < h[smallest]) {
//       if (this.conditionCheck(h[smallest], h[cLeft])) {
//         smallest = cLeft;
//       } else if (this.conditionCheck(h[smallest], h[cRight])) {
//         smallest = cRight;
//       }

//       if (smallest !== idx) {
//         [h[idx], h[smallest]] = [h[smallest], h[idx]];
//         this.bubbleDown(smallest);
//       } else {
//         break;
//       }
//     }
//   }

//   peek() {
//     return this.heap[0];
//   }

//   extractTop() {
//     let top = this.heap[0];
//     let bottom = this.heap[this.heap.length - 1];

//     this.heap[0] = bottom;
//     this.heap[this.heap.length - 1] = top;

//     this.heap.pop();
//     this.bubbleDown(0);
//   }

//   add(num) {
//     if (this.heap.length < this.size) {
//       this.heap.push(num);
//       this.bubbleUp(this.heap.length - 1);
//     } else if (this.conditionCheck(this.heap[0], num)) {
//       this.heap.push(num);
//       this.bubbleUp(this.heap.length - 1);
//       this.heap.pop();
//     }
//   }
// }
