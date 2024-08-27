// Crie uma arrow function chamada calculaPotencia que receba dois parâmetros: a base e o expoente.
// A função deve calcular a potência da base elevada ao expoente e retornar o resultado.

let base = 2;
let expoente = 6;

const calculaPotencia = (base, expoente) => {
    return Math.pow(base, expoente);
};

let resultado = calculaPotencia(base, expoente);

console.log(`O resultado da base ${base} elevado ao expoente ${expoente} é: ${resultado}`);
