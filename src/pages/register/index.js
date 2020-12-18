export const Register = () => {
    // Coloque sua página
    
    const rootElement = document.createElement('div');
    rootElement.innerHTML = `<form>
    <input type="text" id="user" placeholder="Nome de usuário"></input>
    <input type="text" id="name" placeholder="Digite seu nome completo"></input>
    <input type="email" id="email" placeholder="Insira seu E-mail"></input>
    <input type="password" id="password" placeholder="Insira sua Senha"></input>
    <input type="password" id="passAgain" placeholder="Confirmar Senha"></input>
    <button type="submit" id="sgnUpBtn">Cadastrar</button>
    </form>
    `;

    const email = rootElement.querySelector("#email");
    const  password = rootElement.querySelector("#password");
    const signUpButton = rootElement.querySelector("#sgnUpBtn");
    const user = rootElement.querySelector("#user");
    const fullName = rootElement.querySelector("#name");
    const passAgain = rootElement.querySelector("#passAgain");

  
    function clear () {
      email.value = "";
      password.value = "";
      
    };

    const userData = {
        user,
        fullName,
        passAgain,
    };
    
    signUpButton.addEventListener("click", (e)=>{
      e.preventDefault();
      firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
      clear();
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