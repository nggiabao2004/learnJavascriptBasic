//Destructuring and Rest
//Destructuring

//Cách thông thường
var array = ['Javascript', 'Java', 'Python'];
var a= array[0];
var b= array[1];
var c= array[2];
console.log(a, b, c);
// Javascript Java Python
console.log(a, c);
//Javascript Python

//Cách dùng Destructuring
var array = ['Javascript', 'Java', 'Python'];
var [a, b, c] = array;
console.log(a, b, c);
//Javascript Java Python
console.log(a, c);
//Javascript Python
