"user strict";
/* 
덧셈에 약한 머쓱이는 수학시간에 혼나서 머쓱합니다.
머쓱이의 덧셈공부를 위해 랜덤 덧셈문제를 만들어봅시다.
-조건-
html,css 수정금지
모든 함수는 화살표 함수를 사용
-힌트-
transform, setInterval, setTimeout
transform시간(500,1000,2000)
 */

const question = document.querySelector("#questionBox");
const list = document.querySelectorAll(".wrap li");
const time = document.querySelector(".wrap span");
const ul = document.querySelector(".wrap ul");

let timeId = null,
  count = 10,
  interval = 1000,
  numQuestions = 0;
let answer = 0;
let xoxo = [
  { transform: "translateY(0px)", opacity: "1" },
  { transform: "translateY(1500px)", opacity: "0" },
  { transform: "translateY(-1000px)", opacity: "0" },
  { transform: "translateY(0px)", opacity: "1" },
];
let xxx = [
  { background: "red", transform: "translateX(0px)" },
  { background: "red", transform: "translateX(10px)" },
  { background: "red", transform: "translateX(-10px)" },
  { background: "red", transform: "translateX(10px)" },
  { background: "red", transform: "translateX(-10px)" },
  { background: "red", transform: "translateX(0px)" },
];

// 새로운 문제를 만들어서 적용시키는 함수
function makeQ() {
  count = 10;
  clearInterval(timeId);
  let num1 = Math.floor(Math.random() * 100);
  let num2 = Math.floor(Math.random() * 100);

  answer = num1 + num2;
  question.textContent = `${num1}+${num2}=?`;

  list.forEach((item) => {
    let num3 = Math.floor(Math.random() * 199);
    item.textContent = num3;
  });
  list[Math.floor(Math.random() * 3)].textContent = answer;

  question.animate(xoxo, 2000);
  ul.animate(xoxo, 2000);

  timeId = setInterval(timer, interval);
}
function ox(e) {
  if (Number(e.target.textContent) === answer) {
    e.target.animate([{ background: "green" }], 200);
    makeQ();
  } else {
    e.target.animate(xxx, 200);
  }
}
function timer() {
  count--;
  if (count < 0) {
    count = 10;
    makeQ();
  }
  time.textContent = count;
}

makeQ();
list.forEach((item) => {
  item.addEventListener("click", ox);
});
