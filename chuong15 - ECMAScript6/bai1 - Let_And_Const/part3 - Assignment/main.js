// let/ const
// let và const là hai từ khóa được giới thiệu trong ES6 để khai báo biến.
// - let: Khai báo biến có phạm vi block (block scope),
//    có thể gán lại giá trị nhưng không thể khai báo lại trong cùng một phạm vi.
// - const: Khai báo hằng số có phạm vi block (block scope),
//    phải gán giá trị khi khai báo và không thể gán lại giá trị sau này.

// Sự khác nhau giữa var với let/const:
// 1. Phạm vi (Scope):
//    - var: Có phạm vi function (function scope).
//    - let, const: Có phạm vi block (block scope).
//    (block scope kiểu if-else, function, {},...)
// 2. Hoisting:
//    - var: Được hoisting lên đầu phạm vi, nhưng khởi tạo với giá trị undefined.
//    - let, const: Cũng được hoisting nhưng không thể truy cập trước khi khai báo (Temporal Dead Zone).
// 3. Gán lại giá trị:
//    - var, let: Có thể gán lại giá trị.
//    - const: Không thể gán lại giá trị sau khi khai báo.
// 4. Khai báo lại biến:
//    - var: Có thể khai báo lại trong cùng phạm vi.
//    - let, const: Không thể khai báo lại trong cùng phạm vi.

//Assignment
//var và let
var a=1;
a=2;
console.log(a);
//2

let b=false;
b=true;
console.log(b);
//true

//const chỉ được mặc định giá trị biến 1 lần, không thể thay đổi
const pi=3.14;
//pi=3; //(không thay đổi được)
console.log(pi);
//3.14

//Trong trường hợp biến const là 1 object thì có thể thay đổi thuộc tính trong object
const c={
   name: "Javascript"
}
console.log(c);
//name: 'Javascript'}name: "Java"[[Prototype]]: Object
c.name= "Java";
console.log(c);
//{name: 'Java'}name: "Java"[[Prototype]]: Object
console.log(c.name);
//Java
