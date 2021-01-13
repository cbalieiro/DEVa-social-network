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

    // if (firebase.auth().currentUser !== null){
    //   rootElement.querySelector('#header-apear')
    //   .classList.remove('.header-login')
    //   .classList.add('.headerLogged');
      // const logoutButton = rootElement.querySelectorAll('.sgnOutBtn');
      // logoutButton.addEventListener('click', (e) => {
      //   e.preventDefault();
      //   logOut();
      // });
    //   const homeBtn = rootElement.querySelector('#homeBtn');
    //   homeBtn.addEventListener('click', (e) => {
    //     e.preventDefault();
    //     onNavigate('/home');
    // })
    // };
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
