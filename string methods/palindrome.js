// you are given a string s. your task is to check whether the string is palindrome or not.


//here i have used split().reverse and join method.

function ispalindrome(str)
{
    let rev = str.split("").reverse().join("");
    if(rev === str)
    {
        return true;
    }
    else
    {
        return false;
    }
}
let str1 = "abba";
let str2 = "rotator";
let str3 = "iknowthisisnot";

console.log(ispalindrome(str1));
console.log(ispalindrome(str2));
console.log(ispalindrome(str3));