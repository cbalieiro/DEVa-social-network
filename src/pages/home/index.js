import { logOut } from '../../services/index.js';
import { timelineTags, postTags } from './standard.js';

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
  //   postCollection.doc(postId).then(doc => doc.delete()
  //   )
  // }

  const postForm = rootElement.querySelector('#post-form');
  postForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const textUser = rootElement.querySelector('#post-text').value;
    console.log(textUser);
    const numLikes = 0;
      const post = {
        text: textUser,
        userId: firebase.auth().currentUser.uid,
        likes: numLikes,
        comments: [],
        date: new Date(),
      };
      
    if (textUser === ' '){
      console.log('Escreva alguma coisa')
    }else{
      
      const postCollection = firebase.firestore().collection('posts');
        postCollection.add(post).then(() => {
        clear();
        rootElement.querySelector('#post-list').innerHTML = ' ';
        loadPosts();
      });
    }
    
  });

  loadPosts();

  return rootElement;
};
