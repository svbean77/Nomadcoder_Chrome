/*
배열
*/

//배열 생성
const days = ["mon", "tue", "wed", "thu", "fri", "sat"];
console.log(days);

//배열 값 추가
days.push("sunday");
console.log(days);

//배열 값 수정
days[6] = "sun";
console.log(days);

//배열 값 출력 (0부터 시작)
console.log(days[3]);

//여러 type을 하나의 배열로 묶을 수 있음
const mixed = [1, 1.5, "hello", false, null, undefined];
console.log(mixed);
