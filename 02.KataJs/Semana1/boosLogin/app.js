
let textCorreo = document.querySelector('#textEmail');
let textContraseña = document.querySelector('#textPassword');

let btn = document.querySelector('#btn-entrar');

let regexp_password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
let regexCorre = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

btn.addEventListener('click', () => {
    if (regexCorre.test(textCorreo.value) === true) {
        alert('correo es valido');
    } else {
        alert('Correo es invalido');
    }

    if(regexCorre.test(textContraseña.value) === true){
        alert('contraseña es Valida')
    } else{
        alert('contraseña no valida')
    }
})    
;