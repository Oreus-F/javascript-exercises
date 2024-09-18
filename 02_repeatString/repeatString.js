/* 
const repeatString = function(word, multiplier) {
    if (multiplier < 0) {
        return "ERROR"
    }
    singleString = `${word}`
    return fullString = singleString.repeat(multiplier)
}; 
*/


const repeatString = function(word, multiplier) {
    let result = "";
    if (multiplier < 0) {
        return result = "ERROR"
    } for (let i = 0; i < multiplier; i++) {
        result += word;
    }
    return result
}

// Do not edit below this line
module.exports = repeatString;
