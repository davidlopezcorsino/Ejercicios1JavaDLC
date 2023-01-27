const array = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

let DNI = prompt("Introducir DNI sin letra");


if (DNI<0 || DNI>99999999) {
alert("El numero indicado no es valido");
}
else{
   let resto = (DNI%23);
   let letra = array[resto];
   alert("la letra de DNI debería ser " + letra);

let letraDNI = prompt("Introducir letra");

if (letra === letraDNI) {
    alert("La letra y el DNI son correctos");
}
else {
    alert("La letra indicada no es correcta");
}}