const palindromes = function (str) {
    const regexPatern = /[a-z0-9]/g

    const check = str.toLowerCase().match(regexPatern);
    const reversed = check.slice().reverse();
    for (letter in reversed){
        if(!(reversed[letter] === check[letter])) return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
