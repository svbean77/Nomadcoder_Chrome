const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  //두 자리로 출력하기 위해 문자열로 변환 후 padding
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
//일정한 간격을 두고 반복되는 일(interval)을 처리하기 위한 함수
setInterval(getClock, 1000);
