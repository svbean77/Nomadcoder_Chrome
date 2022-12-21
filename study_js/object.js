/*
객체
*/

//객체 생성
const player = {
  name: "bob",
  age: 30,
  sayHello: function () {
    console.log("hello!");
  },
};
console.log(player);

//객체 property 추가
player.job = "student";
console.log(player);

//객체 property 값 출력
console.log(player.name);
console.log(player["age"]);
player.sayHello();
