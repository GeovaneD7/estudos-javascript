// Considere uma situação em que você está verificando se um usuário está logado e tem permissão de administrador para acessar determinada funcionalidade. 
// Utilize variáveis booleanas para simular essas condições e use o operador AND para verificar se ambas são verdadeiras.

let usuarioLogado = true;
let usuarioAdmin = false;

if (usuarioLogado === true && usuarioAdmin === true) {
    console.log(`Usuário possui permissão.`);
} else {
    console.log(`Usuário sem permissão.`);
};
