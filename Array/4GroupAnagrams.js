/**
 * Group Anagrams
 * Time O(N^2) | Space O(N)
 * @param{[[string]]} strs
 * @return{[[string]]}
 */

const groupAnagrams1 = (strs) => {
  let obj = {};
  for (const str of strs) {
    let key = str.split("").sort().join("");
    if (!obj[key]) {
      obj[key] = [];
    }
    obj[key].push(str);
  }
  return Object.values(obj);
};

// const groupAnagrams2 = (strs) => {
//   let obj = {};
//   for (const str of strs) {
//     let key = str.split("").sort().join("");
//     if (!obj[key]) {
//       obj[key] = [];
//     }
//     obj[key].push(str);
//   }
//   return Object.values(obj);
// };

const groupAnagrams3 = (strs) => {
  let obj = {};
  for (const str of strs) {
    let count = new Array(26).fill(0);
    for (const c of str) {
      count[c.charCodeAt() - 97]++;
    }
    const key = count.join("#");
    obj[key] ? obj[key].push(str) : (obj[key] = [str]);
  }
  console.log(obj);
  return Object.values(obj);
};

console.log(groupAnagrams1(["eat", "tea", "tan", "ate", "nat", "bat"]));
// console.log(groupAnagrams2(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams3(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log("blah");
