//Spread
var array1 = ['Javascript', 'Java', 'Python'];
var array2 = ['Golang', 'Dart'];
var array3 = [...array2];
console.log(array3)
//Array(2)
// 0: "Golang"
// 1: "Dart"
// length: 2
// [[Prototype]]: Array(0)

var array3 = [...array1, ...array2];
console.log(array3)
//(5) ['Javascript', 'Java', 'Python', 'Golang', 'Dart']
// 0: "Javascript"
// 1: "Java"
// 2: "Python"
// 3: "Golang"
// 4: "Dart"
// length: 5
// [[Prototype]]: Array(0)
