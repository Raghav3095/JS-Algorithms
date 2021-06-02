// Multiply all numbers given in an array

function multiplyAll(...args) {
    var product = 1;
    for (let i = 0; i < args.length; i++) {
        product *= args[i];
    };
    return product
}

// eg. multiplyAll(2, 3, 10); return 60