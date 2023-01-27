const array =[1, 2, 3, 4, 5, 6];
//SIN FUNCIONES
let suma = array[1] + array[3] + array[5];
console.log(suma)


//CON FUNCIONES


function sumarNumerosPares (numero1,numero2,numero3){
    const resultado = numero1 + numero2 + numero3;
    return resultado;
}
const valor = sumarNumerosPares(array[1], array[3], array[5])
console.log(valor)