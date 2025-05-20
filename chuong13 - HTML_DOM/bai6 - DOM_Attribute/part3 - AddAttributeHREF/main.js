//DOM attribute
//Với thẻ element <a>, thuộc tính href (href chỉ áp dụng với thẻ element <a>)
var headingElement = document.querySelector('a');
headingElement.href= 'HeadingClass';
console.log(headingElement);
//<a href="HeadingClass">Heading A</a>

//Có thể thêm thuộc tính href ở thẻ element <h1> bằng việc sử dụng setAttribute
var headingElement = document.querySelector('h1');
headingElement.setAttribute('href','headingHref');
console.log(headingElement);
//<h1 href="headingHref">Heading H1</h1>

//Lưu ý: thuộc tính href không áp dụng với cách dưới đây (ví dụ thêm thuộc tính title vào thẻ element <h1>)
headingElement.title= 'HeadingTitle';
console.log(headingElement);
//<h1 title="HeadingTitle">Heading H1</h1>

//<h1 href="headingHref" title="HeadingTitle">Heading H1</h1>
