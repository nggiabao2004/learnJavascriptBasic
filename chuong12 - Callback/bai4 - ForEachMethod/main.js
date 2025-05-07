//My forEach() method
var courses = [
   'Javascript',
   'PHP',
   'Ruby'
];
courses.forEach(function(course, index, array){
   console.log(course, index, array);
});
// Javascript 0 (3) ['Javascript', 'PHP', 'Ruby']
// PHP 1 (3) ['Javascript', 'PHP', 'Ruby']
// Ruby 2 (3) ['Javascript', 'PHP', 'Ruby']

var ouput = courses.forEach(function(course, index, array){
   console.log(course, index, array);
   // Javascript 0 (3) ['Javascript', 'PHP', 'Ruby']
   // PHP 1 (3) ['Javascript', 'PHP', 'Ruby']
   // Ruby 2 (3) ['Javascript', 'PHP', 'Ruby']
});
console.log(ouput); //undefined

courses.length = 100;
courses.forEach(function(course, index, array){
   console.log(course, index, array);
});
// Javascript 0 (100) ['Javascript', 'PHP', 'Ruby', empty × 97]
// PHP 1 (100) ['Javascript', 'PHP', 'Ruby', empty × 97]
// Ruby 2 (100) ['Javascript', 'PHP', 'Ruby', empty × 97]

Array.prototype.forEach2= function(callback){
   for (var index in this){
      console.log('Index:', index);
   }
}
courses.forEach2(function(course, index, array){
   console.log(course, index, array);
});
// Index: 0
// Index: 1
// Index: 2
// Index: forEach2
console.log(courses);
// (100) ['Javascript', 'PHP', 'Ruby', empty × 97]
// 0:"Javascript"
// 1:"PHP"
// 2:"Ruby"
//...

Array.prototype.testMethod1 = 1;
Array.prototype.forEach2= function(callback){
   for (var index in this){
      console.log('Index:', index);
   }
}
courses.forEach2(function(course, index, array){
   console.log(course, index, array);
});
// Index: 0
// Index: 1
// Index: 2
// Index: forEach2
// Index: testMethod1
console.log(courses);
// (100) ['Javascript', 'PHP', 'Ruby', empty × 97]
// 0:"Javascript"
// 1:"PHP"
// 2:"Ruby"
// [[Prototype]]:Array(0)
//    forEach2:ƒ (callback)
//    testMethod1:1
//    ...

Array.prototype.testMethod1 = 1;
Array.prototype.testMethod2 = function(){

};
Array.prototype.forEach2= function(callback){
   for (var index in this){
      console.log('Index:', index);
   }
}
courses.forEach2(function(course, index, array){
   console.log(course, index, array);
});
// Index: 0
// Index: 1
// Index: 2
// Index: forEach2
// Index: testMethod1
// Index: testMethod2
console.log(courses);
// (100) ['Javascript', 'PHP', 'Ruby', empty × 97]
// 0:"Javascript"
// 1:"PHP"
// 2:"Ruby"
// [[Prototype]]:Array(0)
//    forEach2:ƒ (callback)
//    testMethod1:1
//    testMethod2:ƒ ()
//    ...

console.log(Array.prototype);
// [testMethod1: 1, forEach2: ƒ, testMethod2: ƒ, at: ƒ, concat: ƒ, …]
//    forEach2:ƒ (callback)
//    testMethod1:1
//    testMethod2:ƒ ()
//    ...

console.log(Number.prototype);
//Number {0, toExponential: ƒ, toFixed: ƒ, toPrecision: ƒ, toString: ƒ, …}

Array.prototype.forEach2= function(callback){
   for (var index in this){
      console.log(index, this.hasOwnProperty(index));
   }
}
courses.forEach2(function(course, index, array){
   console.log(course, index, array);
});
// 0 true
// 1 true
// 2 true
// forEach2 false
// testMethod1 false
// testMethod2 false

Array.prototype.forEach2= function(callback){
   for (var index in this){
      if (this.hasOwnProperty(index)){
         callback(this[index], index, this);
      }
   }
}
courses.forEach2(function(course, index, array){
   console.log(course, index, array);
});
// Javascript 0 (100) ['Javascript', 'PHP', 'Ruby', empty × 97]
// PHP 1 (100) ['Javascript', 'PHP', 'Ruby', empty × 97]
// Ruby 2 (100) ['Javascript', 'PHP', 'Ruby', empty × 97]

Array.prototype.forEach2= function(callback){
   for (var index in this){
      if (this.hasOwnProperty(index)){
         callback(this[index], index, this);
      }
   }
}
courses.forEach2(function(course, index, array){
   console.log(course, index, array);
});
var courses = new Array(100); // (Not Result)
courses.push('Javascript', 'Ruby');
//Javascript 100 (102) [empty × 100, 'Javascript', 'Ruby']
//Ruby 101 (102) [empty × 100, 'Javascript', 'Ruby']
