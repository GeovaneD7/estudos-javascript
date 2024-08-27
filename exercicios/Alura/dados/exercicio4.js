// Crie uma variável numérica e uma string. 
// Faça a conversão da variável numérica para string e da string para número. 
// Exiba os tipos de dados resultantes no console.

let numeral = 879;
let string = 'Vanessa';

console.log(numeral);
console.log(typeof numeral);
console.log(string);
console.log(typeof string);

console.log(`Numeral (${numeral}) convertido para String:`);
numeral = String(numeral);
console.log(typeof numeral);

console.log(`String (${string}) convertido para Numeral:`)
string = Number(string);
console.log(string);
console.log(typeof string);
