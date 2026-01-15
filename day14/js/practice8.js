let dateDom = document.querySelector("#dateInput");
let itemDom = document.querySelector("#itemInput");
let priceDom = document.querySelector("#priceInput");

let tableDom = document.querySelector("#table");
const list = [
    {id : 1, date : '2025-06-19', item : '점심 식사', price : (9000).toLocaleString()},
    {id : 2, date : '2025-06-19', item : '교통비', price : (1500).toLocaleString()},
]

printEnrollment(); // 초기 데이터 표시

function enroll(){ // create
    let date = dateDom.value;
    let item = itemDom.value;
    let price = priceDom.value;

    let input = {
        id : list[list.length - 1].id + 1,
        date : date, 
        item : item, 
        price : price.toLocaleString()
    };

    list.push(input);
    printEnrollment(); // 출력함수 호출
}

function printEnrollment(){ // read
    let html = `<tr>
                    <th>날짜</th>
                    <th>항목</th>
                    <th>금액</th>
                </tr>`;
    for(let i = 0; i < list.length; i++){
        html += `<tr>
                    <td>${list[i].date}</td>
                    <td>${list[i].item}</td>
                    <td>${list[i].price}</td>
                </tr>`;
    }
    tableDom.innerHTML = html;
    console.log(list);
}

// @deprecated
function enroll_legacy(){
    let date = dateDom.value;
    let item = itemDom.value;
    let price = priceDom.value;
    if(date === "" || item === "" || price === ""){
        alert("모든 항목을 입력해야 등록 가능합니다.");
    }
    else if(isNaN(price)){
        alert("금액에는 숫자를 입력해야 합니다.");
    }
    else{
        let html = `<tr>
                        <td>${date}</td>
                        <td>${item}</td>
                        <td>${Number(price).toLocaleString()}</td>
                    </tr>`;
        tableDom.innerHTML += html;
    }
}