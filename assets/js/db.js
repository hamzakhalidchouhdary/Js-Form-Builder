const KEY = 'jsFormBuilderData';

var GLOBAL_STATE = [];

function setUserData() {
  window.localStorage.setItem(KEY, JSON.stringify(GLOBAL_STATE));
}

function getUserData() {
  GLOBAL_STATE = JSON.parse(window.localStorage.getItem(KEY)) || [];
}