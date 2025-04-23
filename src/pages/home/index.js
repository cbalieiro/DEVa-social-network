import { messages } from '../../contants/messages.js';
import {
  logOut,
  currentUser,
  collectionPosts,
  createPost,
  editPostDB,
  updateLike,
  updateDislike,
  deletePostDB,
} from '../../services/index.js';
import { handleClickEvent, getElementBySelector,  getElementByIdFromElement, clearElementContent } from '../../utils/uiHelpers.js';

import {
  timelineTags, postTags, navTags, editPostAtt, updateLikes,
} from './standard.js';


export const Home = () => {
  const rootElement = document.createElement('div');
  rootElement.id = 'pageStructure';
  const pageStructure = timelineTags();
  rootElement.innerHTML = pageStructure;

  handleClickEvent(rootElement, '#sgnOutBtn', (e) => {
    e.preventDefault();
    logOut();
  });


  function setupProfileNavigation() {
    return navTags(getElementBySelector(rootElement, '#profile-info')) || null;
  }

  function setupAndAppendPost(post) {
    return postTags(post, getElementBySelector(rootElement, '#post-list')) || null;
  }

  function initializePostFeed() {
    collectionPosts().then((postList) => {
      postList.forEach((post) => {
        setupAndAppendPost(post);
      });
    });
  }

  function deletePost(postId) {
    const confirmDelete = window.confirm(messages.post.confirmPostDeletion);
    if (confirmDelete === true) {
      deletePostDB(postId)
        .then(() => {
          const postSelected = getElementByIdFromElement(document, `${postId}`);
          if (postSelected) {
            postSelected.remove();
          }
        })
        .catch((error) => {
          console.error('Error deleting post:', error);
          window.alert(messages.post.postNotDeleted);
        });
    }
  }

  function updatePost(postId, classId) {
    const content = getElementByIdFromElement(document, postId);
    const idPostContent = content.firstElementChild.childNodes[1].id;
    const textUser = getElementByIdFromElement(document, idPostContent).textContent;
    const date = new Date();
    if (textUser === null || textUser === undefined || textUser === '') {
      window.alert('Não é possível fazer postagens em branco');
    } else {
      const updateDB = {
        text: textUser,
        date: date.getTime(),
      };
      editPostDB(postId, updateDB)
        .then(() => {
          editPostAtt(postId, classId);
        });

    }
  }

  function likePost(postId, classId) {
    const usersLikes = currentUser();
    updateLike(postId, usersLikes.uid)
      .then(() => {
        updateLikes(postId, classId);
      });
  }

  function dislikePost(postId, classId) {
    const usersLikes = currentUser();
    updateDislike(postId, usersLikes.uid)
      .then(() => {
        updateLikes(postId, classId);
      });
  }

  document.addEventListener('click', (e) => {
    const infoClick = e.target;
    const className = infoClick.className;
    const id = infoClick.id;
    const arrayId = id.split('-');
    let message = '';

    switch (className) {
      case 'btn-like':
        likePost(arrayId[2], className);
        break;
      case 'btn-dislike':
        dislikePost(arrayId[2], className);
        break;
      case 'btn-edit':
        editPostAtt(arrayId[2], className);
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

  const postForm = getElementBySelector(rootElement, '#post-form');
  postForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const textUser = getElementBySelector(rootElement, '#post-text').value;
    const currentUserInfo = currentUser();
    const date = new Date();
    if (textUser === null || textUser === undefined || textUser === '') {
      window.alert('Não é possível fazer postagens em branco');
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
      createPost(post)
        .then(() => {
          clearElementContent(rootElement, '#post-text');
          getElementBySelector(rootElement, '#post-list').innerHTML = ' ';
          initializePostFeed();
        });
    }
  });

  setupProfileNavigation();
  initializePostFeed();
  return rootElement;
};
