// Given a number, you have to use the if statement to print "Big" (without quotes) if the given number is greater than 100. The statement "Number" (without quotes) will be printed regardless. Just write an if statement at the mentioned place that prints "Big" if the given number is greater than 100.

const message = parseInt(prompt("enter a number"));
if(message>100)
{
    console.log("big");
}
console.log("number");