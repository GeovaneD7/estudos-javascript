const clima = {
    0: "Ensolarado - ☀️",
    1: "Nublado - ☁️",
    2: "Quente - 🔥",
    3: "Ventando - 🌬️",
    4: "Tempestade com trovões - ⛈️",
    5: "Frio - ❄️",
    6: "Chuvoso - 🌧️",
    7: "Neve/Granizo - 🌨️",
    8: "Parcialmente Nublado - ⛅",
    9: "Chuva Esparsa - 🌦️"
};

const dado = Math.floor(Math.random() * 10);

let resultado = clima[dado];

console.log('\n    ', resultado)
