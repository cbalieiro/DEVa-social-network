import { logOut } from '../../services/index.js';
import { timelineTags, postTags, navTags } from './standard.js';

export const Home = () => {
  const rootElement = document.createElement('div');
  rootElement.id = 'pageStructure';
  const pageStructure = timelineTags();
  rootElement.innerHTML = pageStructure;

  const logoutButton = rootElement.querySelector('#sgnOutBtn');
  logoutButton.addEventListener('click', (e) => {
    e.preventDefault();
    logOut();
  });

  const clear = () => { rootElement.querySelector('#post-text').value = ' '; };

  function loadNav() {
    const containerNav = rootElement.querySelector('#profile-info');
    const templateNav = navTags(containerNav);
    return templateNav;
  }

  function addPost(post) {
    const containerPosts = rootElement.querySelector('#post-list');
    const templatePost = postTags(post, containerPosts);
    return templatePost;
  }

  function loadPosts() {
    const postCollection = firebase.firestore().collection('posts').orderBy('date', 'desc');
    postCollection.get().then((x) => {
      x.forEach((post) => {
        addPost(post);
      });
    });
  }
  rootElement.addEventListener('DOMContentLoad', loadPosts());

  rootElement.addEventListener('click', (e) => {
    const infoClick = e.target;
    const className = infoClick.className;
    const id = infoClick.id;
    const arrayId = id.split('-');
    // console.log(arrayId[2])
    let message = '';

    switch (className) {
      case 'btn-like':
        message = 'btn-like';
        break;
      case 'btn-edit':
        message = 'btn-edit';
        break;
      case 'btn-delete':
        message = 'btn-delete';
        break;
      default:
        message = "bla bla"
    }
    console.log(message);
  });

  // const deletePost = rootElement.querySelector();
  // console.log(deletePost);

  // function deletePost(postId) {
  //   const postCollection = firebase.firestore().collection('posts');
  //   postCollection.doc(postId).then((doc) => {
  //     doc.delete()
  //       .then(rootElement.querySelector(`#${postId}`).removeChild('div'));
  //   });
  // }

  //  comentarios para não ter conflito
  //  comentarios para não ter conflito
  //  comentarios para não ter conflito

  // function deletePost(postId) {
  //   const postCollection = firebase.firestore().collection('posts');
  //   postCollection.doc(postId).then((doc) => {
  //     doc.delete()
  //       .then(rootElement.querySelector(`#${postId}`).removeChild('div'));
  //   });
  // }

  const postForm = rootElement.querySelector('#post-form');
  postForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const textUser = rootElement.querySelector('#post-text').value;
    const currentUserInfo = firebase.auth().currentUser;
    const numLikes = 0;
    const date = new Date();
    if (textUser === null || textUser === undefined || textUser === '') {
      alert('Não é possível fazer postagens em branco');
    } else {
      const post = {
        name: currentUserInfo.displayName,
        userId: currentUserInfo.uid,
        photo: currentUserInfo.photoURL,
        text: textUser,
        likes: numLikes,
        comments: [],
        date: date.toLocaleString(),
        time: date.getTime(),
      };
      const postCollection = firebase.firestore().collection('posts');
      postCollection.add(post).then(() => {
        clear();
        rootElement.querySelector('#post-list').innerHTML = ' ';
        loadPosts();
      });
    }
  });

  //  comentarios para não ter conflito
  //  comentarios para não ter conflito
  //  comentarios para não ter conflito
  //  comentarios para não ter conflito//  comentarios para não ter conflito
  //  comentarios para não ter conflito//  comentarios para não ter conflito
  //  comentarios para não ter conflito//  comentarios para não ter conflito
  //  comentarios para não ter conflito//  comentarios para não ter conflito
  //  comentarios para não ter conflito//  comentarios para não ter conflito
  //  comentarios para não ter conflito//  comentarios para não ter conflito
  //  comentarios para não ter conflito

  loadNav();
  return rootElement;
};
