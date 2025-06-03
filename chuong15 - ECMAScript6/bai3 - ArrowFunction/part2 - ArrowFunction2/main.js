// Arrow Function
//ArrowFunction + return
const sum = (a, b) => {
   return a + b;
}
console.log(sum(2, 3));
//5

//Có thể không cần dùng return trong ArrowFunction,
//    ArrowFunction sẽ tự return nếu lệnh được triển khai bên cạnh mũi tên (=>)
const mul = (a, b) => a * b;
console.log(mul(2, 3));
//6

//ArrowFunction với Object chứa thuộc tính
const object = (a, b) => ({
   a:a,
   b:b
})
console.log(object(2,3));
//{a: 2, b: 3}
// a: 2
// b: 3
// [[Prototype]]: Object
