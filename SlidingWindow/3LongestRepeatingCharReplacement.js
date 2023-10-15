var characterReplacement = function (s, k) {
  if (s.length == 1) return 1;
  let map = Array(26);
  // let map = []
  let beg = 0;
  let highestFreq = 0;
  let maxlen = 0;

  for (let end = 0; end < s.length; end++) {
    const currentCharASCII = s[end].charCodeAt() - 65;
    map[currentCharASCII] = (map[currentCharASCII] || 0) + 1;

    if (map[currentCharASCII] > highestFreq) {
      highestFreq = map[currentCharASCII];
    }

    if (end - beg + 1 - highestFreq > k) {
      const beginningCharASCII = s[beg].charCodeAt() - 65;
      beg++;
      map[beginningCharASCII]--;
    }

    maxlen = Math.max(maxlen, end - beg + 1);
  }

  return maxlen;
};

console.log(characterReplacement("ABAA", 0) === 2);
console.log(characterReplacement("AABABBA", 1) === 4);

// DEBUG STATEMENTS
console.log(
  `beg: ${beg} | end: ${end} | highestFreqWithinWindow: ${highestFreqWithinWindow}`
);

console.log(
  `2ND -- beg: ${beg} | end: ${end} | highestFreqWithinWindow: ${highestFreqWithinWindow}`
);
console.log(`map: `, map);
