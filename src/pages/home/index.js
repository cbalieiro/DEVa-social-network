import { logOut } from '../../services/index.js';
import { timelineTags, postTags } from './standard.js';

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

  function addPost(post) {
    const containerPosts = rootElement.querySelector('#post-list');
    const templatePost = postTags(post, containerPosts);
    return templatePost;
  }

  function loadPosts() {
    const postCollection = firebase.firestore().collection('posts');
    postCollection.get().then((x) => {
      x.forEach((post) => {
        addPost(post);
      });
    });
  }

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
    const numLikes = 0;
    const date = new Date();
    const post = {
      name: firebase.auth().currentUser.displayName,
      userId: firebase.auth().currentUser.uid,
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


  loadPosts();

  return rootElement;
};
