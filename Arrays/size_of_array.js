// given an array arr[].find its size
function arrSize(arr) {
    if (arr == null) return 0;   
    return arr.length;
  }
  
  const arr = [12, 34, 56, 78, 90];
  console.log(arrSize(arr)); 
  console.log(arrSize(null)); 
  
