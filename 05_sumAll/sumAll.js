const sumAll = function(firstN,secondN) {
    
    // do not handle negative integers
    if (firstN < 0 || secondN < 0) {
        return "ERROR"
    }

    // do not handle non-numbers
    if ((typeof firstN != "number") || (typeof secondN != "number")) {
        return "ERROR"
    }

    // rearrange inputs so code is order-agnostic
    let lBound = Math.min(firstN, secondN);
    let uBound = Math.max(firstN, secondN);

    let fSum = 0;
    for (let i = lBound; i <= uBound; i++){
        // algebraic solution for lowerbound of 1, upperbound of n
        // this can be expanded for any lowerbound, but we will ignore
        // this case for the sake of implementing the loop
        if (i === 1) {
            fSum = (uBound * (uBound + 1)) / 2
            break
        }
        fSum += i;
    }
    return fSum

};

// Do not edit below this line
module.exports = sumAll;
