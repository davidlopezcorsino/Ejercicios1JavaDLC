
let texto = prompt("introduzca el texto");
let textoMA= texto.toUpperCase();
console.log(textoMA);
let textoMi= texto.toLowerCase();
console.log(textoMi);

if (texto===textoMA){
    alert("Tu texto está en MAYUSCULAS");
}
else if (texto===textoMi){
    alert("Tu texto está en minusculas");
}
else{
    alert("Tu texto está mezclado");
}