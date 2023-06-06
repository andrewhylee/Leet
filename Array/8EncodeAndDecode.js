/**
 * 8 - Encode and Decode a list of Strings
 *
 * Encode
 * @param {[string]} strs
 * @return {string} encodedString
 *
 * Decode
 * @param {string} encodedString
 * @return {[string]} strs
 */

const encode1 = (strs, delimiter) => {
  let encodedString = "";

  encodedString = strs
    .map((str) => {
      return delimiter + str;
    })
    .join("");

  return encodedString;
};

let encode1String = encode1(["AB", "CD", "XY"], "#");
let encode2String = encode1(
  ["HELLO", "WORLDS", "MEOW"],
  String.fromCharCode(257)
);
console.log(encode1String);
console.log(encode2String);

const decode1 = (encodedString, delimiter) => {
  let decodedArray = encodedString.split(delimiter);
  decodedArray.shift();
  return decodedArray;
};

console.log(decode1(encode1String, "#"));
console.log(decode1(encode2String, String.fromCharCode(257)));
