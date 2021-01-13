import { loginTags } from './standard.js';
import { validation, persist, loginGoogle, loginGitHub } from '../../services/index.js';
import { onNavigate } from '../../utils/history.js';

export const Login = () => {
  const rootElement = document.createElement('div');
  const pageStructure = loginTags();
  rootElement.innerHTML = pageStructure;

  const loginButton = rootElement.querySelector('#lgn-btn');
  const signUpButton = rootElement.querySelector('#sgnUp-btn');
  const register = rootElement.querySelector('#btn-register');
  const googleButton = rootElement.querySelector('.login-google');
  const gitHubButton = rootElement.querySelector('.login-github');

  loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    const person = {
      email: rootElement.querySelector('#email-login').value,
      password: rootElement.querySelector('#password-login').value,
    };
    validation(person);
    persist(person);
  });

  googleButton.addEventListener('click', (e) => {
    e.preventDefault();
    loginGoogle();
    persist();
  });

  gitHubButton.addEventListener('click', (e) => {
    e.preventDefault();
    loginGitHub();
    persist();
  });

  signUpButton.addEventListener('click', (e) => {
    e.preventDefault();
    rootElement.innerHTML = '';
  });

  register.addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/register');
  });

  return rootElement;
};
