let grados = prompt("Introducir grados celsius")

//f=(C*9/5)+32

function Farenheit(num1) {
    const resultado = num1*(9/5)+32;
    return resultado;
}
const valor = Farenheit(grados);
alert("el resultado en farenheit es " + valor);