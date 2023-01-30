let elementosLinks = document.links ;

console.log(elementosLinks);

let elementosLinks2 = document.getElementsByTagName("a");
console.log(elementosLinks2);
const parrafo1 = document.createElement("p");
parrafo1.innerHTML =("el numero de enlaces es " + elementosLinks2.length );
document.body.appendChild(parrafo1)

// enlaces parrafo 3
let parrafosDocument = document.getElementsByTagName("p");
console.log(parrafosDocument);
let parrafo3 = parrafosDocument [2].getElementsByTagName("a");
console.log(parrafo3);
const parrafoTercero = document.createElement("p");
parrafoTercero.innerHTML =("el numero de enlaces es " + parrafo3.length );
document.body.appendChild(parrafoTercero);

//Direccion penultimo enlace
let todosLinks = document.getElementsByTagName("a");
console.log(todosLinks);
let penultimoLink = todosLinks[4].href;
console.log(penultimoLink);
const pintarEnlace = document.createElement("p");
pintarEnlace.innerHTML = ("el enlace es " + penultimoLink);
document.body.appendChild(pintarEnlace);

