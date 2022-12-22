const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  const clickedClass = "clicked";
  //classList를 사용해 삭제, 추가함으로써 기존의 클래스를 변경시키지 않음
  if (h1.classList.contains(clickedClass)) {
    h1.classList.remove(clickedClass);
  } else {
    h1.classList.add(clickedClass);
  }
}

h1.addEventListener("click", handleTitleClick);

//위의 함수를 한 줄로 줄일 수 있는 함수: toggle
const h2 = document.querySelector("div.hello:first-child h2");

function handleH2Click() {
  //알아서 clicked라는 클래스를 추가, 삭제
  h2.classList.toggle("clicked");
}

h2.addEventListener("click", handleH2Click);
