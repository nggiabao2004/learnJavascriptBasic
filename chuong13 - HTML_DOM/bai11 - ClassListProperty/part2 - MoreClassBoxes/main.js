//ClassList Property
var boxElement = document.querySelector('.box');
console.log(boxElement);
//<div class="box box-1 box-2"></div>

console.log(boxElement.classList);
//DOMTokenList(3) ['box', 'box-1', 'box-2', value: 'box box-1 box-2']
// 0:"box"
// 1:"box-1"
// 2:"box-2"
// length: 3
// value:"box box-1 box-2"
// [[Prototype]]:DOMTokenList

console.log(boxElement.classList.length);
//3

console.log(boxElement.classList[1]);
//box-1

console.log(boxElement.classList.value);
//box box-1 box-2
