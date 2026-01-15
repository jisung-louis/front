boardPrint();

function boardPrint() {
    // 1. 어디에 , <tbody id="boardTbody">
    const boardTbody = document.querySelector("#boardTbody");

    // 2. 무엇을
        // 2-1. localStorage에서 배열 가져오기
    let boardList = localStorage.getItem("boardList");
    if(boardList == null) boardList = [];
    else boardList = JSON.parse(boardList);
        // 2-2. 반복문 이용하여 배열 내 하나씩 조회
    let html = ``;
    for(let index = 0; index < boardList.length; index++){
        const obj = boardList[index];
        // 2-3. 하나씩 <tr> 구성
        html += `<tr>
                    <td>${obj.no}</td>
                    <td><a href="view.html?no=${obj.no}">${obj.title}</a></td>
                </tr>`;
    }
    boardTbody.innerHTML = html;
}