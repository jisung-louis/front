// [ 문제] 아래 조건문 관련 10문제 , 단] for(반목문) 은 사용하지 않습니다.
// [ 제출방법 ] 코드가 작성된 파일이 위치한 깃허브 상세 주소를 제출하시오.

// [ 실습4 ]

// 문제 1: 과일 목록 관리
// 다음 과일 목록 배열이 주어져 있습니다.
// let fruitList = [ '사과', '바나나' ];
// 사용자로부터 새로운 과일 이름을 입력받아, fruitList에 이미 존재하는 과일이면 '이미 존재하는 과일입니다.'를 출력하세요. 존재하지 않는 과일이면 배열에 추가한 뒤, 변경된 배열 전체를 출력하는 프로그램을 작성하시오.

let fruitList = ['사과', '바나나'];
let input = prompt("과일 이름 입력 : ");

if (fruitList.includes(input)) {
    alert("이미 존재하는 과일입니다.");
}
else {
    fruitList.push(input);
    alert(fruitList);
}

// 문제 2: 성별에 따른 색상 지정
// 주민등록번호 13자리를 문자열로 입력받습니다. 성별을 나타내는 7번째 숫자가 '1' 또는 '3'이면 'blue'를, '2' 또는 '4'이면 'red'를 출력하는 프로그램을 작성하시오.

let rrn = prompt("주민등록번호 13자리 입력 : "); //rrn : Resident Registration Number
if (rrn[6] == ('1' || '3') )
    alert("blue");
else if (rrn[6] == ('2' || '4'))
    alert("red");
else
    alert("input error");

// 문제 3: 구매 금액에 따른 할인율 적용
// 사용자로부터 총 구매 금액을 입력받습니다. 구매 금액에 따라 아래와 같이 할인율을 적용하여 최종 결제 금액을 출력하는 프로그램을 작성하시오.
// 50,000원 이상: 10% 할인
// 30,000원 이상 50,000원 미만: 5% 할인
// 10,000원 이상 30,000원 미만: 1% 할인
// 10,000원 미만: 할인 없음

let purchasePrice = Number(prompt("구매 금액 : "));
let discountRate = 0;

if (purchasePrice >= 50000)
    discountRate = 10;
else if(purchasePrice >= 30000)
    discountRate = 5;
else if (purchasePrice >= 10000)
    discountRate = 1;

alert("최종 결제 금액 : ", purchasePrice - (purchasePrice * discountRate / 100))

// 문제 4: 월(Month)에 따른 계절 판별
// 1부터 12 사이의 월(Month)을 숫자로 입력받아, 해당하는 계절을 출력하는 프로그램을 작성하시오.
// 봄: 3, 4, 5월
// 여름: 6, 7, 8월
// 가을: 9, 10, 11월
// 겨울: 12, 1, 2월
// 만약 1~12 이외의 숫자를 입력하면 '잘못된 월입니다.'를 출력하세요.

let month = Number(prompt("월 입력 : "));
let season;

if (month >= 3 && month <= 5)
    season = "봄";
else if (month >= 6 && month <= 8)
    season = "여름";
else if (month >= 9 && month <= 11)
    season = "가을";
else if (month == 12 || month == 1 || month == 2)
    season = "겨울";
else
    season = "잘못된 월입니다."

alert(season);


// 문제 5: 세 수 중 가장 큰 수 찾기
// 서로 다른 세 개의 정수를 입력받아, 가장 큰 수를 출력하는 프로그램을 작성하시오.

let num=[];
num.push(Number(prompt("첫 번째 정수 입력 : ")));
num.push(Number(prompt("두 번째 정수 입력 : ")));
num.push(Number(prompt("세 번째 정수 입력 : ")));

//alert(Math.max(...num)) // 이것은 치트같으니까 주석처리

let max;
max = num[0];

if (max < num[1])
    max = num[1];
if (max < num[2])
    max = num[2];

alert(max);

// 문제 6: 윤년 판별기
// 사용자로부터 연도(year)를 입력받아 해당 연도가 윤년인지 평년인지 판별하는 프로그램을 작성하시오.
// 윤년 조건:
// 연도가 4의 배수이면서, 100의 배수는 아닐 때
// 또는 연도가 400의 배수일 때
// 출력 예시: '2024년은 윤년입니다.' 또는 '2023년은 평년입니다.'

let year = Number(prompt("연도 입력 :"));

if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)
    alert(`${year}년은 윤년입니다.`);
else
    alert(`${year}년은 평년입니다.`);

// 문제 7: 세 수 오름차순 정렬
// 서로 다른 세 개의 정수를 입력받아, 오름차순(작은 수부터 큰 수 순서)으로 정렬하여 출력하는 프로그램을 작성하시오.
// 예시: 17, 4, 8 입력 시 4, 8, 17 출력

let num2 = [];
num2.push(Number(prompt("첫 번째 정수 입력 : ")));
num2.push(Number(prompt("두 번째 정수 입력 : ")));
num2.push(Number(prompt("세 번째 정수 입력 : ")));

let temp;

if (num2[0] > num2[1]) {
  temp = num2[0];
  num2[0] = num2[1];
  num2[1] = temp;
}

if (num2[1] > num2[2]) {
  temp = num2[1];
  num2[1] = num2[2];
  num2[2] = temp;
}

if (num2[0] > num2[1]) {
  temp = num2[0];
  num2[0] = num2[1];
  num2[1] = temp;
}

alert(num2);


// 문제 8: 가위바위보 게임
// 두 명의 플레이어가 참여하는 가위바위보 게임을 만드시오.
// 입력: 플레이어 1과 플레이어 2는 각각 0(가위), 1(바위), 2(보) 중 하나의 숫자를 입력합니다.
// 규칙:
// 가위(0)는 보(2)를 이깁니다.
// 바위(1)는 가위(0)를 이깁니다.
// 보(2)는 바위(1)를 이깁니다.
// 출력:
// 플레이어 1이 이기면 '플레이어1 승리'를 출력합니다.
// 플레이어 2가 이기면 '플레이어2 승리'를 출력합니다.
// 두 플레이어가 같은 것을 내면 '무승부'를 출력합니다.

let player1 = prompt("플레이어1 입력 (0(가위), 1(바위), 2(보)) : ");
let player2 = prompt("플레이어2 입력 (0(가위), 1(바위), 2(보)) : ");

if (player1 == 0) {
    if (player2 == 0) alert("무승부");
    else if (player2 == 1) alert("플레이어2 승리");
    else if (player2 = 2) alert("플레이어1 승리");
}
else if (player1 == 1) {
    if (player2 == 0) alert("플레이어1 승리");
    else if (player2 == 1) alert("무승부");
    else if (player2 = 2) alert("플레이어2 승리");
}
else {
    if (player2 == 0) alert("플레이어2 승리");
    else if (player2 == 1) alert("플레이어1 승리");
    else if (player2 = 2) alert("무승부");
}

// 문제 9: 주차 차량 위치 검색
// 주차장 차량 정보가 다음과 같이 두 개의 배열로 관리되고 있습니다. 두 배열에서 같은 인덱스는 동일한 차량의 정보를 의미합니다.
// 차량 번호 목록: let carArray = [ '250어7142', '142가7415', '888호8888' ];
// 주차 위치 목록: let locationArray = [ 'A1', 'B3', 'C2' ];
// 사용자로부터 차량 번호를 입력받아, carArray에서 해당 차량을 찾은 뒤 locationArray에 있는 그 차량의 주차 위치를 찾아 출력하는 프로그램을 작성하시오. 만약 해당하는 차량 번호가 없다면 '차량이 존재하지 않습니다.'를 출력하시오.

let carArray = [ '250어7142', '142가7415', '888호8888' ];
let locationArray = [ 'A1', 'B3', 'C2' ];

let carNum = prompt("차량 번호 입력 : ");
let idx = carArray.indexOf(carNum)
if ( idx == -1)
    alert("차량이 존재하지 않습니다");
else
    alert(locationArray[idx]);

// 문제 10: 수강 신청 목록에서 과목 제외하기
// 현재 수강 신청한 과목 목록이 배열로 주어져 있습니다.
// let courseList = ['수학', '영어', '과학', '국어'];
// 사용자로부터 제외하고 싶은 과목명을 입력받아, courseList에 해당 과목이 존재하면 목록에서 삭제한 뒤 변경된 배열 전체를 출력하세요. 만약 존재하지 않는 과목이면 '해당 과목은 신청 목록에 없습니다.'를 출력하는 프로그램을 작성하시오.

let courseList = ['수학', '영어', '과학', '국어'];
let deleteCourse = prompt("제외하고 싶은 과목명 : ");
let idx2 = courseList.indexOf(deleteCourse);
if (idx == -1)
    alert("해당 과목은 신청 목록에 없습니다.");
else {
    courseList.splice(idx2,1);
    alert(courseList);
}
