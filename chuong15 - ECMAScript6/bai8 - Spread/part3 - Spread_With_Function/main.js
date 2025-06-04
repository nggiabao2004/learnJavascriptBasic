//Spread
var array1 = ['Javascript', 'Java', 'Python'];
function logger(a, b, c){
   console.log(a, b, c)
}
logger(1,2,3);
//1 2 3
logger(...array1);
//Javascript Java Python

var array2 = ['Javascript', 'Java', 'Python'];
function logger(...rest){
   for (var i=0; i< rest.length; i++){
      console.log(rest[i]);
   }
}
logger(...array2);
// Javascript
// Java
// Python
