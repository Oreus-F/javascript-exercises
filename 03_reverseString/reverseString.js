const reverseString = function(string) {

let lengthReverse = -string.length;
let resultReverse = "";
let x = 1;

for (let i = -1; i >= lengthReverse; i--) {
    resultReverse = resultReverse.padEnd(x, string.at(i));
    x++;
}

return resultReverse;
};

// Do not edit below this line
module.exports = reverseString;
