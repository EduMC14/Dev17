
let nombre = document.querySelector('#text-up');
let emailRegis = document.querySelector('#email-up');
let passwordRegis = document.querySelector('#password-up');
let btnRegister = document.querySelector('#btn-regis')

let ls = localStorage;

let userAccounts = [

];

btnRegister.addEventListener('click', () => {
let userObj = new CreateUsers(nombre.value,emailRegis.value,passwordRegis.value);
ls.setItem(`${userObj.nameUser}`, JSON.stringify(userObj));
userAccounts.push(userObj)

})


function CreateUsers(nameUser,email,password){
    this.nameUser = nameUser;
    this.email= email;
    this.password = password;
    this.cash = 10;
}



//Evento iniciar sesion
let inNombre = document.querySelector('#text-in')
let inEmail = document.querySelector('#email-in');
let inPassword = document.querySelector('#password-in');
let btnIn = document.querySelector('#btn-in');
let form = document.querySelector('.formulario')

let regexEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
let p = document.querySelector('.alerta');
let regexPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm; /*- Al menos 8 carácteres
- debe contener al menos 1 letra mayúscula, 1 letra minúscula y 1 número
- Puede contener caracteres especiales*/


btnIn.addEventListener('click', () =>{
    let alert = "";
    let entrar = false;
    let entrar2 = false;
    if(regexEmail.test(inEmail.value) === true && regexPass.test(inPassword.value) === true){
        if (ls.getItem(inNombre.value) === true) {
            console.log('Hola entre')
        }else{
            alert += 'Este Usuario no existe <br> Por Favor Registrate'
            entrar2 = true
        }
    }else{
        alert += `El email no es valido  <br> La contraseña no es valida <br>`;
        entrar = true;
    } 

    if(entrar){ 
        p.innerHTML = alert;
        inEmail.classList.toggle('colorRed')
        inNombre.classList.toggle('colorRed')
        inPassword.classList.toggle('colorRed')

    } 
    if (entrar2) {
        p.innerHTML = alert;
        inNombre.classList.toggle('colorRed')
    }

})

