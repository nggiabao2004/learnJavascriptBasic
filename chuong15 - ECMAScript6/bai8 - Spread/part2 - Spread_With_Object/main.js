//Spread
const person1 = {
    name: 'Son',
    age: 21
}
const person2 = {
    ...person1
}
console.log(person2.name)
// Output: 'Son'
console.log(person2.age)
// Output: 21
console.log(person1 === person2)
// Output: false

var object1 = {
   name: 'Javascript',
}
var object2 = {
   price: 100,
}
var object3 = {
   description: 'Learn_Javascript',
}

var object = {
   ...object1,
   ...object2,
   ...object3
};
console.log(object);
//{name: 'Javascript', price: 100, description: 'Learn_Javascript'}
// description: "Learn_Javascript"
// name: "Javascript"
// price: 100
// [[Prototype]]: Object

var lectureConfig = {
   api: 'https://domain-trang-courses',
   apiVersion: 'v1',
   other: 'other'
};
var exerciseConfig = {
   ...lectureConfig,
   api: 'https://domain-trang-homeworks',
   apiVersion: 'v1',
   other: 'other'
};
console.log(exerciseConfig);
//{api: 'https://domain-trang-homeworks', apiVersion: 'v1', other: 'other'}
// api: "https://domain-trang-homeworks"
// apiVersion: "v1"
// other: "other"
// [[Prototype]]: Object
// (Biến 'api của exerciseConfig' giống với 'api của leactureConfig' nên mới bị ghi đè)
