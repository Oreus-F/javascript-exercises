const removeFromArray = function(array, ...itemRemove) {
    return array.filter(val => !itemRemove.includes(val))
};

// Do not edit below this line
module.exports = removeFromArray;
