// Given two strings s1 and s2 consisting of lowercase characters. The task is to check whether two given strings are an anagram of each other or not. An anagram of a string is another string that contains the same characters, only the order of characters can be different. For example, "act" and "tac" are an anagram of each other. Strings s1 and s2 can only contain lowercase alphabets

let str1 = String(prompt("Enter first string:"));
let str2 = String(prompt("Enter second string:"));

function areanagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    let processedstr1 = str1.toLowerCase().split('').sort().join('');
    let processedstr2 = str2.toLowerCase().split('').sort().join('');

    return processedstr1 === processedstr2;
}

if (areanagram(str1, str2)) {
    console.log("The strings are anagrams");
} else {
    console.log("The strings are not anagrams");
}
