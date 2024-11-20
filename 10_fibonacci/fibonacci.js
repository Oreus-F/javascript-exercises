const fibonacci = function(numb) {
    numb = +numb;
    let fib = [];
    let calcul;

    if (numb === 0)return 0
    else if (numb < 0) return "OOPS"
    else {
        for (let x = 0; x < numb; x++){
            if(fib.length === 0 || fib.length === 1){
                fib.push(1)
            } else {
                fib[x] = fib[x-1] + fib[x-2];
            }
        };
        return fib[numb - 1]
    };
};

// Do not edit below this line
module.exports = fibonacci;
