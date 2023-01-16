const repeatString = function(inputStr, nRepeats) {
    outStr = '';
    for (let i = 0; i<nRepeats ;i++) {
        outStr += inputStr;
    }
    return outStr;
};

// Do not edit below this line
module.exports = repeatString;
