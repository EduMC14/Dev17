
let saldo = document.querySelector('#saldo');
let btnDep = document.querySelector('#btn-dep');
let btnRe = document.querySelector('#btn-re');
let inRetirar = document.querySelector('#input-re')
let inDepositar = document.querySelector('#input-re')
saldo.value = 10;


function decrementarSaldo(evento){
    console.log(evento)
    saldo.value -= inRetirar.value;
}

function incrementarSaldo(evento){
    console.log(evento)
    saldo.value += inDepositar.value;
}


btnDep.addEventListener('click',incrementarSaldo);

btnRe.addEventListener('click',decrementarSaldo);
