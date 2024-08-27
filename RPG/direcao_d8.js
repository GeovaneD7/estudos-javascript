const direcao = {
    0: "Norte - N ⬆️",
    1: "Sudoeste - SO ↙️",
    2: "Sudeste - SE ↘️",
    3: "Oeste - O ⬅️",
    4: "Leste - L ➡️",
    5: "Noroeste - NO ↖️",
    6: "Nordeste - NE ↗️",
    7: "Sul - S ⬇️"
};

const dado = Math.floor(Math.random() * 8);

let resultado = direcao[dado];

console.log('\n    ', resultado)
