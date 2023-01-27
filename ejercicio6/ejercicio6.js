const notas = [6, 7, 2, 9 ,3, 4, 5, 8, 2]

let resultado = 0;

for (let i= 0; i < 9; i++) {
   console.log('buclefor ' + (resultado += notas[i]));
};

let resultado2 = 0;
for (const notes of notas) {
   console.log('bucleforof '+ (resultado2 += notes));
}