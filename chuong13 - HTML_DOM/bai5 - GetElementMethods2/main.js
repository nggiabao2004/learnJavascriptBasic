var listItemNodes = document.querySelectorAll('.box-1 li');
console.log(listItemNodes);
// NodeList(2) [li, li]
// 0: li (Javascript1)
// 1: li (PHP1)
// length: 2
// [[Prototype]]: NodeList

//---Cách GetElement khác---
//Công việc 1: Sử dụng tới boxNode
var boxNode = document.querySelector('.box-1');
console.log(boxNode);
// <div class="box-1">...</div1> (cả Javascript1 và PHP1)

//Công việc 2: Sử dụng tới các li elements, là con của `.box-1`
console.log(boxNode.querySelectorAll('li'));
// NodeList(2) [li, li]
// 0: li (Javascript1)
// 1: li (PHP1)
// length: 2
// [[Prototype]]: NodeList

//---
console.log(boxNode.getElementsByTagName('li'));
// HTMLCollection(2) [li, li]
// 0: li
// 1: li
// length: 2
// [[Prototype]]: HTMLCollection

console.log(boxNode.getElementsByTagName('p'));
// HTMLCollection [p]
// 0: p
// length: 1
// [[Prototype]]: HTMLCollection

console.log(boxNode.querySelector('p'));
// <p>Test paragraph</p>
