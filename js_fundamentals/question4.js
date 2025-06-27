//You will be given a number A. Your task is to print "Positive" if the number is positive, print "Negative" if negative and print "Zero" if it is 0 (without adding a line break statement).
let A = parseInt(prompt("Enter a number:"));

if (A > 0) {
    document.write("Positive");
} else if (A < 0) {
    document.write("Negative");
} else {
    document.write("Zero");
}