const sumAll = function(firstN,secondN) {
    
    // rearrange inputs so code is order-agnostic
    let lBound = Math.min(firstN, secondN);
    let uBound = Math.max(firstN, secondN);

    let fSum = 0;
    for (let i = lBound; i <= uBound; i++){
        fSum += i;
    }
    return fSum

};

// Do not edit below this line
module.exports = sumAll;
