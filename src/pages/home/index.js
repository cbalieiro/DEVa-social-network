import { logOut } from '../../services/index.js';

export const Home = () => {
  // Coloque sua página
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
      <button class='logOut' id='sgnOutBtn' type="submit">Logout</button>
     
      <form id="post-form">
        <input type="text" id="post-text" width="100px" height="60px"></input>
        <button id="form-button" type="submit">Publicar</button>
      </form>

      <div id="post-list">
      
      </div>

  `;

  const logoutButton = rootElement.querySelector('#sgnOutBtn')
  logoutButton.addEventListener('click', (e)=>{
   e.preventDefault();
   logOut();
  });

  const clear = () => rootElement.querySelector('#post-text').value = " ";
  
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
    postCollection.add(post).then(()=> {
      clear();
      rootElement.querySelector('#post-list').innerHTML = " ";
      loadPosts();
    });
  });
    
  function addPost (post) {
    const templatePost = `
      <div id='${post.id}'>
        ${post.data().text}
        ${post.data().likes}
      </div>
      <button id="like-button" type="submit">Gostei</button>
    `
    // templatePost.getElementById('#like-button').addEventListener('click', () => numLikes ++);
    rootElement.querySelector('#post-list').innerHTML += templatePost;
    
  }
  
  

  function loadPosts(){
    const postCollection = firebase.firestore().collection('posts')
    postCollection.get().then(x =>{
      x.forEach(post => {
        addPost(post)
      });
    })
  }
  
  loadPosts();
  return rootElement;
};
