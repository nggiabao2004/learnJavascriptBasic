//Get element methods: TagName
var headingNode = document.getElementsByTagName('heading');
console.log(headingNode);
// HTMLCollection []
// length: 0
// [[Prototype]]: HTMLCollection

//Có thể tìm loại thẻ 
var headingNode = document.getElementsByTagName('h1');
console.log(headingNode);
// HTMLCollection(2) [h1.heading, h1.heading]
// 0:h1.heading
// 1:h1.heading
// length:2
// [[Prototype]]:HTMLCollection

var headingNode = document.getElementsByTagName('p');
console.log(headingNode);
//HTMLCollection [p]
// 0: p
// length: 1
// [[Prototype]]: HTMLCollection
