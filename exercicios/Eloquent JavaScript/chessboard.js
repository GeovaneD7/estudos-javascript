/* chama um prompt para que o usuario escolha 2 numeros inteiros positivos para definir o grid
 invoca o loop 1 para montar o grid recursivamente

 loop1 - recebe os 2 valores e inicia o loop de impressão
     loop2 */

const tamanho = 8;

let grid = "";

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
