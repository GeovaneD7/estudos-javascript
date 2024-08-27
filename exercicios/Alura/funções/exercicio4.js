// Crie uma função que receba três números como parâmetros 
// determine qual é o maior entre eles.
// Utilize estruturas condicionais (if, else) para comparar os valores e determinar o maior.
// Imprima o maior valor no console.

function maior (numero1, numero2, numero3) {
    if (numero1 > numero2 && numero1 > numero3) {
        return numero1;    
    } else if (numero2 > numero1 && numero2 > numero3) {
        return numero2;
    } else if (numero3 > numero2 && numero3 > numero1) {
        return numero3;
    }
};

console.log(`O maior dos 3 numeros é o: ${maior(1,3,5)}`)
