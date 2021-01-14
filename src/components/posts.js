export const postTags = (post) => {
  const { name, photo, text, likes, date } = post.data();
  const id = post;

  const template = `
    <div id='`${ id }`' class='post-body'>
      <div>
        <div class='post-profile-info'>
          <img class='post-img' src=`${ photo } ` width='40' height='40' />
          <span class='post-displayName-info'>` ${ name } `</span>
        </div>
        <p class='post-content' id='post-content-`${ id } `'>
          `${ text } `
        </p>
        <p class='post-date' id='post-date-`${ id } `'>
          `${ new Date(date).toLocaleString() } `
        </p>
        <div class='btns-area'>
          <button class='btn-like' id='btn-like-`${ id } `'> Curtir </button>
          <button class='btn-dislike' id='btn-dislike-`${ id } `'>Não Curti</button>
          <span class='counter-likes'> ❤️ `${ likes } ` </span>
          <button class='btn-edit' id='btn-edit-`${ id } `'> Editar </button>
          <button class='btn-delete' id='btn-delete-`${ id } `'> Deletar </button>
        </div>
      </div>
    </div>
`;
  return template;
};