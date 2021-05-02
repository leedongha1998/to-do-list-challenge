const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
const CHECKED_CN = "checked";
let toDos = [];

function delToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDo();
}
function lineToDo(event) {
  const lineBtn = event.target;
  const li = lineBtn.parentNode;
  li.classList.toggle(CHECKED_CN);
}

function saveToDo() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function showToDo(text) {
  const li = document.createElement("li");
  const lineBtn = document.createElement("button");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.innerText = "❌";
  lineBtn.innerText = "💖";
  lineBtn.addEventListener("click", lineToDo);
  delBtn.addEventListener("click", delToDo);
  span.innerText = text;
  li.id = newId;
  li.appendChild(lineBtn);
  li.appendChild(span);
  li.appendChild(delBtn);
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj);
  saveToDo();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  showToDo(currentValue);
  toDoInput.value = "";
}

function loadToDo() {
  const loadedToDo = localStorage.getItem(TODOS_LS);
  if (loadedToDo !== null) {
    const parsedToDo = JSON.parse(loadedToDo);
    parsedToDo.forEach(function (toDo) {
      showToDo(toDo.text);
    });
  }
}

function init() {
  loadToDo();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
