/*   
    [1] 하나의 HTML에서 여러 JS 파일 사용 가능

    [2] JS에서 백엔드 없이 저장하는 방법 : 웹 스토리지(sessionStorage, localStorage)

    sessionStorage : 세션 저장소를 관리하는 객체
        * 서로 다른 HTML간의 자료 공유 안한다.
        * 모든 브라우저가 종료되면 자료 자동 삭제

    localStorage : 로컬 저장소를 관리하는 객체
        * 서로 다른 HTML간의 자료 공유를 한다. < 도메인(http) 주소 동일 >
        * 모든 브라우저가 종료되더라도 자료 유지 < 사용자가 직접 삭제 >
        
    질문 : 이 데이터들은 물리적으로 어디에 저장되나?
    답변 : 

    3. 주요 기능 함수
        1) .setItem('key', 'value');    : 세션/로컬 저장소에 속성/자료 추가
        2) .getItem('key');             : 세션/로컬 저장소에 'key'에 해당하는 자료 호출
        3) .removeItem('key');          : 세션/로컬 저장소에 'key' 삭제 (value 같이 삭제됨)
        4) .clear()                     : 세션/로컬 저장소 모두 삭제

        1) JSON.stringify   : 객체를 문자열화
        2) JSON.parse       : 문자열을 객체화
*/

console.log(sessionStorage);
console.log(localStorage);

// (1) 저장
sessionStorage.setItem('name', '유재석');   // F12 -> application탭 -> 확인 가능
localStorage.setItem('age',40);           // F12 -> application탭 -> 확인 가능

// (2) 호출
console.log(sessionStorage.getItem('name'));
console.log(localStorage.getItem('age'));

// (3) 삭제
sessionStorage.removeItem('name');  // 세션 저장소에 'name'키 삭제
localStorage.removeItem('age');     // 로컬 저장소에 'age'키 삭제

// (4) 활용 : 복잡한 (샘플) 데이터
    // * 세션/로컬 저장소는 문자열만 저장이 가능하다. 배열/객체 --> 문자열로 변환   **** JSON : 자바스크립트 객체 기반의 문자열 형식 ****
JSON.stringify
let a = [ {name : '유재석', age : 40}, {name : '강호동', age : 50} ];
console.log(a);
console.log(JSON.stringify(a));
sessionStorage.setItem('회원목록', JSON.stringify(a));

console.log(sessionStorage.getItem('회원목록'));
let parsed = JSON.parse(sessionStorage.getItem('회원목록'));
console.log(parsed);