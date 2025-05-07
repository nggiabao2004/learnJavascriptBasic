//My some() method
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
var result = courses.some(function(course, index){
   return course.isFinish === true;
});
console.log(result); //true
var result = courses.some(function(course, index){
   return course.isFinish === false;
});
console.log(result); //true
var result = courses.some(function(course, index){
   return course.isFinish; //return course.isFinish === true;
});
console.log(result); //true

var courses = new Array(100);
var result = courses.some(function(course, index){
   console.log(course);
   return course.isFinish;
});
console.log(result); //false

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
Array.prototype.some2 = function(callback){
   for (var index in this){
      if (this.hasOwnProperty(index)){
         if (callback(this[index], index, this)){
            return true;
         }
      }
   }
   return false;
}
var result = courses.some2(function(course, index){
   console.log(course);
   // {name: 'Javascript', coin: 680, isFinish: true}
   return course.isFinish;
});
console.log(result); //true

var courses = [
   {
      name:'Javascript',
      coin: 680,
      isFinish: false,
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
Array.prototype.some2 = function(callback){
   for (var index in this){
      if (this.hasOwnProperty(index)){
         if (callback(this[index], index, this)){
            return true;
         }
      }
   }
   return false;
}
var result = courses.some2(function(course, index){
   console.log(course);
   // {name: 'Javascript', coin: 680, isFinish: false}
   // {name: 'PHP', coin: 860, isFinish: false}
   // {name: 'Ruby', coin: 980, isFinish: false}
   return course.isFinish;
});
console.log(result); //false

var courses = [
   {
      name:'Javascript',
      coin: 680,
      isFinish: false,
   },
   {
      name:'PHP',
      coin: 860,
      isFinish: true,
   },
   {
      name:'Ruby',
      coin: 980,
      isFinish: false,
   },
];
Array.prototype.some2 = function(callback){
   var ouput= false;
   for (var index in this){
      if (this.hasOwnProperty(index)){
         if (callback(this[index], index, this)){
            ouput = true;
            break;
         }
      }
   }
   return ouput;
}
var result = courses.some2(function(course, index){
   console.log(course);
   // {name: 'Javascript', coin: 680, isFinish: false}
   // {name: 'PHP', coin: 860, isFinish: true}
   return course.isFinish;
});
console.log(result); //true

Array.prototype.mySome = function(callback) {
   var output = false;
   for (var index in this){
       if (this.hasOwnProperty(index)){
           if (callback(this[index], index, this)){
               output = true;
               break;
           }
       }
   }
   return output;
}
const numbers = [1, 3, 3, 5];
console.log(numbers.mySome(function (number) {
    return number % 2 === 0;
})); //Output: false
console.log(numbers.mySome(function (number, index) {
    return index % 2 === 0;
})); //Output: true
console.log(numbers.mySome(function (number, index, array) {
    return array.length % 2 === 0;
})); //Output: true
