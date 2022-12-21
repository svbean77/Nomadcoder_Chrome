/*
조건문: if-else
*/

//prompt: 사용자 입력 창을 띄움
//css를 적용시킬 수 없다는 단점.. 그래서 사용은 잘 안 함
//parseInt: 변수 타입 -> number
//숫자로 변경할 수 없다면 age == NaN
const age = parseInt(prompt("당신의 나이는?"));

//typeof 변수명: 변수 타입 확인
//prompt로 받은 입력은 string
console.log(age, typeof age);

//NaN인지 확인하는 함수: isNaN()
//중첩 조건문 사용 - and: &&, or: ||
if (isNaN(age) || age < 0) {
  console.log("양의 정수만 입력해 주세요");
} else if (age < 20) {
  console.log("당신의 나이는 " + age + ", 술은 금지!");
} else if (age >= 20 && age <= 50) {
  console.log("술술술~");
} else {
  console.log("나이를 생각해 조금만 마시자");
}
