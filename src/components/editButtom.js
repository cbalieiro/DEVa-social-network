export const editPostAtt = (postId, classId) => {
  const date = document.getElementById(`post-date-${postId}`);
  const currentDate = new Date().getTime();
  const buttonElement = document.getElementById(`${classId}-${postId}`);
  const theClassList = buttonElement.classList;
  theClassList.remove(classId);
  if (classId === 'btn-edit') {
    buttonElement.classList.add('btn-submitEdit');
    buttonElement.id = `btn-submitEdit-${postId}`;
    buttonElement.innerText = ' Publicar ';
  }
  if (classId === 'btn-submitEdit') {
    buttonElement.classList.add('btn-edit');
    buttonElement.id = `btn-edit-${postId}`;
    buttonElement.innerText = ' Editar ';
  }
  const content = document.getElementById(postId);
  const idPostContent = content.firstElementChild && content.firstElementChild.childNodes[1]
    ? content.firstElementChild.childNodes[1].id
    : null;
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