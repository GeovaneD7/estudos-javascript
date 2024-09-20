// Definir uma função que receba 2 argumentos e retorne o menor entre eles

function minimo (primeiro, segundo) {
    if (primeiro < segundo) {
        return primeiro;
    } else {
        return segundo;
    }
}


console.log(minimo(0, 10));
// → 0
console.log(minimo(0, -10));
// → -10

