// isEven 

function isEven(numero) {
    let absolute = Math.abs(numero);
    if ((absolute % 2) === 0 ) {
        return true;
    } else if ((absolute % 2) === 1) {
        return false;
    } else {
        isEven((absolute - 2))
    }
};


console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??
