// Difference between two arrays
// Compare two arrays and return items that are not common in them

function diffArray(arr1, arr2) {
    var newArr = arr1.filter(item => !arr2.includes(item));
    newArr.push(...arr2.filter(item => !arr1.includes(item)));
  
    return newArr;
  }
  
  // eg. diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);