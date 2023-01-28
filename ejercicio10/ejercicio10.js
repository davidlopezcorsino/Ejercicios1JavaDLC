let entero =prompt("Introduce un numero entero")

function esPar(numero) {
    const resultado = entero%2;
return resultado;
}
const valor = esPar();
if(valor==0){
    alert("es par")}
else{
    alert("impar")
}