//My filter() method
var courses = [
   {
      name:'Javascript',
      coin: 680,
   },
   {
      name:'PHP',
      coin: 860,
   },
   {
      name:'Ruby',
      coin: 980,
   },
];

var filterCourses = courses.filter(function (course, index, array) {
   return course.coin > 700;
});
console.log(filterCourses);
// (2) [{…}, {…}]
// 0: {name: 'PHP', coin: 860}
// 1: {name: 'Ruby', coin: 980}
// length: 2
// [[Prototype]]: Array(0)
//(Muốn tìm hiểu thêm: Value types and reference types)

var courses = new Array(100);
var filterCourses = courses.filter(function (course, index, array) {
   console.log(course);
   return course.coin > 700;
});
console.log(filterCourses);
//[] ; length: 0 ; [[Prototype]]: Array(0)

var courses = [
   {
      name:'Javascript',
      coin: 680,
   },
   {
      name:'PHP',
      coin: 860,
   },
   {
      name:'Ruby',
      coin: 980,
   },
];
Array.prototype.filter2 = function(callback){
   for (var index in this){
      if (this.hasOwnProperty(index)){
         callback(this[index], index, this);
      }
   }
}
var filterCourses = courses.filter(function (course, index, array) {
   console.log(course, index, array);
   // return course.coin > 700;
});
console.log(filterCourses);
// {name: 'Javascript', coin: 680} 0 (3) [{…}, {…}, {…}]
// {name: 'PHP', coin: 860} 1 (3) [{…}, {…}, {…}]
// {name: 'Ruby', coin: 980} 2 (3) [{…}, {…}, {…}]

Array.prototype.filter2 = function(callback){
   var output = [];
   for (var index in this){
      if (this.hasOwnProperty(index)){
         var result = callback(this[index], index, this);
         if (result){
            output.push(this[index]);
         }
      }
   }
   return output;
}
var filterCourses = courses.filter(function (course, index, array) {
   console.log(course, index, array);
   return course.coin > 700;
});
console.log(filterCourses);
// (2) [{…}, {…}]
// 0: {name: 'PHP', coin: 860}
// 1: {name: 'Ruby', coin: 980}

Array.prototype.myFilter = function(callback) {
   var output=[];
   for (var index in this){
       if (this.hasOwnProperty(index)){
           var result = callback(this[index], index, this);
           if (result){
               output.push(this[index]);
           }
       }
   }
   return output;
};
const numbers = [1, 2, 3, 4];
console.log(numbers.myFilter(function (number) {
    return number % 2 === 0;
})); //Output: [2, 4]
console.log(numbers.myFilter(function (number, index) {
    return index % 2 === 0;
})); //Output: [1, 3]
console.log(numbers.myFilter(function (number, index, array) {
    return array.length % 2 === 0;
})); //Output: [1, 2, 3, 4]
