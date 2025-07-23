// given a string S and two integers L and R. Print the characters in the range L to R of the string.
// NOTE: Assume zero based indexing.
const S = prompt('rohansinghdangal');
const L = parseInt(prompt("enter the starting index"));
const R = parseInt(prompt("enter the ending index"));

const result = S.substring(L, R+1); //R+1 because it includes itself too 

console.log("numbers from",L, "to", R, "is:", result);