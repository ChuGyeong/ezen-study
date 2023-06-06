"use strict";

let food = [
  { id: "0", txt: "샐러드", src: "img/0.jpg" },
  { id: "1", txt: "삼겹살", src: "img/1.jpg" },
  { id: "2", txt: "초밥", src: "img/2.jpg" },
  { id: "3", txt: "돈가스", src: "img/3.jpg" },
  { id: "4", txt: "제육볶음", src: "img/4.jpg" },
  { id: "5", txt: "수제비", src: "img/5.jpg" },
  { id: "6", txt: "케이크", src: "img/6.jpg" },
  { id: "7", txt: "스테이크", src: "img/7.jpg" },
  { id: "8", txt: "떡볶이", src: "img/8.jpg" },
  { id: "9", txt: "치킨", src: "img/9.jpg" },
  { id: "10", txt: "국밥", src: "img/10.jpg" },
  { id: "11", txt: "피자", src: "img/11.jpg" },
  { id: "12", txt: "햄버거", src: "img/12.jpg" },
  { id: "13", txt: "족발", src: "img/13.jpg" },
  { id: "14", txt: "김치찌개", src: "img/14.jpg" },
  { id: "15", txt: "갈비찜", src: "img/15.jpg" },
];
const question = document.querySelector(".box h2");
const list = document.querySelectorAll(".box ul li");
const foodImg = document.querySelectorAll(".box ul li div");
const foodName = document.querySelectorAll(".box ul li p");
const ul = document.querySelector(".box ul");
let num1 = 0,
  num2 = 0,
  dataNum = "";

//화면에 출력
// foodImg[0].style.backgroundImage = `url(${food[num1].src})`;
// foodName[0].textContent = food[num1].txt;
// foodImg[1].style.backgroundImage = `url(${food[num2].src})`;
// foodName[1].textContent = food[num2].txt;

function make() {
  num1 = Math.floor(Math.random() * food.length);
  num2 = Math.floor(Math.random() * food.length);
  while (num1 === num2) {
    num2 = Math.floor(Math.random() * food.length);
    if (food.length <= 1) {
      list[1].classList.add("on");
      list[0].removeEventListener("click", foodClick);
      ul.style.justifyContent = "center";
      list[0].style.transform = "scale(1.2)";
      list[0].style.cursor = "default";
      break;
    }
  }
  foodImg[0].style.backgroundImage = `url(${food[num1].src})`;
  foodName[0].textContent = food[num1].txt;
  list[0].setAttribute("data-id", food[num1].id);
  foodImg[1].style.backgroundImage = `url(${food[num2].src})`;
  foodName[1].textContent = food[num2].txt;
  list[1].setAttribute("data-id", food[num2].id);
}

function foodClick(e) {
  // 클릭, data-id를 가져옴
  dataNum = e.currentTarget.getAttribute("data-id");
  let numBox1 = list[0].dataset.id;
  let numBox2 = list[1].dataset.id;
  //  비교 - list[0],list[1] data-id값 가져와서
  // dataNum과 다른 list찾기

  let deleteTarget = dataNum === numBox1 ? numBox2 : numBox1;

  for (let i = 0; i < food.length; i++) {
    if (deleteTarget === food[i].id) {
      food.splice(i, 1);
    }
  }
  make();
}

list.forEach((item) => {
  item.addEventListener("click", foodClick);
});

make();
question.textContent = "제일 좋아하는 음식은?";
