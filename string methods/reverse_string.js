// write a program in js to reverse a string
function reversestring(str)
{
    return str.split('').reverse().join('');
}
const originalstring = "janga bahadur rana";
const reversedstring = reversestring(originalstring);
const result = reversedstring;
console.log(`The reversed string of "${original}" is: "${reversed}"`);
