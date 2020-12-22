export const newUser = () => {
  const template = `
  <legend>Cadastre-se no DEVA</legend>
  <input type="text" id="register-name"  placeholder="Nome Completo"></input>
  <input type="text" id="register-userID" placeholder="Nome de Usuária"></input>
  <input type="email" id="register-email" size="30" required placeholder="Insira seu E-mail"></input>
  <input type="password" id="register-pass" name="password" minlength="8" required placeholder="Insira sua senha">
  <input type="password" id="register-passConfirm" name="password" minlength="8" required placeholder="Confirme a senha">
  <p id="doesntMatch"></p>
  <input type="submit" id="btn-register-confirm" value="Avançar">
`;
  return template;
};

// export const validation = (person) => {
// firebase.auth()
// .createUserWithEmailAndPassword(person.email,person.password)
// .then(user => {console.log('usuario',user)})
// .catch('lascou');
// };



