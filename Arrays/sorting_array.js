// given an array arr[]. check whether it is sorted in non-decreasing order. return true if its sorted otherwise false
function checksortedarray(arr)
{
    for(let i=0;i<arr.length-1;i++)
    {
        if(arr[i]>arr[i+1])
        {
            return false;
        }
        
    }
    return true;
    
}
const arr1 = [5,10,15,20,25];
const arr2 = [12,23,32,21,45];

console.log(checksortedarray(arr1));
console.log(checksortedarray(arr2));