// exporte suas funções

export const myFunction = () => {
  // seu código aqui
  console.log('Olá mundo!');
};

export const validation = (person) => {
  firebase.auth()
    .createUserWithEmailAndPassword(person.email, person.password)
    .then(user => { console.log('usuario', user) })
    .catch('lascou');
};