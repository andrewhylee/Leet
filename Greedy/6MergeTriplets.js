// after hearing a bit

/**
 * @param {number[][]} triplets
 * @param {number[]} target
 * @return {boolean}
 */
var mergeTriplets = function (triplets, target) {
  let flagA = false;
  let flagB = false;
  let flagC = false;

  for (let i = 0; i < triplets.length; i++) {
    if (
      triplets[i][0] > target[0] ||
      triplets[i][1] > target[1] ||
      triplets[i][2] > target[2]
    )
      continue;
    else {
      !flagA && triplets[i][0] === target[0] && (flagA = true);
      !flagB && triplets[i][1] === target[1] && (flagB = true);
      !flagC && triplets[i][2] === target[2] && (flagC = true);
    }
  }
  if (flagA && flagB && flagC) return true;

  return false;
};

// 58 of 62 cases  - NOT bad

/**
 * @param {number[][]} triplets
 * @param {number[]} target
 * @return {boolean}
 */
var mergeTriplets = function (triplets, target) {
  // if no num's then return false
  // if target alr exists, return false

  // if you find 3 separate valid trips, each having other numbers that are lower, it's combinable
  // the seq matter
  // 1 + 1 + 1

  // if you find 2 separate valid trips, they must combine to in a way that all numbers are lower in their columns than their target nums

  // 1. Sort into buckets
  // 1.5. While sorting, if base case then exit
  // 2. Try to combine them in the right ways, starting with 2 + 1 first
  //       -- if found, exit true, else exit false
  const setA = [];
  const setB = [];
  const setC = [];
  const setAB = [];
  const setAC = [];
  const setBC = [];

  let flagA;
  let flagB;
  let flagC;

  for (let i = 0; i < triplets.length; i++) {
    debugger;
    let curr = triplets[i];
    flagA = target[0] === curr[0];
    flagB = target[1] === curr[1];
    flagC = target[2] === curr[2];

    if (flagA && flagB && flagC) {
      return true;
    } else if (flagA && flagB) {
      setAB.push(i);
    } else if (flagA && flagC) {
      setAC.push(i);
    } else if (flagB && flagC) {
      setBC.push(i);
    } else if (flagA) {
      setA.push(i);
    } else if (flagB) {
      setB.push(i);
    } else if (flagC) {
      setC.push(i);
    }
    // throw-away trip, so just continue the loop
  }
  if (
    setAB.length > 0 &&
    setC.length > 0 &&
    findTargetInSets(setAB, setC, null, 1, triplets, target)
  ) {
    return true;
  }
  if (
    setAC.length > 0 &&
    setB.length > 0 &&
    findTargetInSets(setAC, setB, null, 2, triplets, target)
  ) {
    return true;
  }
  if (
    setBC.length > 0 &&
    setA.length > 0 &&
    findTargetInSets(setBC, setA, null, 3, triplets, target)
  ) {
    return true;
  }
  if (
    setA.length > 0 &&
    setB.length > 0 &&
    setC.length > 0 &&
    findTargetInSets(setA, setB, setC, 4, triplets, target)
  ) {
    return true;
  }

  return false;
};

function findTargetInSets(set1, set2, set3, mergeType, triplets, target) {
  const minh1 = new MinHeap();
  const minh2 = new MinHeap();
  const minh3 = new MinHeap();
  switch (mergeType) {
    case 1:
      // find min of 3rd no in setAB
      for (const i of set1) {
        minh1.push(triplets[i][2]);
      }
      for (const i of set2) {
        minh2.push(triplets[i][0]);
        minh3.push(triplets[i][1]);
      }
      if (
        target[2] > minh1.top() &&
        target[0] > minh2.top() &&
        target[1] > minh3.top()
      ) {
        return true;
      }
      break;
    case 2:
      // find min of 2nd no in setAC
      for (const i of set1) {
        minh1.push(triplets[i][1]);
      }
      for (const i of set2) {
        minh2.push(triplets[i][0]);
        minh3.push(triplets[i][2]);
      }
      if (
        target[1] > minh1.top() &&
        target[0] > minh2.top() &&
        target[2] > minh3.top()
      ) {
        return true;
      }
      break;
    case 3:
      // find min of 1st no in setBC
      for (const i of set1) {
        minh1.push(triplets[i][0]);
      }
      for (const i of set2) {
        minh2.push(triplets[i][1]);
        minh3.push(triplets[i][2]);
      }
      if (
        target[0] > minh1.top() &&
        target[1] > minh2.top() &&
        target[2] > minh3.top()
      ) {
        return true;
      }
      break;
    case 4:
      for (const i of set1) {
        minh2.push(triplets[i][1]);
        minh3.push(triplets[i][2]);
      }
      for (const i of set2) {
        minh1.push(triplets[i][0]);
        minh3.push(triplets[i][2]);
      }
      for (const i of set2) {
        minh1.push(triplets[i][0]);
        minh2.push(triplets[i][1]);
      }
      if (
        target[0] > minh1.top() &&
        target[1] > minh2.top() &&
        target[2] > minh3.top()
      ) {
        return true;
      }
      break;
  }

  return false;
}
