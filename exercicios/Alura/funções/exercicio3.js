// Crie uma função que receba uma string e verifique se é um palíndromo 
    // (uma palavra que é lida da mesma forma de trás para frente) 
    // utilizando o método de string reverse(). 
// Retorne true se for um palíndromo e false caso contrário.
// Imprima o resultado no console.

let string = `arara`;

let reverseString = string.split().reverse().join();

console.log(reverseString);

function palindromo (palavra) {
    if (palavra === reverseString) {
        return true;
    } else {
        return false;
    }
};

console.log(palindromo(string));
