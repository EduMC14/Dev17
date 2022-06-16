
let calificaciones = [10, 9, 9, 8 , 8];

let numMaterias = calificaciones.length;

let suma = 0;

for (let i = 0; i < numMaterias; i++){
    suma += calificaciones[i];
}

let promedio = suma / numMaterias;

console.log(promedio);


