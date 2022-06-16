function calcularAreaRectangulo(base, altura) {
    return base * altura;
}

function calcularAreaTriangulo(base, altura) {
    //base por altura entre 2
    return (base * altura) / 2;
}

function calcularAreaCuadrado(lado) {
    //lado por lado
    return Math.pow(lado, 2);
}

function calcularAreaCirculo(radio) {
    //pi por radio al cuadrado
    const PI = 3.1416;
    radio *= radio;
    return PI * radio;
}



function rec(evento){
    console.log(evento);
    let base = document.querySelector('#base').value;
    let altura = document.querySelector('#altura').value;
    document.querySelector('#resultado').value = calcularAreaRectangulo(base,altura);
}
document.getElementById('btnRec').addEventListener('click',rec)

function triangulo(evento){
    console.log(evento);
    let base = document.querySelector('#base').value;
    let altura = document.querySelector('#altura').value;
    document.querySelector('#resultado').value = calcularAreaTriangulo(base,altura);
}

document.getElementById('btnTri').addEventListener('click',triangulo);

function cuadrado()