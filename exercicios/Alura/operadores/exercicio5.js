// Imagine um sistema que determina se um usuário tem idade suficiente para comprar o ingresso para um show. 
// Declare duas variáveis que determinem a idade mínima e qual a idade do usuário 
// utilize estruturas condicionais (if, else) para determinar se o usuário pode realizar a compra.
// Imprima os resultados conforme necessário.

const idadeMin = 18;
let idadeUsuario = 16;

if (idadeUsuario >= idadeMin) {
    console.log(`Usuario maior de 18`);
} else {
    console.log(`Usuário é menor de idade.`);
};
