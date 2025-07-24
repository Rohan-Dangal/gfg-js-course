// You are given a string s consisting of multiple words. You need to count the total words in the string. Words are separated by a single space.
// Note: It is guaranteed that the last character of the given string is not a white space.
const count = (s) => s.trim().split(/\s+/).length;
const s = "hello this is just for test.";
console.log(count(s));