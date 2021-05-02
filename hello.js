const helloForm = document.querySelector(".js-hello"),
  helloInput = helloForm.querySelector("input"),
  helloSpan = document.querySelector(".js-hello_text");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = helloInput.value;
  showName(currentValue);
  saveName(currentValue);
}

function askForName() {
  helloForm.classList.add(SHOWING_CN);
  helloForm.addEventListener("submit", handleSubmit);
}

function showName(text) {
  helloForm.classList.remove(SHOWING_CN);
  helloSpan.classList.add(SHOWING_CN);
  helloSpan.innerText = `hello ${text}`;
}

function HelloName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    showName(currentUser);
  }
}

function init() {
  HelloName();
}

init();
