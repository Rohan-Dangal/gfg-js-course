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


// Note:
// split is a string method that turns a string into an Array.

// reverse is an array method that simply reverses the array elements. so it doesnot accept any parameters