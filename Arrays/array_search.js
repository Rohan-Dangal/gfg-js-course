// Given an array, arr[] of n integers, and an integer element x, find whether element x is present in the array. Return the index of the first occurrence of x in the array, or -1 if it doesn't exist.
function findelementindex(arr,x)
{
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]===x)
        {
            return i;
        }
    }
    return -1;
}
const arr = [10,20,30,45,66];

console.log(findelementindex(arr, 10));
console.log(findelementindex(arr, 96));

