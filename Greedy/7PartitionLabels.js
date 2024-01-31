/**
 * MY BETTER SOL - beats 28%
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  const onWayToZero = {
    a: false,
    b: false,
    c: false,
    d: false,
    e: false,
    f: false,
    g: false,
    h: false,
    i: false,
    j: false,
    k: false,
    l: false,
    m: false,
    n: false,
    o: false,
    p: false,
    q: false,
    r: false,
    s: false,
    t: false,
    u: false,
    v: false,
    w: false,
    x: false,
    y: false,
    z: false,
  };
  let counter = 0;
  let zeroingLetterCount = 0;
  const res = [];
  const freq = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0,
  };
  for (const letter of s) {
    freq[letter]++;
  }

  for (const letter of s) {
    if (freq[letter] !== 0) {
      freq[letter]--;
      counter++;
      if (!onWayToZero[letter]) {
        zeroingLetterCount++;
        onWayToZero[letter] = true;
      }
    }
    if (freq[letter] === 0) {
      onWayToZero[letter] = false;
      zeroingLetterCount--;
    }
    if (zeroingLetterCount === 0) {
      res.push(counter);
      counter = 0;
    }
  }

  return res;
};

// MY SOL = beats 14% ... BAD

/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  const onWayToZero = new Set();
  let counter = 0;
  const res = [];
  const freq = {};
  for (const letter of s) {
    freq[letter] ? freq[letter]++ : (freq[letter] = 1);
  }

  for (const letter of s) {
    if (freq[letter] !== 0) {
      freq[letter]--;
      counter++;
      onWayToZero.add(letter);
    }
    if (freq[letter] === 0) {
      onWayToZero.delete(letter);
    }
    if (onWayToZero.size === 0) {
      res.push(counter);
      counter = 0;
    }
  }

  return res;
};
