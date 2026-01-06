// [1] 객체 선언
{}

// [2] 선언한 객체를 변수에 대입
const obj1 = {};
console.log(obj1);

const obj2 = {prop1 : 10, "prop!" : "hello"};
console.log(obj2);

console.log(Object.keys(obj2));
console.log(Object.values(obj2));
console.log(Object.entries(obj2));
