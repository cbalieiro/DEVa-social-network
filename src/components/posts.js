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
  const result = found.find((element) => element === currentUser);
  console.log(result);

  if (currentUser !== post.data().userId && currentUser !== result) {
    const btnLikes = document.createElement('button');
    btnLikes.classList.add('btn-like');
    btnLikes.id = `btn-like-${post.id}`;
    btnLikes.innerText = ' Curtir ';
    btnArea.appendChild(btnLikes);
  }

  if (currentUser !== post.data().userId && currentUser === result) {
    const btndislike = document.createElement('button');
    btndislike.classList.add('btn-dislike');
    btndislike.id = `btn-dislike-${post.id}`;
    btndislike.innerText = ' Não Curti';
    btnArea.appendChild(btndislike);
  }

  const counterLikes = document.createElement('span');
  counterLikes.innerHTML = ` ❤️ ${post.data().likes.length} `;
  counterLikes.classList.add('counter-likes');
  btnArea.appendChild(counterLikes);

  if (firebase.auth().currentUser.uid === post.data().userId) {
    const btnEdit = document.createElement('button');
    btnEdit.classList.add('btn-edit');
    btnEdit.id = `btn-edit-${post.id}`;
    btnEdit.innerText = ' Editar ';
    btnArea.appendChild(btnEdit);

    const btnDelete = document.createElement('button');
    btnDelete.classList.add('btn-delete');
    btnDelete.id = `btn-delete-${post.id}`;
    btnDelete.innerText = ' Deletar ';
    btnArea.appendChild(btnDelete);
  }

  postBody.appendChild(profileInfo);
  postBody.appendChild(content);
  postBody.appendChild(date);
  postBody.appendChild(btnArea);
  posts.appendChild(postBody);
  containerPosts.appendChild(posts);
};