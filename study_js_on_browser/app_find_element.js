/*
HTML element 찾기
*/

//id로 찾기
console.log("ID로 찾기");
const titleByID = document.getElementById("title");
const titleBySelectorID = document.querySelector("#title");
console.log(titleByID);
console.log(titleBySelectorID);

//class로 찾기
console.log("class로 찾기");
const titleByClass = document.getElementsByClassName("t");
console.log(titleByClass);

//tag로 찾기
console.log("tag로 찾기");
const titleByTag = document.getElementsByTagName("h1");
console.log(titleByTag);

//CSS selector로 찾기
//여러 개가 있어도 첫 번째 결과만 나옴 (여러개 원하면 querySelectorAll)
console.log("CSS selector로 찾기");
const titleBySelector = document.querySelector(".hello h1");
console.log(titleBySelector);
//CSS selector로 찾기: nth-child
const titleSelector2 = document.querySelector(".hello:first-child h2");
console.log(titleSelector2);

//document로 가져온 값 변경
document.title = "search some values";

//색상 변경
titleSelector2.style.color = "blue";
