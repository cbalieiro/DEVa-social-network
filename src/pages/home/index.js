import { logOut } from '../../services/index.js';
import { timelineTags } from './standard.js';

export const Home = () => {
  const rootElement = document.createElement('div');
  const pageStructure = timelineTags();
  rootElement.innerHTML = pageStructure;

  const logoutButton = rootElement.querySelector('#sgnOutBtn');
  logoutButton.addEventListener('click', (e) => {
    e.preventDefault();
    logOut();
  });

  const clear = () => { rootElement.querySelector('#post-text').value = ' '; };

  const postForm = rootElement.querySelector('#post-form');
  postForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = rootElement.querySelector('#post-text').value;
    const numLikes = 0;
    const post = {
      text: text,
      userId: firebase.auth().currentUser.uid,
      likes: numLikes,
      comments: [],
    };
    const postCollection = firebase.firestore().collection('posts');
    postCollection.add(post).then(() => {
      clear();
      rootElement.querySelector('#post-list').innerHTML = ' ';
      loadPosts();
    });
  });

  function addPost(post) {
    const templatePost = `
      <div id='${post.id}'>
        ${post.data().text}
        ${post.data().likes}
      </div>
      <button id='like-button' type='submit'>Gostei</button>
    `;
    // templatePost.getElementById('#like-button').addEventListener('click', () => numLikes ++);
    rootElement.querySelector('#post-list').innerHTML += templatePost;
  }

  function loadPosts() {
    const postCollection = firebase.firestore().collection('posts');
    postCollection.get().then((x) => {
      x.forEach((post) => {
        addPost(post);
      });
    });
  }

  loadPosts();
  return rootElement;
};
