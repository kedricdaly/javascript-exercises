const leapYears = function(year) {

    // first, check if divisible by 4
    if (year % 4 === 0) {
        // century years are only leap years if divisible by both
        // 100 and 400
        if (year % 100 === 0 && year % 400 === 0) {
            return true
        } else if (year % 100 === 0) {
            return false
        }
        return true
    }
    return false
};

// Do not edit below this line
module.exports = leapYears;
