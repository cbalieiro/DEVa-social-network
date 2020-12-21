import {newUser} from './standard.js';
import {validation} from '../../services/index.js';

export const Register = () => {
  const registerPage = document.createElement("div");
  const pageStructure = newUser();
  registerPage.innerHTML = pageStructure;

  const submitBTN=registerPage.querySelector('#btn-register-confirm')

  submitBTN.addEventListener('click', (event) => {
    event.preventDefault();
    const pass =registerPage.querySelector('#register-pass').value;
    const passConfirm =registerPage.querySelector('#register-passConfirm').value;

    if(pass !== passConfirm){
    const erroDoesntMatch = registerPage.querySelector('#doesntMatch')
    erroDoesntMatch.innerHTML = "Senha não Confere"
    
    }
    else{
    const person = {
        userName: registerPage.querySelector('#register-name').value,
        userId: registerPage.querySelector('#register-userID').value,
        email: registerPage.querySelector('#register-email').value,
        password:registerPage.querySelector('#register-pass').value,
    };
    validation(person);
    }
  })

  return registerPage;
};
