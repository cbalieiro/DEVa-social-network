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
