const repeatString = function(inputStr, nRepeats) {
    
    if (nRepeats < 0) {
        return 'ERROR';
    }
    
    let outStr = '';
    for (let i = 0; i<nRepeats ;i++) {
        outStr += inputStr;
    }
    return outStr;
};

// Do not edit below this line
module.exports = repeatString;
