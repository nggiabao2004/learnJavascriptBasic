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

//Hosting
//(Cách thông thường)
var a;
a=123;
console.log(a);
//123

//(Cách Hosting)
b=true;
var b;
console.log(b);
//true (vẫn nhận được giá trị biến dù không khai báo biến từ đầu)

//(Tuy nhiên, let và const nếu không khai báo biến từ đầu thì sẽ bị lỗi)
let c;
c={
   name: "Van A",
   isFemale: false
};
//let c; //(Không được dùng let hoặc const để khai báo biến muộn)
console.log(c);
// {name: 'Van A', isFemale: false}
// isFemale: false
// name: "Van A"
// [[Prototype]]: Object
