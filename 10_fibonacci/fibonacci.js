const fibonacci = function(n) {
    if (n < 0) return "OOPS";
    n = parseInt(n); // allows for strings

    // recursive with no memoization implementation
    if (n == 1) {return 1} else if (n == 2) {return 1};

    //console.log(fibonacci(n-1) + fibonacci(n - 2))
    return fibonacci(n - 1) + fibonacci(n - 2);

    


};

// Do not edit below this line
module.exports = fibonacci;
