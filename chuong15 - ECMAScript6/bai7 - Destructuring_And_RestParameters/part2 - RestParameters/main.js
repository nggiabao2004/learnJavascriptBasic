//Destructuring and Rest
//Rest parameters

//Cách thông thường
var array = ['Javascript', 'Java', 'Python'];
var a= array[0];
var [b,c]= array;
console.log(a);
//Javascript
console.log(b, c);
//Javascript Java

//Rest parameters
var array = ['Javascript', 'Java', 'Python'];
var [a, ...Rest] = array;
console.log(a);
//Javascript
console.log(Rest);
//(2) ['Java', 'Python']
// 0: "Java"
// 1: "Python"
// length: 2
// [[Prototype]]: Array(0)
