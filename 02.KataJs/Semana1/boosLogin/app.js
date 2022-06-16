
let textCorreo = document.querySelector('#textEmail');
let textContraseña = document.querySelector('#textPassword');

let btn = document.querySelector('#btn-entrar');


    btn.addEventListener('click',() => {
            let regexCorre = /\S+@\S+\.\S+/;
            if (regexCorre.test(textCorreo.value)) {
                alert('Correo valido');
            } else {
                alert('Correo Invalido');
            }

            let regexp_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;

            
        })

        
;