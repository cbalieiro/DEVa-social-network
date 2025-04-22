import { createUser, persist } from '../../services/index.js';
import { handleClickEvent } from '../../utils/uiHelpers.js';
import { newUser } from './standard.js';

export const Register = () => {
  const registerPage = document.createElement('div');
  const pageStructure = newUser();
  registerPage.innerHTML = pageStructure;

  handleClickEvent(registerPage, '#btn-register-confirm', (event) => {
    event.preventDefault();
    const pass = registerPage.querySelector('#register-pass').value;
    const passConfirm = registerPage.querySelector('#register-passConfirm').value;
    const errorDoesntMatch = registerPage.querySelector('#doesntMatch');

    if (pass !== passConfirm) {
      errorDoesntMatch.innerHTML = 'Senha não Confere';
    } else {
      errorDoesntMatch.innerHTML = ' ';
      const person = {
        userName: registerPage.querySelector('#register-name').value,
        userNickname: registerPage.querySelector('#register-userID').value,
        userId: '',
        email: registerPage.querySelector('#register-email').value,
        password: registerPage.querySelector('#register-pass').value,
      };
      createUser(person);
      persist(person);
    }
  });

  return registerPage;
};
