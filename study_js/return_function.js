/*
함수 값 반환하기
: 함수의 결과를 페이지에 사용해야 할 때 사용 (console.log는 콘솔에만 보여주는 것)
*/

//함수의 값을 반환하지 않는 예제
function plus(a, b) {
  console.log(a + "+" + b + "의 결과는 " + (a + b));
}
//undefined
console.log("함수의 반환 값은 " + plus(1, 2));

//함수의 값을 반환하는 예제
const age = 30;

function calculateAge(ageOfForeigner) {
  return ageOfForeigner + 2;
}

//32
console.log("함수의 반환 값은 " + calculateAge(age));
