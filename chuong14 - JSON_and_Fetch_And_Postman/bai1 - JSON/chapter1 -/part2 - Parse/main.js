//JSON
// Trong JavaScript, có thể chuyển đổi giữa Object và JSON bằng:
// - JSON.stringify(object): Chuyển object (Javascript) thành chuỗi JSON.
// - JSON.parse(jsonString): Chuyển chuỗi JSON thành object (Javascript).
var a= '1';
console.log(a);
//1 (JSON)
console.log(JSON.parse(a));
//1 (Javascript)
console.log(typeof JSON.parse(a));
//number (Javascript)

var b = '["Javascript", "Java"]';
console.log(b);
//["Javascript", "Java"] (JSON)
console.log(JSON.parse(b));
//(2) ['Javascript', 'Java']
// 0: "Javascript"
// 1: "Java"
// length: 2
// [[Prototype]]: Array(0)
console.log(typeof JSON.parse(b));
//object (Javascript)

var c = '{"name": "Nguyen Van A","age": 20,"isStudent": true}';
console.log(c);
//{"name": "Nguyen Van A","age": 20,"isStudent": true} (JSON)
console.log(JSON.parse(c));
//{name: 'Nguyen Van A', age: 20, isStudent: true}
//age:20
//isStudent:true
//name:"Nguyen Van A"
//[[Prototype]]:Object
console.log(typeof JSON.parse(c));
//object (Javascript)
