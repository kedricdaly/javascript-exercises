const removeFromArray = function(inArray, ...toRemove) {

    /* loop through the removal array first because we can exit early 
       if the input array is empty, and input array might shrink with
       each removal item, reducing the number of iterations required
       during looping (although this likely won't matter for our use
      cases)
    */
    for (let i = 0; i < toRemove.length; i++) {
        thisRemove = toRemove[i];
        for (let j = 0; j < inArray.length; j++) {
            if (inArray[j] === thisRemove) {
                // cannot break early in case of repeated values
                // do not use delete() or else can have undefined holes in array
                inArray.splice(j,1);
            }
        }
        if (inArray.length === 0) {
            break
        }
    }
    return inArray

};

// Do not edit below this line
module.exports = removeFromArray;
