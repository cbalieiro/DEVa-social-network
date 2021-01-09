export const timelineTags = () => {
  const template = `
  <header>
    <button class='logOut' id='sgnOutBtn' type='submit'>Logout</button>
  </header>

  <nav>
    <h1>NAV PARA CARREGAR PERFIL</h1>
  </nav>

  <main>

    <div id='post-new'>
      <form id='post-form'>
        <input type='text' id='post-text' width='100px' height='60px' minlength='3' maxlength="600"></input>
        <button id='form-button' type='submit'>Publicar</button>
      </form>
    </div>

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
  counterLikes.innerHTML = ` ❤️ ${post.data().likes} `;
  counterLikes.classList.add('counter-likes');
  btnArea.appendChild(counterLikes);

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

  postBody.appendChild(content);
  postBody.appendChild(btnArea);
  posts.appendChild(postBody);
  containerPosts.appendChild(posts);
};
