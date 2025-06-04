//Destructuring and Rest
//Rest parameters with Function
function logger1(...params){
   console.log(params);
};
console.log(logger1(1,2,3));
//(3) [1, 2, 3]

function logger2(a, ...params){
   console.log(params);
};
console.log(logger2(1,2,3));
//(2) [2, 3]

function logger3(a, b, ...params){
   console.log(params);
};
console.log(logger3(1,2,3));
//[3]

function logger4(obj){
   console.log(obj);
   //{name: 'Javascript', price: 100, description: 'Learn_Javascript'}
   //description: "Learn_Javascript"
   //name: "Javascript"
   //price: 100
   //[[Prototype]]: Object
   console.log(obj.name);
   //Javascript
};
logger4({
   name: 'Javascript',
   price: 100,
   description: 'Learn_Javascript'
})

function logger5({name, ...rest}){
   console.log(name);
   //Java
   console.log(rest);
   //{price: 150, description: 'Learn_Java'}
   // description: "Learn_Java"
   // price: 150
   // [[Prototype]]: Object
};
logger5({
   name: 'Java',
   price: 150,
   description: 'Learn_Java'
})

function logger6([a, ...rest]){
   console.log(a);
   //1
   console.log(rest);
   //(2) [true, 'Hello']
   // 0: true
   // 1: "Hello"
   // length: 2
   // [[Prototype]]: Array(0)
};
logger6([1, true, 'Hello'])
