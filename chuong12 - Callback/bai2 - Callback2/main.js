//Callback2: là hàm (function) được truyền qua đối số khi gọi hàm khác
var courses = [
   'Javascript',
   'PHP',
   'Ruby'
];
courses.map(function(course){
   console.log(course);
});
//Javascript ; PHP ; Ruby

var htmls = courses.map(function(course){
   return `<h2>${course}</h2>`;
});
console.log(htmls.join(' ; '))
//<h2>Javascript</h2> ; <h2>PHP</h2> ; <h2>Ruby</h2>

Array.prototype.map2 = function(){
}
courses.map2(function(course){
   return `<h2>${course}</h2>`;
});
console.log(htmls.join(' ; '))
//<h2>Javascript</h2> ; <h2>PHP</h2> ; <h2>Ruby</h2>

Array.prototype.map3 = function(){
   console.log(this);
}
courses.map3();
// (3) ['Javascript', 'PHP', 'Ruby']

Array.prototype.map4 = function(callback){
   var arrayLength = this.length;
   for (var i=0; i < arrayLength; ++i){
      callback(this[i], i);
   }
}
courses.map4(function(course, index){
   console.log(index, course);
});
// 0 'Javascript'
// 1 'PHP'
// 2 'Ruby'

Array.prototype.map5 = function(callback){
   var arrayLength = this.length;
   for (var i=0; i < arrayLength; ++i){
      var result = callback(this[i], i);
      console.log('result:', result);
   }
}
var htmls2 = courses.map5(function(course, index){
   return `<h2>${course}</h2>`;
});
console.log(htmls2);
// 0 'Javascript'
// 1 'PHP'
// 2 'Ruby'
// result: <h2>Javascript</h2>
// result: <h2>PHP</h2>
// result: <h2>Ruby</h2>

Array.prototype.map5 = function(callback){
   var output = [], arrayLength = this.length;
   for (var i=0; i < arrayLength; ++i){
      var result = callback(this[i], i);
      output.push(result);
   }
   return output;
}
var htmls2 = courses.map5(function(course, index){
   return `<h2>${course}</h2>`;
});
console.log(htmls2);
//(3) ['<h2>Javascript</h2>', '<h2>PHP</h2>', '<h2>Ruby</h2>']
console.log(htmls2.join(" ; "));
//<h2>Javascript</h2> ; <h2>PHP</h2> ; <h2>Ruby</h2>

