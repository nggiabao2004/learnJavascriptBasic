//DOM attribute
//Lấy giá trị thuộc tính class trong HTML
var headingElement = document.querySelector('h1');
console.log(headingElement.getAttribute('class'));
//heading-test

//Thêm thuộc tính title trong Javascript
headingElement.title = 'title-test';
console.log(headingElement.getAttribute('title'));
//title-test

//Thêm thuộc tính data trong Javascript
headingElement.setAttribute('data', 'test-data');
console.log(headingElement.getAttribute('data'));
//test-data
