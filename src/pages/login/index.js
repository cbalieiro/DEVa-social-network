import { loginUser, signUp} from './services/index.js';



export const Login = () => {
  // Coloque sua página
  
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
      <h1>Login!</h1>
      <form>
        <input type="email" id="email" placeholder="E-mail"></input>
        <input type="password" id="password" placeholder="Senha"></input>
        <button type="submit" id="lgnBtn">Login</button>
        <button type="submit" id="sgnUpBtn">Cadastrar</button>

      </form>
  `;

  const emailTxt = document.getElementById("email");
  const  passTxt = document.getElementById("password");
  const email  = emailTxt.value;
  const  password = passTxt.value;
  const loginButton = document.getElementById("lgnBtn");
  loginButton.addEventListener("click", loginUser (email, password));
  
  const signUpButton = document.getElementById("sgnUpBtn");
  signUpButton.addEventListener("click", signUp(emailTxt, passTxt));




  return rootElement;
  
};





