var evalRPN_byDrew_BAD = function (tokens) {
  if (tokens.length === 1) return tokens[0];

  let operatorSet = new Set(["+", "-", "*", "/"]);
  let firstRun = true;
  let intermediateResult = 0;

  let operandLeft;
  let operandRight;

  let rightIndex;
  let leftIndex;
  let operatorIndex = 0;

  while (!operatorSet.has(tokens[operatorIndex])) {
    operatorIndex++;
  }
  rightIndex = operatorIndex - 1;
  leftIndex = operatorIndex - 2;

  while (operatorIndex < tokens.length) {
    // console.log(leftIndex, rightIndex, intermediateResult)

    // Evaluate Intermediate Result
    if (firstRun) {
      firstRun = false;
      intermediateResult = singleEval(
        tokens[leftIndex],
        tokens[rightIndex],
        tokens[operatorIndex]
      );
    } else {
      if (rightIndex === operatorIndex) {
        operandLeft = tokens[leftIndex];
        operandRight = intermediateResult;
      } else {
        operandLeft = intermediateResult;
        operandRight = tokens[rightIndex];
      }
      intermediateResult = singleEval(
        operandLeft,
        operandRight,
        tokens[operatorIndex]
      );
    }

    // Finishes if we performed the last indexed operator
    if (operatorIndex > tokens.length - 2) break;

    // Reset the indexes for the next round
    if (operatorSet.has(tokens[operatorIndex + 1])) {
      rightIndex = operatorIndex + 1; // doesnt really matter what right index is - keep it always on operatorIndex
      leftIndex = leftIndex - 1;
      operatorIndex += 1;
    } else {
      rightIndex = operatorIndex + 1;
      leftIndex = leftIndex; // keep left index as is
      operatorIndex += 2;
    }
  }

  return intermediateResult;
};

var singleEval = (operandLeft, operandRight, operator) => {
  // console.log(`singleEval: operandLeft ${operandLeft}, operandRight ${operandRight}, operator ${operator}`)
  switch (operator) {
    case "+":
      return Math.floor(parseInt(operandLeft) + parseInt(operandRight));
    case "-":
      return Math.floor(parseInt(operandLeft) - parseInt(operandRight));
    case "*":
      return Math.floor(parseInt(operandLeft) * parseInt(operandRight));
    case "/":
      let ans = parseInt(operandLeft) / parseInt(operandRight);
      return ans > 0 ? Math.floor(ans) : Math.ceil(ans);
  }
};
