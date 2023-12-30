const fibonacci = function(n) {
if (n <= 1){
    return n;
} else {
    let last = 0 
    let pres = 1
    for (let i = 2; i <= n; i++){
        let fut = last + pres
        last = pres
        pres = fut
    }
    return pres
}
};

// Do not edit below this line
module.exports = fibonacci;
