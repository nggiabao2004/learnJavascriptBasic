//My every() method
var courses = [
   {
      name:'Javascript',
      coin: 680,
      isFinish: true,
   },
   {
      name:'PHP',
      coin: 860,
      isFinish: false,
   },
   {
      name:'Ruby',
      coin: 980,
      isFinish: false,
   },
];
var result = courses.every(function(course, index){
   return course.isFinish === true;
});
console.log(result); //false
var result = courses.every(function(course, index){
   return course.isFinish === false;
});
console.log(result); //false
var result = courses.every(function(course, index){
   return course.isFinish; //return course.isFinish === true;
});
console.log(result); //false

var courses = new Array(100);
var result = courses.every(function(course, index){
   console.log(course);
   return course.isFinish;
});
console.log(result); //true

var courses = [
   {
      name:'Javascript',
      coin: 680,
      isFinish: true,
   },
   {
      name:'PHP',
      coin: 860,
      isFinish: true,
   },
   {
      name:'Ruby',
      coin: 980,
      isFinish: true,
   },
];
var result = courses.every(function(course, index){
   console.log(course);
   return course.isFinish;
});
console.log(result) //true

Array.prototype.every2 = function(callback){
   var output = true
   for (var index in this){
      if (this.hasOwnProperty(index)){
         var result = callback(this[index], index, this)
         if (!result){
            output = false;
            break;
         }
         return output;
      }
   }
   return output;
}
var result = courses.every(function(course, index){
   console.log(course);
   return course.coin > 500;
   // {name: 'Javascript', coin: 680, isFinish: true}
   // {name: 'PHP', coin: 860, isFinish: true}
   // {name: 'Ruby', coin: 980, isFinish: true}
});

console.log(result); //true
var result = courses.every(function(course, index){
   console.log(course);
   return course.coin < 900;
   // {name: 'Javascript', coin: 680, isFinish: true}
   // {name: 'PHP', coin: 860, isFinish: true}
   // {name: 'Ruby', coin: 980, isFinish: true}
});
console.log(result) //false, do 'Ruby' có giá trị coin là 980, lớn hơn 900

Array.prototype.myEvery = function(callback) {
   var output = true;
   for (var index in this){
       if (this.hasOwnProperty(index)){
           var result = callback(this[index], index, this);
           if (!result){
               output = false;
               break;
           }
       }
   }
   return output;
}
const numbers = [1, 3, 3, 5];
console.log(numbers.myEvery(function (number) {
    return number % 2 !== 0;
})); // Output: true
console.log(numbers.myEvery(function (number, index) {
    return index % 2 === 0;
})); // Output: false
console.log(numbers.myEvery(function (number, index, array) {
    return array.length % 2 === 0;
})); // Output: true

