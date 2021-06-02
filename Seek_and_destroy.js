// Seek and destroy
// Given an array, removes elements from the array with the same value as the arguments.

function destroyer(arr, ...args) {
	return arr.filter(el => !args.includes(el));
}

// eg. destroyer([1, 2, 1, 3, 2, 1], 2, 3);