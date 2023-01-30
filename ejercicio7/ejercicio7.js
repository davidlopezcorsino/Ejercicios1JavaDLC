const array =[1, 2, 3, 4, 5, 6];
let resultado =0;
//SIN FUNCIONES
let suma = array[1] + array[3] + array[5];
console.log(suma)


//CON FUNCIONES


function sumarNumerosPares (array){
    for (let i =0; i <array.length ;i++){
        if (array[i]%2===0){
            resultado += array[i];

        }

    };
    return resultado;
}
const valor = sumarNumerosPares(array)
console.log(valor)