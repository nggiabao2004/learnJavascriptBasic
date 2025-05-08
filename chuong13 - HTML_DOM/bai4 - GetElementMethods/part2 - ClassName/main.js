//Get element methods: Class
//sẽ trả ra kiểu mảng, cho dù chỉ có 1 thẻ select
var headingNodes = document.getElementsByClassName('heading');
console.log(headingNodes);
// HTMLCollection(2) [h1.heading, h1.heading]
// 0:h1.heading
// 1:h1.heading
// length:2
// [[Prototype]]:HTMLCollection

var headingNodes = document.getElementsByTagName('heading');
console.log(headingNodes);
// HTMLCollection []
// length: 0
// [[Prototype]]: HTMLCollection
