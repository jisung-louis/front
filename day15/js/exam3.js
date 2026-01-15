/*예제 1: localStorage에 데이터 저장하고 불러오기
localStorage에 <input> 으로 입력받은 사용자의 아이디를 저장하고, 
페이지를 새로고침해도 그 값이 유지되는 것을 확인 하시오.  */

document.querySelector("#q1_input").value = new URLSearchParams(location.search).get("name");

function func1(){
    let input = document.querySelector("#q1_input").value;
        console.log(input);
    localStorage.setItem("id",input);
}

/*예제 2: localStorage에 객체 저장하기 (JSON.stringify)
아래 사용자의 환경 설정(객체)을 문자열로 변환하여 localStorage에 저장 하시오. */
const userSettings = { theme: 'dark', notifications: true, language: 'ko' };

localStorage.setItem("userSetting", JSON.stringify(userSettings));


/*예제 3: localStorage에서 객체 불러오기 (JSON.parse)
localStorage에 문자열로 저장된 사용자 설정(userSettings) 을 다시 객체로 변환하여 사용 하시오.  */

const us = JSON.parse(localStorage.getItem("userSetting"));
console.log(us);

/*예제 4: 데이터 삭제하기 (removeItem, clear)
스토리지에 저장된 특정 데이터(userSettings) 또는 전체 데이터를 삭제 하시오.  */

// localStorage.removeItem("userSetting");
localStorage.clear();

/*예제 5: 방문 횟수 카운터 만들기
페이지가 로드될 때마다 sessionStorage를 사용하여 방문 횟수를 1씩 증가시키시오. 
현재 방문 횟수를 id="visitCount"인 span 태그에 "이번 세션에서 O번째 방문입니다." 형식으로 출력하시오. 
(페이지를 새로고침하면 숫자가 올라가고, 브라우저 탭을 닫았다 다시 열면 1로 초기화되어야 합니다.) */

let currentCount = Number(sessionStorage.getItem("visitCount"));

if(currentCount == null)
    currentCount = 1;
else
    currentCount++;

sessionStorage.setItem("visitCount",currentCount);

let spanDOM = document.querySelector("#visitCount");

spanDOM.innerHTML = `이번 세션에서 ${currentCount}번째 방문입니다.`;