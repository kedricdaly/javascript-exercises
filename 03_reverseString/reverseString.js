const reverseString = function(inStr) {
    let outStr = '';

    let charArray = inStr.split('');
    let lArray = charArray.length;
    //console.log(`${lArray}`);
    for (let i=lArray-1; i > -1; i--) {
       outStr += charArray[i];
    }

    return outStr;
};

// Do not edit below this line
module.exports = reverseString;
