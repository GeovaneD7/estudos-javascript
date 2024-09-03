/* 
chama um prompt para que o usuario escolha 2 numeros inteiros positivos para definir o grid
invocando um loop que invoca outro loop para montar o grid recursivamente.
const tamanho = 8; usado na primeira etapa do código */

// Aqui eu tentei perguntar ao usuário qual o tamanho do tabuleiro 
const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let grid = "";

rl.question(`\nQual é o tamanho do tabuleiro?\n`, numero => {
    let tamanho = parseInt(numero);
    for (let linha = 0; linha < tamanho; linha++){
        for (let coluna = 0; coluna < tamanho; coluna++) {
            if ((linha + coluna) % 2 == 0) {
                grid += " ";
            } else {
                grid += "#";
            };
        };
        grid += "\n";
    };
    
    console.log(grid);
    rl.close();
});



