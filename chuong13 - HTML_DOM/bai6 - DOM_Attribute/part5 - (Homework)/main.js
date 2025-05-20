//Thêm thuộc tính title có giá trị "F8 - Học lập trình để đi làm" cho thẻ h1.
var headingElement = document.querySelector('h1');
headingElement.setAttribute('title','F8 - Học lập trình để đi làm');
console.log(headingElement);
//<h1 title="F8 - Học lập trình để đi làm">F8 - Học lập trình để đi làm</h1>
console.log(headingElement.getAttribute('title'));
//F8 - Học lập trình để đi làm

//Thêm thuộc tính data-title có giá trị "F8 - Học lập trình để đi làm" cho thẻ h1.
headingElement.setAttribute('data-title','F8 - Học lập trình để đi làm');
console.log(headingElement);
//<h1 data-title="F8 - Học lập trình để đi làm">F8 - Học lập trình để đi làm</h1>
console.log(headingElement.getAttribute('data-title'));
//F8 - Học lập trình để đi làm

//Thêm thuộc tính href có giá trị "https://fullstack.edu.vn/" cho thẻ a.
var headingElement = document.querySelector('a');
headingElement.href = "https://fullstack.edu.vn";
console.log(headingElement);
//<a href="https://fullstack.edu.vn" >fullstack.edu.vn</a>
console.log(headingElement.getAttribute('href'));
//https://fullstack.edu.vn

//Thêm thuộc tính target có giá trị "_blank" cho thẻ a.
headingElement.setAttribute('target','_blank');
console.log(headingElement);
//<a target="_blank">fullstack.edu.vn</a>
console.log(headingElement.getAttribute('target'));
//_blank
