//Empty elements of array
var courses = [
   'Javascript',
   'PHP',
];
console.log(courses);
//(2) ['Javascript', 'PHP']
courses.length = 10;
console.log(courses.length); //10
console.log(courses);
//(10) ['Javascript', 'PHP', empty × 8]

for (var i=0; i <courses.length; i++){
   console.log(courses[i]);
};
// Javascript
// PHP
// 8 undefined

for (var index in courses){
   console.log(index);
};
// 0 ; 1

for (var index in courses){
   console.log(courses[index]);
};
// Javascript ; PHP

var courses= new Array(10);
console.log(courses);
//(10) [empty × 10]

var courses= new Array(10, 12);
console.log(courses);
//(2) [10, 12]

var courses= new Array(10);
console.log(courses);
//(10) [empty × 10]
courses.push('Javascript','PHP');
console.log(courses);
//(12) [empty × 10, 'Javascript', 'PHP']

