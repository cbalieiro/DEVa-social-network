import { Home } from './pages/home/index.js';
import { Login } from './pages/login/index.js';
import { Register } from './pages/register/index.js';
import { persist } from './services/index.js';
import { onNavigate } from './utils/uiHelpers.js';


window.addEventListener('load', () => { 
  persist();
  onNavigate('/'); 
});

const routeRender = () => {
  const rootDiv = document.getElementById('root');
  const routes = {
    '/': Login,
    '/home': Home,
    '/register': Register,
  };

  rootDiv.innerHTML = '';
  rootDiv.appendChild(routes[window.location.pathname]());
};

window.addEventListener('popstate', routeRender);
window.addEventListener('load', () => {
  document
    .getElementById('login')
    .addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate('/');
    });
  document
    .getElementById('home')
    .addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate('/home');
    });
  document
    .getElementById('register')
    .addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate('/register');
    });

  routeRender();
});
