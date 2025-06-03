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

//Scope
if (true){
   var course1 = 'Javascript (var)'
}
console.log(course1);
//Javascript (var)

//(Tuy nhiên, let và const thì chỉ hỗ trợ trong phạm vi scope-block. Nếu nằm ngoài sẽ bị lỗi)
// if (true){
//    let course2 = 'Javascript (let1)'
// }
// console.log(course2);
// //(Error)

// if (true){
//    const course3 = 'Javascript (const'
// }
// console.log(course3);
// //(Error)

{
   let course4 = 'Javascript (let2)'
   course4 = false
   console.log(course4);
   //false
}

{
   const course5 = 'Javascript (const2)'
   {
      console.log(course5);
      //Javascript (const2)
   }
}

{
   const course6 = 'Javascript (const3)'
   {
      const course6 = 123;
      console.log(course6);
      //123
   }
}
