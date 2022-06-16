let arrayTeclado = document.querySelectorAll('#btn');
let text = document.querySelector('#resultado');
let btnDelete = document.querySelector('#btn-delete');
let btnSpace = document.querySelector('#btn-espacio');
let btnMayus = document.querySelector('#btn-bloq')

let caracteres = [];

arrayTeclado.forEach(boton => {
    boton.addEventListener('click', () => {
    text.value += boton.value;
    caracteres = text.value.split("");
    })
});


btnDelete.addEventListener("click", () => {
    caracteres.pop();
    text.value = caracteres.join("");
});

btnSpace.addEventListener("click", () => {
    caracteres.push(" ");
    text.value = caracteres.join("");
});

btnMayus.addEventListener("click", () => {
    arrayTeclado.forEach((boton) => {
    boton.classList.toggle("mayus");
    });
});
    

