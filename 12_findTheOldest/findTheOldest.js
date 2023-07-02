const findTheOldest = function(people) {

    return people.reduce((currentOldest, testOldest) => {
        curOldAge = getAge(currentOldest)
        testOldAge = getAge(testOldest)

        if      (curOldAge > testOldAge) return currentOldest
        else if (curOldAge < testOldAge) return testOldest
        else                             return currentOldest //tie or first iteration
        }) // no initial value defaults to array[0]

    
};

// helper function to get age of a person object
const getAge = function(person) {
    if (person.yearOfDeath) {
        deathYear = person.yearOfDeath
    } else {
        deathYear = new Date().getFullYear()
    }
    return deathYear - person.yearOfBirth
};

// Do not edit below this line
module.exports = findTheOldest;
