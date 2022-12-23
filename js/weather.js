//https://openweathermap.org/
const API_KEY = "MY_API_KEY";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  //url에서 정보 얻어오기
  //fetch는 promise이기 때문에 then()을 이용해 다음 코드를 짜야 함 (=바로 실행되지 않음)
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");

      weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
      city.innerText = data.name;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

//현재 위치를 불러오는 함수
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
