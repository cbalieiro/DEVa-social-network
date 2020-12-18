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
        <button type="submit" id="sgnOutBtn">Logout</button>
        <button type="submit" id="sgnUpBtn">Cadastrar</button>
      </form>
  `;

  const email = rootElement.querySelector("#email");
  const  password = rootElement.querySelector("#password");
  const loginButton = rootElement.querySelector("#lgnBtn");
  const signUpButton = rootElement.querySelector("#sgnUpBtn");

  function clear () {
    email.value = "";
    password.value = "";
    
  };
  
  
  loginButton.addEventListener("click", (e) =>{
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
    clear();
  });


  
  signUpButton.addEventListener("click", (e)=>{
    e.preventDefault();
    rootElement.innerHTML = "";
    
    // firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    // .catch((error) => {
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    // });
    // clear();
  });

  const logoutButton = rootElement.querySelector("#sgnOutBtn")
  logoutButton.addEventListener("click", (e)=>{
    e.preventDefault();
    firebase.auth().signOut();

  });

  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .then(function() {
    return firebase.auth().signInWithEmailAndPassword(email.value, password.value);
  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
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





