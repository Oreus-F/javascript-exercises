const sumAll = function(num1, num2) {
    if ((typeof num1 !== 'number' || num1 % 1 !== 0 || num1 < 0) 
|| (typeof num2 !== 'number' || num2 % 1 !== 0 || num2 < 0)) {
        return "ERROR";
    } else {
        let x = Math.min(num1, num2);
        let y = Math.max(num1, num2);
        let result = 0;
        for (x; x <= y; x++){
            result += x
    }
        return result
    }
};



// Do not edit below this line
module.exports = sumAll;
