// 객체 : 서로 다른 자료/값들을 하나의 자료로 구성
// 객체 종류 : (1) 내가 만든 객체 : {}, (2) 남이 만든 객체 : console. , document. , etc...
// 남이 만든 객체 장점 : < 라이브러리 > 미리 만들어진 함수(기능)가 많다.

// [1] document : JS 회사에서 HTML 조작할 때 사용하세요.
console.log(document); // 현재 js가 포함하는 HTML 그 자체

// [2] .write() : 
// 매개변수 : html 출력할 문자열
document.write("<h3>내장객체 함수 실행</h3>");

// [3] document.querySelector("CSS선택자") : JS에서 특정 마크없 객체 반환함수
// 매개변수 : CSS선택자
// 반환값 : 선택된 마크업 객체 (또는(없으면) undefined)
console.log(document.querySelector("div"));

let box2 = document.querySelector(".box2");
console.log(box2);

let box3 = document.querySelector("#box3");
console.log(box3);

// [4] document.querySelectorAll("CSS선택자") : JS에서 특정한 마크업 객체들 (배열)
let div2 = document.querySelectorAll("div");
console.log(div2); // html에 존재하는 모든 div

// [5] .innerHTML : 선택된 DOM 객체 내 마크업 사이의 텍스트를 호출
let html1 = document.querySelector("#box3").innerHTML
console.log(html1);
document.querySelector("#box3").innerHTML = "수정된 BOX 3" // 수정
html1 = document.querySelector("#box3").innerHTML
console.log(html1);

// [6] .value : 선택된 DOM 객체 내 마크업 value 속성값 호출
// 버튼 클릭 시 입력받은 값 가져오는 함수
function func1() {
    let value = document.querySelector(".myInput").value;
    console.log(value + "을(를) 입력했군요");
    document.querySelector(".myInput").value="";
} 
// JS 에서 실행하는 방법 : let 결과 = 함수명(인자값)
// HTML에서 실행하는 방법 : <마크업명 이벤트속성명 = "함수명(인자값)"

function func2() {
    document.querySelector(".title").innerHTML = "JS에서 넣어준 텍스트"
}

// 한 명령어(한 줄)에 .(도트/접근연산자)가 많아지면 중간에 변수 활용
function func3() {
    let title2 = document.querySelector(".title2");
    title2.style = "color : red";
    title2.style.backgroundColor = "blue";
}