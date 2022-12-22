/*
Event
이벤트 찾기: tag이름 html element mdn 구글링 - Web APIs 포함된 사이트
*/

const h1 = document.querySelector("div.hello:first-child h1");

function TitleClick() {
  console.log("title was clicked!");
  h1.style.color = "red";
}
function MouseEnter() {
  h1.innerText = "Mouse is here!";
}
function MouseLeave() {
  h1.innerText = "Mouse is gone!";
}
function WindowResize() {
  document.body.style.backgroundColor = "tomato";
}
function WindowCopy() {
  alert("copier!");
}

//element에 이벤트를 부여
//방법1: element.listner = function
//방법2: element.addEventListner(event, function) -> element.removeEventListner로 이벤트 삭제 가능!
h1.onclick = TitleClick;
h1.addEventListener("mouseenter", MouseEnter);
h1.addEventListener("mouseleave", MouseLeave);

//window에 이벤트 부여
window.addEventListener("resize", WindowResize);
window.addEventListener("copy", WindowCopy);

//조건문을 추가한 event 예제
const h2 = document.querySelector("div.hello:first-child h2");

function handleTitleClick() {
  const currentColor = h2.style.color;
  let newColor;

  if (currentColor === "blue") {
    newColor = "tomato";
  } else {
    newColor = "blue";
  }

  //javascript 내부에서 css 변경
  h2.style.color = newColor;
}

h2.addEventListener("click", handleTitleClick);
