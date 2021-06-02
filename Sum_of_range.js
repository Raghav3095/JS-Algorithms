// Sum of number in a range between two given numbers

function sumAll(arr) {
    arr.sort(function(a, b) {
      return a === b ? 0 : a < b ? -1 : 1;
    });
    var sum = 0;
    for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {
      sum += i;
    }
    return sum
  }

  // eg. sumAll([4, 1]);