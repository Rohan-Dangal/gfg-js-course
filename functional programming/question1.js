// given a positive integer n, find the factorial of n.
let number = parseInt(prompt("enter the number"));
function factorial(n)
{
    if(n==0||n==1)
        return 1;
    return n * factorial(n - 1);
}
console.log("the factorial of entered number is" + factorial(number));