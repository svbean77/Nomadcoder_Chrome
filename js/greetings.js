const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const resetForm = document.querySelector("#reset-form");

console.log(resetForm);

//반복하여 사용하는 문자열을 변수로 선언하여 사용
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

//event의 argument 자리를 넣어줌 (보통 event로 넣음)
function onLoginSubmit(event) {
  //browser의 기본 동작을 막는 함수 ex) submit -> 새로고침, link -> 링크이동
  //  event.preventDefault();

  //로그인에 성공하면 입력창 숨기기
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);

  //username 기억하기: localStorage
  localStorage.setItem(USERNAME_KEY, username);

  paintGreetings(username);
}

function onResetSubmit(event) {
  alert("모든 정보가 초기화됩니다.");

  localStorage.clear();
}

function paintGreetings(username) {
  //문자열과 변수를 합칠 때 "문자열1" + 변수 대신 `문자열 ${변수}`로 사용!"
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  resetForm.classList.remove(HIDDEN_CLASSNAME);
}

/*
main
*/

const savedUsername = localStorage.getItem(USERNAME_KEY);
console.log(savedUsername);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);

  resetForm.addEventListener("submit", onResetSubmit);
}
