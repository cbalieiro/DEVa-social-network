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
    btnEdit.innerText = ' Editar ';
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