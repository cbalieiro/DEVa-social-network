export const timelineTags = () => {
  const template = `
  <header class="home">
    <img class="logo-home" src="../../images/logo-deva.png"/>
    <button id='sgnOutBtn' type='submit'>SAIR</button>
  </header>
  <div class="post-profile">
    <nav id='profile-info'>
    </nav>
    <div id='post-new'>
      <form id='post-form'>
        <input type='text' id='post-text' placeholder="O que gostaria de compartilhar?"></input>
        <button id='form-button' type='submit'>Publicar</button>
      </form>
    </div>
  </div>
  <main>
    <div id='post-list'>
    </div>
  </main>
  <footer class='footer'>
    <div>
        <p>Copyright 2020 | <a href='https://github.com/cbalieiro' target='_blank'>Camila Oliveira</a>,<a href='https://github.com/rebecaCanesin' target='_blank'>Rebeca Canesin</a> e <a href='https://github.com/ThWember' target='_blank'>Thais Wemberlaine</a>
        </p>        
    </div>
  </footer>
`;
  return template;
};

export const postTags = (post, containerPosts) => {
  const posts = document.createElement('div');
  posts.id = post.id;

  const postBody = document.createElement('div');
  posts.classList.add('post-body');

  const profileInfo = document.createElement('div');
  profileInfo.classList.add('post-profile-info');

  if (post.data().photo === null) {
    const profileImg = document.createElement('img');
    profileImg.classList.add('post-img');
    profileImg.src = '../../images/code_woman.jpeg';
    profileImg.setAttribute('height', '40');
    profileImg.setAttribute('width', '40');
    profileInfo.appendChild(profileImg);
  } else {
    const profileImg = document.createElement('img');
    profileImg.classList.add('post-img');
    profileImg.src = post.data().photo;
    profileImg.setAttribute('height', '40');
    profileImg.setAttribute('width', '40');
    profileInfo.appendChild(profileImg);
  }

  const displayNameInfo = document.createElement('span');
  displayNameInfo.classList.add('post-displayName-info');
  displayNameInfo.innerText = ` ${post.data().name} `;
  profileInfo.appendChild(displayNameInfo);

  const content = document.createElement('p');
  content.classList.add('post-content');
  content.id = `post-content-${post.id}`;
  content.innerText = `${post.data().text}`;

  const date = document.createElement('p');
  date.classList.add('post-date');
  date.id = `post-date-${post.id}`;
  date.innerText = `${new Date(post.data().date).toLocaleString()}`;

  const btnArea = document.createElement('div');
  btnArea.classList.add('btns-area');

  const currentUser = firebase.auth().currentUser.uid;
  const found = post.data().likes;
  const result = found.find(element => element === currentUser);

  if (currentUser !== post.data().userId && currentUser !== result) {
    const btnLikes = document.createElement('button');
    btnLikes.classList.add('btn-like');
    btnLikes.id = `btn-like-${post.id}`;
    btnLikes.innerHTML = '♡';
    btnArea.appendChild(btnLikes);
  }

  if (currentUser !== post.data().userId && currentUser === result) {
    const btndislike = document.createElement('button');
    btndislike.classList.add('btn-dislike');
    btndislike.id = `btn-dislike-${post.id}`;
    btndislike.innerHTML = '&#10084;&#65039;';
    btnArea.appendChild(btndislike);
  }

  const counterLikes = document.createElement('span');
  if (post.data().likes.length === undefined) {
    counterLikes.innerHTML = `  ${0} `;
  } else {
    counterLikes.innerHTML = `  ${post.data().likes.length} `;
  }
  counterLikes.classList.add('counter-likes');
  counterLikes.id = `counter-likes-${post.id}`;
  btnArea.appendChild(counterLikes);

  if (firebase.auth().currentUser.uid === post.data().userId) {
    const btnEdit = document.createElement('button');
    btnEdit.classList.add('btn-edit');
    btnEdit.id = `btn-edit-${post.id}`;
    btnEdit.innerHTML = ' <i class="fas fa-pen-square"></i> ';
    btnArea.appendChild(btnEdit);

    const btnDelete = document.createElement('button');
    btnDelete.classList.add('btn-delete');
    btnDelete.id = `btn-delete-${post.id}`;
    btnDelete.innerHTML = ' <i class="far fa-trash-alt"></i> ';
    btnArea.appendChild(btnDelete);
  }

  postBody.appendChild(profileInfo);
  postBody.appendChild(content);
  postBody.appendChild(date);
  postBody.appendChild(btnArea);
  posts.appendChild(postBody);
  containerPosts.appendChild(posts);
};

export const navTags = (containerNav) => {
  const profileBody = document.createElement('div');
  profileBody.classList.add('profile-body');

  if (firebase.auth().currentUser.photoURL === null) {
    const profileImg = document.createElement('img');
    profileImg.classList.add('profile-img');
    profileImg.src = '../../images/code_woman.jpeg';
    profileImg.setAttribute('height', '100');
    profileImg.setAttribute('width', '100');
    profileBody.appendChild(profileImg);
  } else {
    const profileImg = document.createElement('img');
    profileImg.classList.add('profile-img');
    profileImg.src = firebase.auth().currentUser.photoURL;
    profileImg.setAttribute('height', '100');
    profileImg.setAttribute('width', '100');
    profileBody.appendChild(profileImg);
  }

  const displayNameInfo = document.createElement('h2');
  displayNameInfo.classList.add('profile-displayName');
  displayNameInfo.innerText = firebase.auth().currentUser.displayName;
  profileBody.appendChild(displayNameInfo);

  containerNav.appendChild(profileBody);
};

export const editPostAtt = (postId, classId) => {
  const date = document.getElementById(`post-date-${postId}`);
  const currentDate = new Date().getTime();

  const btnEdit = document.getElementById(`${classId}-${postId}`);
  const theClassList = document.getElementById(`${classId}-${postId}`).classList;
  theClassList.remove(classId);
  if (classId === 'btn-edit') {
    btnEdit.classList.add('btn-submitEdit');
    btnEdit.id = `btn-submitEdit-${postId}`;
    btnEdit.innerText = ' Publicar ';
  }
  if (classId === 'btn-submitEdit') {
    btnEdit.classList.add('btn-edit');
    btnEdit.id = `btn-edit-${postId}`;
    btnEdit.innerHTML = ' <i class="fas fa-pen-square"></i> ';
  }
  const content = document.getElementById(postId);
  const idPostContent = content.firstElementChild.childNodes[1].id;
  const contentChange = document.getElementById(idPostContent);
  if (classId === 'btn-edit') {
    contentChange.setAttribute('contenteditable', 'true');
    contentChange.setAttribute('style', 'background-color: #D9D9D9;');
  }
  if (classId === 'btn-submitEdit') {
    contentChange.removeAttribute('contenteditable');
    contentChange.removeAttribute('style');
    date.innerText = `${new Date(currentDate).toLocaleString()}`;
  }
};

export const updateLikes = (postId, classId) => {
  const btnEdit = document.getElementById(`${classId}-${postId}`);
  const theClassList = document.getElementById(`${classId}-${postId}`).classList;
  theClassList.remove(classId);
  if (classId === 'btn-like') {
    btnEdit.classList.add('btn-dislike');
    btnEdit.id = `btn-dislike-${postId}`;
    btnEdit.innerHTML = ' &#10084;&#65039;';
  }
  if (classId === 'btn-dislike') {
    btnEdit.classList.add('btn-like');
    btnEdit.id = `btn-like-${postId}`;
    btnEdit.innerHTML = '♡';
  }
  const counter = document.getElementById(postId);
  const idPostCounter = counter.lastElementChild.childNodes[3].childNodes[1].id;
  const counterChange = document.getElementById(idPostCounter);
  if (classId === 'btn-like') {
    const count = Number(counterChange.textContent);
    counterChange.innerHTML = count + 1;
  }

  if (classId === 'btn-dislike') {
    const count = Number(counterChange.textContent);
    counterChange.innerHTML = count - 1;
  }
};
