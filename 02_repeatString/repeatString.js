const repeatString = function(word, multiplier) {
    if (multiplier < 0) {
        return "ERROR"
    }
    singleString = `${word}`
    return fullString = singleString.repeat(multiplier)
};

// Do not edit below this line
module.exports = repeatString;
