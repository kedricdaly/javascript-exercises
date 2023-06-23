const fibonacci = function(n) {
    if (n < 0) return "OOPS";
    n = parseInt(n); // allows for strings

    let fibCache = {}

    const memofib = function(n) {
        if (n in fibCache) return fibCache[n];
        if (n <= 2) return 1;
        return fibCache[n] = memofib(n - 1) + memofib(n - 2);
    }
    
    return memofib(n);
};

// Do not edit below this line
module.exports = fibonacci;
