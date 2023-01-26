
//base 16*23 cm
//altura 13 cm


const volumenCubo = 16 * 23 * 13;
console.log('volumen',volumenCubo +  ' cm3');

//A= sl +2ab
const areaLateral= 23 * 13;
const areaBase= 16 * 23;
const areaTotal= areaLateral + 2*areaBase;
console.log('resultadoArea',areaTotal + ' cm2');


//Generalización
const base =23;
const altura =13;
const ancho=16;

const volumen2 = base * altura * ancho;
console.log('ResultadoVolumen2',volumen2);

const area2 = base * altura + 2 * (ancho * base);
console.log('ResultadoArea2',area2);