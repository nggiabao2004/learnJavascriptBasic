// Enhanced object literals
// Định nghĩa key cho object dưới dạng biến (Variable)

var fieldName1 = 'name';
var fieldPrice1 = 'price';
const course1 = {
   [fieldName1]: 'javascript',
   [fieldPrice1]: 100
};
console.log(course1);
//{name: 'javascript', price: 100}
console.log(course1.name);
//javascript

var fieldName2 = 'new-name';
var fieldPrice2 = 'price';
const course2 = {
   name: 'java',
   [fieldName2]: 'javascript',
   [fieldPrice2]: 100
};
console.log(course2);
//{name: 'java', new-name: 'javascript', price: 100}
