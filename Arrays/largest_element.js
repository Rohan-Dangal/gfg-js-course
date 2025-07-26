//given an array arr[]. task is to find the largest element in the array.

function findLargest(arr) {
  if (arr.length === 0) return undefined;
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findLargest([1, 2, 3, 4, 5, 6]));
console.log(findLargest([-10, -3, -50, -2])); 
console.log(findLargest([]));                   

