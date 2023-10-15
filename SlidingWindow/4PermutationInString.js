var checkInclusion_OfficialSolution = function (s1, s2) {
  const arr1 = new Array(26).fill(0);
  const arr2 = new Array(26).fill(0);
  const len = s1.length;

  for (let ind = 0; ind < len; ind++) {
    const index = getCharCode(s1[ind]);
    arr1[index]++;
  }

  for (let ind = 0; ind < s2.length; ind++) {
    if (ind >= len) {
      if (compare(arr1, arr2)) return true;
      arr2[getCharCode(s2[ind - len])]--;
    }

    arr2[getCharCode(s2[ind])]++;
  }

  return compare(arr1, arr2);
};

const compare = (arr1, arr2) => {
  for (let ind = 0; ind < 26; ind++) {
    if (arr1[ind] !== arr2[ind]) return false;
  }
  return true;
};

const baseASCIINumber = "a".charCodeAt();
const getCharCode = (char) => {
  return char.charCodeAt() - baseASCIINumber;
};

var checkInclusion_ByDrew = function (s1, s2) {
  let goalCount = s1.length;
  let currCount = 0;
  let p1 = 0;

  let s1HashMap = {};
  for (const character of s1) {
    s1HashMap[character] = (s1HashMap[character] || 0) + 1;
  }

  for (let i = 0; i < s2.length; i++) {
    let character = s2[i];
    if (s1HashMap[character] > 0) {
      s1HashMap[character]--;
      currCount++;

      if (currCount === goalCount) {
        // permuation found
        return true;
      }
    } else {
      // console.log("just i", i)
      // console.log("before p1", p1)

      if (currCount === 0 || (character === s2[p1] && i !== p1)) {
        p1++;
      } else {
        while (p1 < i) {
          s1HashMap[s2[p1]]++;
          p1++;
        }
        currCount = 0;
        p1++;
      }
      // console.log("after p1", p1)
    }
    // console.log(`currCount ${currCount}, goalCount ${goalCount}`)
    // console.log(s1HashMap)
  }
  return false;
};

console.log(checkInclusion("ab", "eidboaoo"));
