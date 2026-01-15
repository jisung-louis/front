// (1) 수정페이지 접속했을 때 기존 데이터 호출 함수
getBoard(); // 최초 1회 함수 실행
function getBoard(){
    const url = new URLSearchParams(location.search);
    const selectNo = url.get("no");
    let boardList = localStorage.getItem("boardList");
    if (boardList == null) boardList = [];
    else boardList = JSON.parse(boardList);
    for(let i = 0; i < boardList.length; i++){
        const obj = boardList[i];
        if(obj.no == selectNo){
            // 기존 게시물 정보를 input 마크업에 넣어주기
            document.querySelector("#titleInput").value = obj.title;
            document.querySelector("#contentInput").value = obj.content;
        }
    }
}

// (2) 수정처리 함수
function boardUpdate(){
    // 1. URL 경로 가져오기, ?쿼리스트링
    const url = new URLSearchParams(location.search);
    const selectNo = url.get("no");
    let boardList = localStorage.getItem("boardList");
    if (boardList == null) boardList = [];
    else boardList = JSON.parse(boardList);
    for(let i = 0; i < boardList.length; i++){
        const obj = boardList[i];
        if(obj.no == selectNo){
            obj.title = document.querySelector("#titleInput").value;
            obj.content = document.querySelector("#contentInput").value;
            obj.pwd = document.querySelector("#pwdInput").value;
            localStorage.setItem("boardList", JSON.stringify(boardList));
            alert("수정 완료");
            location.href = `view.html?no=${selectNo}`;
        }
    }
}