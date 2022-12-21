/*
함수
*/

function plus(a, b) {
  console.log(a + b);
}

plus(4, 7);

//객체에서의 함수 사용
const calculator = {
  add: function (a, b) {
    console.log(a + "+" + b + "=" + (a + b));
  },
  sub: function (a, b) {
    console.log(a + "-" + b + "=" + (a - b));
  },
  mul: function (a, b) {
    console.log(a + "*" + b + "=" + a * b);
  },
  div: function (a, b) {
    console.log(a + "/" + b + "=" + a / b);
  },
  pow: function (a, b) {
    console.log(a + "**" + b + "=" + a ** b);
  },
};

calculator.add(2, 4);
calculator.sub(2, 4);
calculator.mul(2, 4);
calculator.div(2, 4);
calculator.pow(2, 4);
