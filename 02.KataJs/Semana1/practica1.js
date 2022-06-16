/*
En una universidad se llevan a cabo los examenes de admisión, para que una persona pueda presentar
el examen de admisión, debe llevar los siguientes requisitos:
1 ficha de entrada
identificacion oficial
llegar a tiempo
Si el aspirante no cuenta con los requisito no podrá presentar el examen de admisión
Para que el aspirante se le considere que llegó a tiempo, debe llegar a las 8:00 am
*/

//Las variables que deberían encontra en el texto pasarlas a codigo
//Las condiciones logicas necesarias para obtener el resultado
//Resultado: Saber si un aspirante puede presentar examen de admision o no puede

let numFichaEntrada = 90;
let ideOficial = "si";
let horaLlegada = 7;
let horaPermitida = 8;


if(numFichaEntrada > 0 && numFichaEntrada <= 100 &&  ideOficial == 'si' && horaLlegada <= horaPermitida){
    console.log( 'puede presentar el examen')
}else{
    console.log('no puede presentar el examen')
}
/*
Una vez el aspirante puede presentar el examen de admisión su resultado se sumara a su calificación de bachillerato
y se sumará a su resultado de examen, promediando ambas calificaciones
Despues de promediar las calificaciones si el el aspirante saca las siguientes calificaciones
podrá ingresar a las siguientes carreras

  //Bachillerato y examen: 0 a 100

Medicina: 90
Mecatrónica: 85
Ingenieria civil: 80
Derecho: 80
Ingenieros computacion: 70
Comunicaciones y electronica: 60
*/

let examenAd = 30;
let calBachillerato = 30;
let promedio = (examenAd + calBachillerato) / 2;

let medicina = 90;
let mecatrónica = 85;
let ingenieriaCivil = 80;
let derecho = 80;
let ingenierosComputacion = 70;
let comunicacionesElectronica =60; 

let arrCarreras = [];


    if (promedio >= medicina && promedio >= mecatrónica && promedio >= ingenieriaCivil && promedio >= derecho
        && promedio >= ingenierosComputacion && promedio >= comunicacionesElectronica){
        arrCarreras.push('Puedes ingresar a todas las materias');
    } else if(promedio >= mecatrónica){
        arrCarreras.push('puedes ingresar a todas las materias excepto medicina')
    }  else if(promedio >= ingenieriaCivil){
        arrCarreras.push('puedes ingresar a todas las materias excepto mecatronica y medicina')
    } else if(promedio >= derecho){
        arrCarreras.push('puedes ingresar a solo a derecho, ingenieros de comunicacion y comunicaciones electronica')
    } else if(promedio >= ingenierosComputacion){
        arrCarreras.push('puedes ingresar a ingenieros de computacion y comunicaciones y electronica')
    } else if(promedio >= comunicacionesElectronica){
        arrCarreras.push('sole puedes ingresar a comunicaciones electronica')
    } else if(promedio < comunicacionesElectronica){
        arrCarreras.push('no puedes ingresar a ninguna carrera')
    }

console.log(arrCarreras[0]);