function zeroPad(numero, tamanho) {
    let string = String(numero);
    while (string.length < tamanho) {
        string = "0" + string;
    }
    return string;
}

function imprimeInventarioFazenda(vaca, galinha, porco) {
    console.log(`${zeroPad(vaca, 3)} Vacas`);
    console.log(`${zeroPad(galinha, 3)} Galinhas`);
    console.log(`${zeroPad(porco, 3)} Porcos`);
}

imprimeInventarioFazenda(7, 21, 5);
