// Given two strings s1 and s2 which are of lengths n and n+1. The second string contains all the character of the first string, but there is one extra character. Your task to find the extra character in the second string and return it. 

let str1 = String(prompt("Enter first string:"));
let str2 = String(prompt("Enter second string:"));

function findextrachar(s1, s2) {
    if (s1.length >= s2.length) {
        return "Error: The first string should be shorter than the second one";
    }

    let sorted1 = s1.split('').sort();
    let sorted2 = s2.split('').sort();

    for (let i = 0; i < sorted1.length; i++) {
        if (sorted1[i] !== sorted2[i]) {
            return sorted2[i];
        }
    }

    // If no mismatch found, the extra character is at the end
    return sorted2[sorted2.length - 1];
}

console.log("The extra character is: " + findextrachar(str1, str2));
