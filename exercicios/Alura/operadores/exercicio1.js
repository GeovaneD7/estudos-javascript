// Crie variáveis que armazenem o valor do saldo, de depósito e de um saque de uma conta bancária
// depois realize operações de adição e subtração entre eles utilizando uma variável chamada operacao, 
    //considerando a função de cada variável criada anteriormente. 
// Exiba os resultados finais no console.

let saldo = 1000.00;
let deposito = 100.00;
let saque = 250.98;

let operacao = saldo + deposito - saque;

console.log(`Este é o saldo final: ${operacao.toFixed(2)}`)
