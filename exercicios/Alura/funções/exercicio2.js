// Crie uma função que receba a idade de uma pessoa 
// retorne se ela é maior de idade (idade >= 18).
// Imprima o resultado no console.

var idadeUsuario = 22;

function maioridade (idade) {
    if (idade >= 18) {
        return `O usuário é maior de idade.`;
    } else {
        return `O usuário é menor de idade`;
    }
};

console.log(maioridade(idadeUsuario));
