const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

let toDos = [];

const DOTOS_KEY = "todos";

function saveToDos() {
  //JSON.stringify: JSON 형식 그대로 문자열로 저장하는 방법 -> JSON.parse를 사용해 다시 js 형태로 바꿈
  localStorage.setItem(DOTOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  //선택한 리스트가 무엇인지 찾기
  //target이 누구인가, target 버튼의 parent는 누구인가: string
  const li = event.target.parentElement;
  li.remove();

  //localstorage에서 리스트를 삭제 -> 새로고침해도 반영 되어있음!
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");

  li.id = newToDo.id;
  span.innerText = newToDo.text;
  button.innerText = "❌";

  button.addEventListener("click", deleteToDo);

  li.appendChild(span);
  li.appendChild(button);

  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();

  const newToDo = toDoInput.value;
  toDoInput.value = "";

  //각 리스트에 id를 부여하기 위해 object 사용
  const newTodoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);

  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

//저장된 todo를 불러옴
const savedToDos = localStorage.getItem(DOTOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;

  //ToDos의 개수만큼 함수 실행
  //forEach: 각각의 배열 요소에 대해 실행
  parsedToDos.forEach((item) => paintToDo(item));
}
