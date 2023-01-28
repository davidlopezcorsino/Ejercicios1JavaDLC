const diasAño =["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto","septiembre", "octubre", "noviembre", "diciembre"]

const longDiasaño = diasAño
  .filter(dia => dia.length >7)
  .map(dia => dia.toUpperCase());
  console.log(longDiasaño)

 let cantidadMeses = longDiasaño.length;
 console.log(cantidadMeses)