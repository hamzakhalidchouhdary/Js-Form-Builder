const KEY = 'jsFormBuilderData';

function setUserData(data) {
  window.localStorage.setItem(KEY, JSON.stringify(data));
}

function getUserData() {
  return JSON.parse(window.localStorage.getItem(KEY));
}