import { logOut } from '../../services/index.js';
import { timelineTags, postTags, navTags, editPostAtt,} from './standard.js';

export const Home = () => {
  const rootElement = document.createElement('div');
  rootElement.id = 'pageStructure';
  const pageStructure = timelineTags();
  rootElement.innerHTML = pageStructure;

  const logoutButton = rootElement.querySelectorAll('.sgnOutBtn');
  logoutButton.addEventListener('click', (e) => {
    e.preventDefault();
    logOut();
  });

  const postCollection = firebase.firestore().collection('posts');

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
    postCollection
    .orderBy('date', 'desc')
    .get().then((x) => {
      x.forEach((post) => {
        addPost(post);
      });
    });
  }

  function deletePost(postId) {
    const confirmDelete = confirm('Tem certeza de que deseja excluir a postagem?');
    if (confirmDelete === true) {
      postCollection
      .doc(postId)
      .delete()
      .then(() => {
          const postFather = document.getElementById(`${postId}`);
          postFather.remove();
      });
    }
  }

  function editPost(postId, classId) {
    return editPostAtt(postId, classId);
  }

  function updatePost(postId, classId) {
    const content = document.getElementById(postId);
    const idPostContent = content.firstElementChild.childNodes[1].id;
    const textUser = document.getElementById(idPostContent).textContent;
    const date = new Date();
    if (textUser === null || textUser === undefined || textUser === '') {
      alert('Não é possível fazer postagens em branco');
    } else {
      postCollection
      .doc(`${postId}`)
      .update({
        text: textUser,
        date: date.getTime(),
      })
        .then(() => { editPostAtt(postId, classId); });
    }
  }

  function likePost(postId) {
    const buttonLike = document.getElementById(`btn-like-${postId}`);
    const usersLikes = firebase.auth().currentUser.uid;
    postCollection
    .doc(postId)
    .update({
      likes: firebase.firestore.FieldValue.arrayUnion(usersLikes)
    })
    .then(()=>{   
      buttonLike.nextSibling.innerHTML = ' ';
    })
    .then (()=>{
      postCollection.doc(postId).get(postId.data().likes);
      console.log(likes);
      buttonLike.nextSibling.innerHTML = ` ❤️ ${likes.length} `; 
      console.log('colocou um like');
    }) 
  };

  function dislikePost (postId){
    const buttonLike = document.getElementById(`btn-like-${postId}`);
    const usersLikes = firebase.auth().currentUser.uid;
    postCollection.doc(postId).update({
      likes: firebase.firestore.FieldValue.arrayRemove(usersLikes)
    })
    .then(()=>{   
      buttonLike.nextSibling.innerHTML = ' ';
    })
    .then (()=>{
      const likes = postCollection.doc(postId).get(post.data().likes.length);
      console.log(likes);
      buttonLike.nextSibling.innerHTML = ` ❤️ ${likes} `; 
      console.log('tirou o like');
    }) 
  };


  function dislikePost(postId) {
    alert(postId);
  }

  document.addEventListener('click', (e) => {
    const infoClick = e.target;
    const className = infoClick.className;
    const id = infoClick.id;
    const arrayId = id.split('-');
    let message = '';

    switch (className) {
      case 'btn-like':
        likePost(arrayId[2]);
        break;
      case 'btn-dislike':
        dislikePost(arrayId[2]);
        break;
      case 'btn-edit':
        editPost(arrayId[2], className);
        break;
      case 'btn-delete':
        deletePost(arrayId[2]);
        break;
      case 'btn-submitEdit':
        updatePost(arrayId[2], className);
        break;
      default:
        message = 'não faça nada';
    }
    return message;
  });

  const postForm = rootElement.querySelector('#post-form');
  postForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const textUser = rootElement.querySelector('#post-text').value;
    const currentUserInfo = firebase.auth().currentUser;
    const date = new Date();
    if (textUser === null || textUser === undefined || textUser === '') {
      alert('Não é possível fazer postagens em branco');
    } else {
      const post = {
        name: currentUserInfo.displayName,
        userId: currentUserInfo.uid,
        photo: currentUserInfo.photoURL,
        text: textUser,
        likes: [],
        comments: [],
        date: date.getTime(),
      };
      
      postCollection.add(post).then(() => {
        clear();
        rootElement.querySelector('#post-list').innerHTML = ' ';
        loadPosts();
      });
    }
  });

  loadNav();
  loadPosts();
  return rootElement;
};
