//DOM attribute
//Hiện tại trong HTML, thẻ <h1>Heading H1</h1> không có thuộc tính
//Cách để thêm thuộc tính vào thẻ element như sau:

//Bước 1: Lấy thẻ element <h1>
var headingElement = document.querySelector('h1');
//Bước 2: Giờ thêm thuộc tính (attribute) title vào thẻ element <h1>
headingElement.title= 'HeadingTitle';
//Bước 3: In ra thẻ HTML có chứa thuộc tính đã thêm vào
console.log(headingElement);
//<h1 title="Heading">Heading H1</h1>
