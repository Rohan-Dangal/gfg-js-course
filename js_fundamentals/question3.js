// Given a number, you have to use if, else if, else conditional statements according to the following:
// if number is greater than 100: Print "Big" (without quotes)
// else if number is smaller than 10: Print "Small" (without quotes)
// else: Print "Number" (without quotes)

let number = parseInt(prompt("Enter a number:"));

if (number > 100) {
    console.log("Big");
} else if (number < 10) {
    console.log("Small");
} else {
    console.log("Number");
}