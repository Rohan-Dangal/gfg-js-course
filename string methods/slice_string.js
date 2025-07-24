// Given a string s, you need to slice it so that the output is a substring that contains all the characters except first and last. The length of the s will be greater than 2.

const originalstring = "Bal bdr freddy";
const newstring = originalstring.slice(1,-1);
console.log(newstring);

// note: in the context of slice slice(start,end). here in start index means including that but ending index means discarded that in the above code "1" is included , it means including 1 but "-1" is ending index so not including (-1)