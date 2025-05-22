//ClassList Property
var boxElement = document.querySelector('.box');
console.log(boxElement);
//<div class="box box-2 box-2"></div>

console.log(boxElement.classList);
//DOMTokenList ['box', value: 'box']
// 0:"box"
// 1:"box-2"
// length: 2
// value:"box box-2 box-2"
// [[Prototype]]:DOMTokenList

console.log(boxElement.classList.length);
//2

console.log(boxElement.classList[1]);
//box-2

console.log(boxElement.classList[2]);
//undefined
