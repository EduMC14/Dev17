var student1 = {
    name: "David Rayy",
    age: 34,
    job: "engineer",
    hobbies: ['Sky', 'football', 'walking my dog']
    };

    console.log(student1.name);
    console.log(student1['age']);
    student1.name = "Steve Jobs";
/*1. Muestra en pantalla el valor de la propiedad name mediante dot notation
2. Muestra en pantalla el valor de la propiedad age mediante bracket notation
3. Modifica el valor de la propiedad name y que el nuevo valor sea: "Steve Jobs"*/

//02.- Escriba un programa de JavaScript para enumerar las propiedades de un objeto de JavaScript.

var student2 = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};


function contarPropiedades(obj){
    let enumerador = 1;
    let newArray = [];
    for(let elemento in obj){
        newArray.push('propiedad ' + enumerador + ' ' + elemento);
        enumerador++;
    }
    return newArray;
}

console.log(contarPropiedades(student2));

//03.- Verifica si la propiedad name se encuentra dentro del siguiente objeto:

var student3 = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

console.log(student3.hasOwnProperty("name"))

//04.-Escriba un programa de JavaScript para eliminar la propiedad rollno del siguiente objeto.
//Imprima también el objeto antes o después de eliminar la propiedad. 

var student4 = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

function deleteRollno(obj){
    if(obj.hasOwnProperty("rollno")){
        delete obj.rollno;
        return obj;
    }

}

console.log(deleteRollno(student4));



//05.- Escriba un programa para modificar el valor de la segunda propiedad del siguiente objeto:
var student5 = {
    name: "David Rayy",
    age: 34,
    job: "engineer",
    hobbies: ['Sky', 'football', 'walking my dog']
};

Object.prototype.modificarAge = function() {
    if(this.hasOwnProperty('age')){
        this['age'] = 35;
        return this
    }
};
student5 = student5.modificarAge();
console.log(student5)
//La nueva edad debe ser 35.


//06.- Escriba un programa para añadir una nueva propiedad al siguiente objeto:
var student6 = {
    name: "David Rayy",
    age: 34,
    job: "engineer",
    hobbies: ['Sky', 'football', 'walking my dog']
};

function agregarPropiedad(obj){
    obj.pet = "cat";
    return obj
}
console.log(agregarPropiedad(student6));

//La nueva propiedad debe ser: pet y agregue un valor, ejemplo: cat, dog.

//07.- Crea un código para llenar un objecto vacio:

function ObjectNew (color, tamaño, peso, cantidad){
    this.name = color;
    this.tamaño = tamaño;
    this.peso = peso;
    this.cantidad = cantidad;
}

const objeto = new ObjectNew('Rojo','Mediano',30 + ' KG', 10);

console.log(objeto);


/*Con las siguiente propiedades:
color
tamaño
peso
cantidad*/