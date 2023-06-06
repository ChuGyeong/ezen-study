'use strict';
/* 
머쓱이네 동생은 색칠놀이가 하고싶습니다. 머쓱이 동생을 위해 색칠놀이 문제를 만들어봅시다.
-조건-
html만 수정불가.(css,js 자유)
혹시 난이도가 쉽거나 예제가 더 필요하신분들은
자동으로 나오는 예시와 본인이 선택해서 만든 결과가 같은지 정답/오답 기능을 만들고,
정답이면 자동으로 다음문제가 나오게 기능을 추가해보세요.

-tip-
classList, animate, Math
*/

const question = document.querySelectorAll('.question-list-box li');
const answer = document.querySelectorAll('.answer-list-box li');
const option = document.querySelectorAll('.option-list-box');
let styleBox = '',
   answerBox = '';
let num0 = Math.floor(Math.random() * 3),
   num1 = 0,
   num2 = 0,
   questionList0 = question[0].classList,
   questionList1 = question[1].classList,
   questionList2 = question[2].classList;
questionList0questionList0.from();
questionList1.from();
questionList2.from();

console.log(questionList0);

option.forEach(item => {
   item.addEventListener('click', e => {
      styleBox = e.target.dataset.id;
   });
});
answer.forEach(item => {
   item.addEventListener('click', e => {
      e.target.classList.toggle(styleBox);
   });
});

function newQuestion() {
   question.forEach(item => {
      item.classList.add('bd' + num0);
      num0 = Math.floor(Math.random() * 3);
      item.classList.add('bg' + num1);
      num1 = Math.floor(Math.random() * 3);
      item.classList.add('c' + num2);
      num2 = Math.floor(Math.random() * 3);
   });
}
newQuestion();
