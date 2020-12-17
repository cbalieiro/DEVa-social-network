// import { loginUser, signUp} from './services/index.js';



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
        <button type="submit" id="sgnOutBtn">Logout</button>

      </form>
  `;

  const emailTxt = rootElement.querySelector("#email");
  const  passTxt = rootElement.querySelector("#password");

  const loginButton = rootElement.querySelector("#lgnBtn");
  loginButton.addEventListener("click", (event) =>{
    console.log(passTxt.value);
    event.preventDefault();
    
    firebase.auth().signInWithEmailAndPassword(emailTxt.value, passTxt.value)
    .then((user) => {
      console.log("eita");
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  });


  const signUpButton = rootElement.querySelector("#sgnUpBtn");
  signUpButton.addEventListener("click", (e)=>{
    console.log(emailTxt.value);
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(emailTxt.value, passTxt.value)
    .then((user) => {
      console.log("eita");
    })
    .catch((error) => {
      
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  });

  

    // const stateChange =  firebase.auth().onAuthStateChanged(firebaseUser => {
    //     if(firebaseUser){
    //       console.log(firebaseUser);
    //     }else{
    //       console.log("not logged in");
    //     }
    
    // });
    

  

 

  return rootElement;
  
};





