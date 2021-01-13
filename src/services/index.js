import { onNavigate } from '../utils/history.js';
import { errors } from './errors.js';

export const validation = (person) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(person.email, person.password)
    .then(() => {
      if (firebase.auth().currentUser == null) {
        onNavigate('/');
      } else {
        onNavigate('/home');
      }
    })
    .catch((error) => errors(error));
};

export const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(() => {
      const person = {
        userName: firebase.auth().currentUser.displayName,
        userId: firebase.auth().currentUser.uid,
        email: firebase.auth().currentUser.email,
      };
      firebase
        .firestore()
        .collection('users')
        .doc(firebase.auth().currentUser.uid)
        .set(person);
    })
    .then(() => {
      onNavigate('/home');
    })
    .then(() => {
      const user = firebase.auth().currentUser;

      if (user != null) {
        user.providerData.forEach(function (profile) {
          const userData = {
            Name: profile.displayName,
            Email: profile.email,
            Photo: profile.photoURL,
          };
        });
      }
    })
    .catch(function (error) {
      var email = error.email;
      var credential = error.credential;
    });
};

export const loginGitHub = () => {
  const provider = new firebase.auth.GithubAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(() => {
      const person = {
        userName: firebase.auth().currentUser.displayName,
        userId: firebase.auth().currentUser.uid,
        email: firebase.auth().currentUser.email,
      };
      firebase
        .firestore()
        .collection('users')
        .doc(firebase.auth().currentUser.uid)
        .set(person);
    })
    .then(() => {
      onNavigate('/home');
    })
    .then(() => {
      const user = firebase.auth().currentUser;
      if (user != null) {
        user.providerData.forEach(function (profile) {
          const userData = {
            Name: profile.displayName,
            Email: profile.email,
            Photo: profile.photoURL,
          };
        });
      }
    })
    .catch((error) => {
      error;
    });
};

export const persist = () => {
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  .then(()=>{
    console.log('persistiu');
  })

};

export const createUser = (person) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(person.email, person.password)
    .then(() => {
      firebase
        .auth()
        .currentUser.updateProfile({ displayName: person.userName });
    })
    .then(() => {
      firebase
        .firestore()
        .collection('users')
        .doc(firebase.auth().currentUser.uid)
        .set(person);
    })
    .then(() => {
      if (firebase.auth().currentUser == null) {
        onNavigate('/');
      } else {
        onNavigate('/home');
      }
    })
    .catch((error) => errors(error));
};

export const logOut = () => {
  firebase.auth().signOut().then(onNavigate('/'));
};
