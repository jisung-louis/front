/* ====== DB ====== */
const dept = [
    { id: 1, name: '개발팀' },
    { id: 2, name: '디자인팀' },
    { id: 3, name: '기획팀' },
    { id: 4, name: '마케팅팀' },
    { id: 5, name: '법무팀' },
]

const emp = [
    { id: 1, name: '김재현', rank: '팀장', dept_id: 2, profileImage: undefined },
    { id: 2, name: '이기억', rank: '대리', dept_id: 5, profileImage: undefined },
    { id: 3, name: '박니은', rank: '인턴', dept_id: 1, profileImage: undefined },
    { id: 4, name: '최디귿', rank: '고문', dept_id: 3, profileImage: undefined },
    { id: 5, name: '전지성', rank: '사장', dept_id: 4, profileImage: undefined },
]

const vacation_list = [
    { id: 1, emp_id: 3, startDate: '2026-01-01', endDate: '2026-01-07', reason: '개인사정'},
    { id: 2, emp_id: 1, startDate: '2026-01-02', endDate: '2026-01-08', reason: '병결'},
    { id: 3, emp_id: 2, startDate: '2026-01-03', endDate: '2026-01-09', reason: '육아휴직'},
    { id: 4, emp_id: 5, startDate: '2026-01-04', endDate: '2026-01-10', reason: '여행'},
    { id: 5, emp_id: 4, startDate: '2026-01-05', endDate: '2026-01-11', reason: '결혼'},
]
/* ====== LOGIC ====== */

// 필요한 기능
// 1. 부서 등록
// 2. 부서 출력
// 3. 부서 수정
// 4. 부서 삭제

// 5. 사원 등록
// 6. 사원 출력 (유효성 : 이미지 X -> 기본이미지)
// 7. 사원 수정
// 8. 사원 삭제

// 9. 휴가신청 등록
// 10. 휴가신청 목록 출력
// 11. 휴가신청 삭제

printAll(); // 초기 데이터 모두 출력

/* === DEPT MANAGEMENT === */
function addDept(){ // 부서 등록
    // [1] 부서명 입력받아 임시 객체인 input에 저장
    let input = {
        id: dept[dept.length - 1].id + 1 ,
        name: document.querySelector("#dept_name-input").value
    }
    // [2] 유효성 검사 
    // [2-1] 입력을 안 한 경우
    if(input.name == ''){
        alert("부서명을 입력해주세요.");
        return;
    }
    // [2-2] 이미 존재하는 부서명을 입력한 경우
    for(let i = 0; i < dept.length; i++){
        if(input.name == dept[i].name){
            alert("이미 존재하는 부서명입니다.");
            return;
        }
    }

    // [3] DB 트랜잭션 (INSERT)
    dept.push(input); 

    printDept(); // UI에 출력
}

function printDept(){
    let tbodyDOM = document.querySelector("#dept_list");
    let selectDOM = document.querySelector("#emp_deptId-select");

    let tbodyHtml = ``;
    let selectHtml = `<option value="disabled">부서를 선택하세요.</option>`;

    for(let i = 0; i < dept.length; i++){
        tbodyHtml += `<tr>
                    <td>${dept[i].name}</td>
                    <td><span onclick="updateDept(${dept[i].id})" class="update">수정</span>
                        <span onclick="deleteDept(${dept[i].id})" class="delete">삭제</span>
                    </td>
                </tr>`;
        
        selectHtml += `<option value="${dept[i].id}">${dept[i].name}</option>`;
    }
    tbodyDOM.innerHTML = tbodyHtml;
    selectDOM.innerHTML = selectHtml;

        console.log(dept);
}

function updateDept(deptId){
    // [1] id(매개변수)로 dept 배열에서 해당 객체를 순회하며 찾음
    let index = searchIndex(dept, "id", deptId);
    if(index == -1){
        alert("인덱스 조회불가. 수정 실패");
        return;
    }

    // [2] 입력받음
    let deptName_input = prompt(`"${dept[index].name}" 부서명을 뭘로 수정하시겠습니까? : `);

    // [3] 유효성 검사
    if(deptName_input == "" || deptName_input == null){
        alert("부서명 입력칸이 비어있어요.");
        return;
    }

    // [4] DB 트랜잭션 (UPDATE)
    dept[index].name = deptName_input;

    // [5] UI에 출력
    printDept();
}

function deleteDept(deptId){
    // [1] id(매개변수)로 dept 배열에서 해당 객체를 순회하며 찾음
    let index = searchIndex(dept, "id", deptId);
    if(index == -1){
        alert("인덱스 조회불가. 삭제 실패");
        return;
    }

    // [2] DB 트랜잭션 (DELETE)
    dept.splice(index,1);

    // [3] UI에 출력
    printDept();
}

/* === EMP MANAGEMENT === */
function addEmp(){
    // [1] 입력받은 emp 속성값을 임시 객체인 input에 저장
    let input = {
        id: emp[emp.length - 1].id + 1,
        name: '',
        rank: '',
        dept_id: '',
        profileImage: ''
    }

    input.name = document.querySelector("#emp_name-input").value;
    input.rank = document.querySelector("#emp_rank-input").value;
    input.dept_id = document.querySelector("#emp_deptId-select").value;
    input.profileImage = document.querySelector("#emp_profileImage-input").files[0]; // 파일 선택 안 했을 때는 undefine이 들어감

    // [2] 유효성 검사
    if(input.name == '' || input.rank == '' || input.dept_id == "disabled"){
        alert("모든 항목을 입력해야 등록 가능합니다.");
        return;
    }

    // [3] DB 트랜잭션 (INSERT)
    emp.push(input);

    // [4] UI에 출력
    printEmp();
}
function printEmp(){
    let tbodyDOM = document.querySelector("#emp_list"); // 사원 전체 목록 섹션
    let selectDOM = document.querySelector("#vacationList_empId-select");

    let tbodyHtml = ``;
    let selectHtml = `<option value="disabled">휴가 신청 사원을 선택하세요</option>`;

    for(let i = 0; i < emp.length; i++){
        let deptId = emp[i].dept_id;
        let index = searchIndex(dept, "id", deptId);
        let deptName = dept[index].name;
            console.log(deptName);
        tbodyHtml += `<tr>
                    <td><img src="${emp[i].profileImage == undefined ? 'https://placehold.co/100' : URL.createObjectURL(emp[i].profileImage)}"/></td>
                    <td>${emp[i].name}</td>
                    <td>${deptName}</td>
                    <td>${emp[i].rank}</td>
                    <td><span onclick="updateEmp(${emp[i].id})" class="update">수정</span>
                        <span onclick="deleteEmp(${emp[i].id})" class="delete">삭제</span>
                    </td>
                </tr>`;

        selectHtml += `<option value="${emp[i].id}">${emp[i].name}</option>`;
    }
        console.log("==================");
    tbodyDOM.innerHTML = tbodyHtml;
    selectDOM.innerHTML = selectHtml;

        console.log(emp);
}
function updateEmp(empId){
    // [1] empId(매개변수)로 emp 배열에서 해당 객체를 순회하며 찾음
    let index = searchIndex(emp, "id", empId);
    if(index == -1){
        alert("인덱스 조회불가. 수정 실패");
        return;
    }

    // [2] 입력받은 emp 속성값을 input 배열에 split()으로 저장
    let input = []; // ex) ['홍길동', '대리']
    input = prompt(`이름, 직급을 차례대로 콤마(,)로 구분하여 (공백 없이) 작성하세요. (예 : "홍길동,대리")`).split(',',2); // 공백 있어도 split()에서는 공백 없이 들어가는 듯
    
    // [3] 유효성 검사
    if(input[0] == '' || input[1] == '' || !input[0] || !input[1]){
        alert("이름, 직급이 제대로 입력되지 않았습니다. 사원정보 수정에 실패했습니다.");
        return;
    }

    // [4] DB 트랜잭션 (UPDATE)
    emp[index].name = input[0];
    emp[index].rank = input[1];

    // [5] UI에 출력
    printEmp();
    
}
function deleteEmp(empId){
    // [1] empId(매개변수)로 emp 배열에서 해당 객체를 순회하며 찾음
    let index = searchIndex(emp, "id", empId);
    if(index == -1){
        alert("인덱스 조회불가. 수정 실패");
        return;
    }

    // [2] 해당 직원의 휴가 신청 기록 모두 제거 ( vacation_list[i].emp_id == emp[index].id 인 객체 찾아 모두 제거)
    for(let i = 0; i < vacation_list.length; i++){
        if(vacation_list[i].emp_id == emp[index].id){
            cancelVacationRequest(emp[index].id);
        }
    }

    // [3] DB 트랜잭션 (DELETE)
    emp.splice(index,1);

    // [4] UI에 출력
    printEmp();
    printVacationList(true);
}

/* === VACATION_LIST MANAGEMENT === */
function addVacationRequest(){
    // [1] 입력받은 값을 input 객체에 임시 저장
    let input = {
        id: vacation_list[vacation_list.length - 1].id + 1,
        emp_id: '',
        startDate: '',
        endDate: '',
        reason: '',
    }
    input.emp_id = document.querySelector("#vacationList_empId-select").value;
    input.startDate = document.querySelector("#vacationList_startDate-input").value;
    input.endDate = document.querySelector("#vacationList_endDate-input").value;
    input.reason = document.querySelector("#vacationList_reason-input").value;

    // [2] 유효성 검사
    if(input.emp_id == 'disabled' || input.startDate == '' || input.endDate == '' || input.reason == ''){
        alert("모든 항목을 선택/입력하세요.");
        return;
    }

    // [3] DB 트랜잭션 (INSERT)
    vacation_list.push(input);

    // [4] UI에 출력
    printVacationList();
}

function printVacationList(isDeleted){
    let listDOM = document.querySelector("#vacation_list");
    let html = ``;
    
    for(let i = 0; i < vacation_list.length; i++){
        let empId = vacation_list[i].emp_id;
            console.log(empId, isDeleted);
        let index = searchIndex(emp, "id", empId);
            console.log(index, isDeleted);
        let empName = emp[index].name;
        html += `<div class="list">
                    <div class="top"><span>${empName}</span><span onclick="cancelVacationRequest(${vacation_list[i].id})">신청취소</span></div>
                    <div class="mid"><span>${vacation_list[i].startDate} ~ ${vacation_list[i].endDate}</span></div>
                    <div class="bottom"><span>사유: ${vacation_list[i].reason}</span></div>
                </div>`;
    }

    listDOM.innerHTML = html;

        console.log(vacation_list);
}

function cancelVacationRequest(vacationListId){
    // [1] vacationListId(매개변수)로 vacation_list 배열에서 해당 객체를 순회하며 찾음
    let index = searchIndex(vacation_list, "id", vacationListId);
    if(index == -1){
        alert("인덱스 조회불가. 수정 실패");
        return;
    }
    // [2] DB 트랜잭션 (DELETE)
    vacation_list.splice(index,1);

    // [3] UI에 출력
    printVacationList();
}




/* COMMON UTIL FUNCTION */
function searchIndex(array, key, value) { // 해당 속성값(value)를 갖고 있는 속성(key)의 객체가 객채 배열(array)의 몇 번째 인덱스에 존재하는지 찾는 함수
    for(let i = 0; i < array.length; i++){
        if(value == array[i][key]) return i;
    }
    return -1; //인덱스 못 찾은 경우 -1 리턴
}

function printAll(){
    printDept();
    printEmp();
    printVacationList();
}