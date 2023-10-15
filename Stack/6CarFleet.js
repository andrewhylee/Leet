/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */

var carFleet = function (target, position, speed) {
  //create pair of pos and speed
  const pair = position.map((pos, idx) => [pos, speed[idx]]);
  const stack = [];
  //sort in asc
  pair.sort((posA, posB) => posA[0] - posB[0]);
  //for loop reverse
  for (let i = pair.length - 1; i >= 0; i--) {
    //calculate time and add it to stack
    const [pos, speed] = pair[i];
    stack.push((target - pos) / speed);
    //if stack.length >=2 and stack[-1] <= stack[-2] ---> pop
    if (
      stack.length >= 2 &&
      stack[stack.length - 1] <= stack[stack.length - 2]
    ) {
      stack.pop();
    }
  }
  // at the end of the loop return the length of the stack
  return stack.length;
};

var carFleet_byDrew = function (target, position, speed) {
  const stack = [];
  for (let i = 0; i < position.length; i++) {
    let counter = 0;
    if (!stack.length) {
      stack.push(i); // put the current car onto the stack as its "own" fleet
    } else {
      while (counter < stack.length) {
        console.log(`counter ${counter}, i ${i}`);
        console.log(stack);
        if (
          speed[stack[counter]] > speed[i] &&
          position[stack[counter]] < position[i]
        ) {
          console.log(`inside 1`);
          if (
            willItCatchUp(
              position[stack[counter]],
              speed[stack[counter]],
              position[i],
              speed[i],
              target
            )
          ) {
            console.log(`inside 2`);
            break; // do not put the current car on the stack
          }
        } else if (
          speed[i] > speed[stack[counter]] &&
          position[i] < position[stack[counter]]
        ) {
          console.log(`inside 3`);
          if (
            willItCatchUp(
              position[stack[counter]],
              speed[stack[counter]],
              position[i],
              speed[i],
              target
            )
          ) {
            console.log(`inside 4`);
            stack[counter] = i;
            break; // do not put the current car on the stack
          }
        }
        console.log(`inside 5`);
        counter++;
      }
      if (counter === stack.length) {
        // if we reach the end of the stack
        console.log(`inside 6`);
        stack.push(i); // put the current car onto the stack as its "own" fleet
      }
    }
  }

  return stack.length;
};

var willItCatchUp = (pos1, speed1, pos2, speed2, target) => {
  let time = 1;
  let updatedPos1 = pos1 + speed1 * time;
  let updatedPos2 = pos2 + speed2 * time;
  while (updatedPos1 <= target && updatedPos1 <= target) {
    if (updatedPos1 >= updatedPos2) return true;
    time++;
    updatedPos1 = pos1 + speed1 * time;
    updatedPos2 = pos2 + speed2 * time;
  }
  return false;
};

// console.log(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]));
console.log(carFleet(10, [6, 8], [3, 2]));
