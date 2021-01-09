export const timelineTags = () => {
  const template = `
  <button class='logOut' id='sgnOutBtn' type='submit'>Logout</button>

  <form id='post-form'>
    <input type='text' id='post-text' width='100px' height='60px'></input>
    <button id='form-button' type='submit'>Publicar</button>
  </form>

  <div id='post-list'>
  
  </div>

`;
  return template;
};

export const postTags = (post, containerPosts) => {
  const posts = document.createElement('div');
  posts.id = post.id;

  const postBody = document.createElement('div');
  posts.classList.add('post-body');

  const content = document.createElement('p');
  content.classList.add('post-content');
  content.innerText = post.data().text;

  const btnArea = document.createElement('div');
  btnArea.classList.add('btns-area');

  const btnLikes = document.createElement('button');
  btnLikes.classList.add('btn-like');
  btnLikes.id = `btn-like-${post.id}`;
  btnLikes.innerText = ' Curtir ';
  btnArea.appendChild(btnLikes);

  const counterLikes = document.createElement('span');
  counterLikes.innerHTML = ` ❤️ ${post.data().likes}`;
  counterLikes.classList.add('counter-likes');
  btnArea.appendChild(counterLikes);

  postBody.appendChild(content);
  postBody.appendChild(btnArea);
  posts.appendChild(postBody);
  containerPosts.appendChild(posts);
};
