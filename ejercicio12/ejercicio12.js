const topics =["JavaScript", "Variables", "funciones", "condicionales", "bucles"];


function topicsMayusculas(letra){
       const topicsAlreves = topics.reverse();
       const topicstexto = topicsAlreves.join("-");

console.log( topicstexto);
       let resultado = topicstexto.toUpperCase();
       return resultado;
}

let topicsMay= topicsMayusculas()
alert(topicsMay)

let convArray = topicsMay.split(" ");
console.log(convArray);

let arrayFinal =[];
arrayFinal.push(convArray);
console.log(arrayFinal);
