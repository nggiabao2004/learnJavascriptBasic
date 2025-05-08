//Get element methods: CSS Selector
var headingNode = document.querySelector('.heading');
console.log(headingNode);
//<h1 class="heading">JavaScript1</h1>

var headingNode = document.querySelector('.heading-2');
console.log(headingNode);
//<h2 class="heading-2">Heading2</h2>

var headingNode = document.querySelector('.box .heading-2');
console.log(headingNode);
//<h2 class="heading-2">Heading2</h2>

var headingNode = document.querySelector('html .box .heading-2');
console.log(headingNode);
//<h2 class="heading-2">Heading2</h2>

var headingNode = document.querySelector('.box .heading-2:first-child');
console.log(headingNode);
//<h2 class="heading-2">Heading2</h2>

var headingNode = document.querySelector('.box .heading-2:nth-child(2)');
console.log(headingNode);
//<h2 class="heading-2">Heading2.1</h2>

var headingNode = document.querySelectorAll('html .box .heading-2');
console.log(headingNode);
//NodeList(3) [h2.heading-2, h2.heading-2, h2.heading-2]
// 0:h2.heading-2
// 1:h2.heading-2
// 2:h2.heading-2
// length:3
// [[Prototype]]:NodeList

var headingNode = document.querySelectorAll('html .box .heading-2');
console.log(headingNode[0]);
//<h2 class="heading-2">Heading2</h2>

var headingNode = document.querySelectorAll('html .box .heading-2');
console.log(headingNode[1]);
//<h2 class="heading-2">Heading2.1</h2>
