const list = [
    { id : 1, image : 'https://placehold.co/100', categoryId : '1', name : '코카콜라', price : '1,000', createdAt : '2025-06-17' },
    { id : 2, image : 'https://placehold.co/100', categoryId : '2', name : '새우깡', price : '1,200', createdAt : '2025-06-18' },
    { id : 3, image : 'https://placehold.co/100', categoryId : '1', name : '칠성사이다', price : '900', createdAt : '2025-06-19' },
]

const categories = [
    {id : 0, category : '카테고리 없음'},
    {id : 1, category : '과자'},
    {id : 2, category : '음료'},
    {id : 3, category : '식사'},
]
printEnrollment();

function enroll() { // CREATE
    let input = {};
    // [1] 임시 객체 input에 입력한 값 삽입
    input.id = list[list.length - 1].id + 1;

    let image = document.querySelector(".imageInput").files[0];
    input.image = image == undefined ? "https://placehold.co/100" : URL.createObjectURL(image);
    input.category = document.querySelector(".category").value;
    input.name = document.querySelector(".nameInput").value;
    input.price = Number(document.querySelector(".priceInput").value).toLocaleString();

    const date = {
        year : new Date().getFullYear(),
        month : new Date().getMonth()+1,
        date : new Date().getDate()
    };
    input.createdAt = `${date.year}-${date.month < 10 ? '0' + date.month : date.month}-${date.date < 10 ? '0' + date.date : date.date}`;  // 현재 날짜 불러옴
    //input.createdAt = new Date().toISOString().slice(0, 10); // 이거 쓰면 더 간단하게 가능

        console.log(input);

    // [2] 유효성 검사
    if(input.category == '0'){ // [2-1] 카테고리 선택 안했을 때
        alert("카테고리를 선택하세요.");
        return;
    }
    if(input.name == ""){
        alert("제품명을 입력하세요.");
        return;
    }
    if(input.price == "0" || input.price == "NaN"){
        alert("유효한 가격을 입력하세요.");
        return;
    }

    //[3] DB에 CREATE
    list.push(input);
    
    //[4] 화면에 출력(READ)
    printEnrollment();
}

function printEnrollment() { // READ
    let tbodyDom = document.querySelector(".tbody");
    let html = ``;
    let keys = [];
    
    for(let i = 0; i < list.length; i++){
        html += `<tr id="tr${i}">`;
        keys = listKeys(list[i]);

        for(let j = 0; j < keys.length; j++){
            switch(keys[j]){
                case 'image':
                    html += `<td><img src="${list[i].image || 'https://placehold.co/100'}" class="itemImg"></td>`; // 이미 enroll(등록 함수)에서 이미지가 없는 경우는 placehold 이미지를 넣는 걸로 가드했지만 여기서도 2중 가드
                    break;
                
                case 'categoryId':
                    let index = searchIndex(categories, "id", list[i][keys[j]]);
                    if (index == -1){
                        html += `<td>알 수 없음</td>`;
                        break;
                    }
                    html += `<td>${categories[index].category}</td>`;
                    break;
                case 'name':
                case 'price':
                case 'createdAt':
                    html += `<td>${list[i][keys[j]]}</td>`;
                    break;
                default: // 'id'는 아무 작업 하지 않음
                    break;
            }
        }
        html += `<td>
                    <div class="noteWrap">
                        <button class="noteBadge red" onclick="deleteEnrollment(${list[i].id})">삭제</button>
                        <button class="noteBadge blue" onclick="updateEnrollment(${list[i].id})">수정</button>
                    </div>
                </td>`; // 비고 칸 (삭제버튼, 수정버튼)
        html += `</tr>`
    }
    tbodyDom.innerHTML = html;
}

function updateEnrollment(id){ // UPDATE
    let index = searchIndex(list, "id", id);
    if (index === -1){
        alert("해당 인덱스를 찾을 수 없어 수정에 실패했습니다.");
        return;
    }

    // let category = prompt("수정할 카테고리명(숫자로 입력) : ");
    let name = prompt("수정할 제품명 입력 : ");
    let price = Number(prompt("수정할 가격 입력 : ")).toLocaleString();

    // list[index].category = category;
    list[index].name = name;
    list[index].price = price;
    printEnrollment();

    // 수정 기능은 두가지 경우가 있지 않나?
    // 1. 현재 각 td(제품명, 가격)의 innerHTML을 수정하는 방법 (list 배열 내의 객체 수정 X)
    // 2. list배열의 해당 tr에 해당하는 객체 속성의 value를 수정해서 출력(printEnrollment())하는 방법

    // 답변 : 방법 1은 DB를 고려하지 않은 방법임. 어차피 나중에 list배열은 DB에서 담당하게 될것이고, DB를 수정해야 하기 때문에 방법 2를 사용함.
}

function deleteEnrollment(id) { // DELETE
    let index = searchIndex(list, "id", id);
    if (index === -1) {
        alert("해당 인덱스를 찾을 수 없어 삭제에 실패했습니다.");
        return;
    }

    list.splice(index,1); // 데이터 제거
    printEnrollment(); // 출력
    return;
}

function listKeys(obj){ // 배열
    return Object.keys(obj); // 해당 객체의 속성명들을 배열로 반환 // ['id', 'image', 'categoryId', ... ];
}

function searchIndex(array, key, value) { // 해당 속성값(value)를 갖고 있는 속성(key)의 객체가 객채 배열(array)의 몇 번째 인덱스에 존재하는지 찾는 함수 (특정 db에 종속되지 않는 범용성 있는 함수를 만들려고 했음)
    for(let i = 0; i < array.length; i++){
        if(value == array[i][key]) return i;
    }
    return -1; //인덱스 못 찾은 경우 -1 리턴
}