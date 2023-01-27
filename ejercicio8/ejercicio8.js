

function eliminarConsonantes(str) {
    let resultado =  str.replace(/[bcdfghjklmnñpqrstvwxyz]/g, '')
    return resultado
}

var frase ="hola mundo";
const valor = eliminarConsonantes(frase);
console.log(valor)

