const findTheOldest = function(people) {

    // this map function mutates person object and people object
    people.map(person => {
        if (person.yearOfDeath) {
            deathYear = person.yearOfDeath
        } else {
            deathYear = new Date().getFullYear()
        }
        person.age = deathYear - person.yearOfBirth
    })
    return people.reduce((accumulator, currentVal) => {
        if (accumulator.age > currentVal.age){
            return accumulator
        }
        else if (accumulator.age < currentVal.age) {
                return currentVal
            }
        else {
            //tie or first iteration
            return accumulator
        }
        }, people[0]
    )
};

// Do not edit below this line
module.exports = findTheOldest;
