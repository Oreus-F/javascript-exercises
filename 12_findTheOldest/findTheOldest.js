const currentYear = new Date().getFullYear()

const getAge = function(death, birth) {
    if(!death){
        death = currentYear;
    };

    return death - birth;
};


const findTheOldest = function(array) {

    const oldest = array.sort((a, b) => {
            a = getAge(a.yearOfDeath, a.yearOfBirth);
            b = getAge(b.yearOfDeath, b.yearOfBirth);
            return b - a
    });

    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
