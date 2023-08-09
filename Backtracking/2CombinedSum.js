
/**
 * Good Solution
 * https://leetcode.com/problems/combination-sum/solutions/1378325/javascript-solution-with-detailed-explanation/
 */

var combinationSum = function(candidates, target) {
    let index = 0
    let tempDataStruct = []
    let result = []

    function backtracking(index, target, tempDataStruct) {
        if(target === 0) {
            result.push([...tempDataStruct])
            return
        }
    
        if(target < 0) return;
    
        for(let i=index; i<candidates.length; i++) {
            tempDataStruct.push(candidates[i])
            backtracking(i, target-candidates[i], tempDataStruct)
            tempDataStruct.pop()
        }
    }
    backtracking(index, target, tempDataStruct)
    return result;
};



/**
 * BAD ATTEMPT: BY ME
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

const are2ArraysEqualInContent = (A, B) => {

    // Early cutoff - if any of them are undefined
    if(!A || !B) return false
    // Early cutoff - if not same length
    if(A.length !== B.length) return false

    // all objects in A are contained in B (A ⊆ B)
    // you can compare a <-> b however you'd like (here just `a === b`)
    let AsubB = A.every(a => B.some(b => a === b));
    let BsubA = B.every(b => A.some(a => b === a));

    return AsubB && BsubA

}

const are2SetsEqual = (set1, set2) => {
    if(set1.size !== set2.size) return false
    for (const i of set1){
        if(!set2.has(i)) return false
    }
    return true
}

var sum = (arr) => {
    let sum = 0
    for (const i of arr){
        sum += i
    }
    return sum
} 
var combinationSum = function(candidates, target) {
    candidates.sort()
    let result = []

    const backTracking = (element, subset) => {
        for (const candidate of candidates){
            if(sum(subset)+element > 40) break; // assume its sorted (i.e. lowest in the front)
            else if(sum(subset)+element > target) continue;
            else if (sum(subset) + candidate === target) {
                let newResultAddition = [...subset, candidate]
                let resultContainsDuplicate = false
                for (const i of result){
                    if(are2ArraysEqualInContent(newResultAddition, i)) resultContainsDuplicate = true
                }
                if(!resultContainsDuplicate) result.push([...subset, candidate])
            }
            else backTracking(candidate, [...subset, candidate])
        }

    }

    backTracking(candidates[0],[])
    return result
};