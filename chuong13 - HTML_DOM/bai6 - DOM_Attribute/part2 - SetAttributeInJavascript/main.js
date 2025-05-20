//DOM attribute
//setAttribute
var headingElement = document.querySelector('h1');

//Thuộc tính id
headingElement.setAttribute('id','headingID');
console.log(headingElement);
//<h1 id="HeadingID" class="HeadingClass">Heading H1</h1>

//Thuộc tính class (nhớ ghi là className)
headingElement.className= 'HeadingClass';
console.log(headingElement);
//<h1 class="HeadingClass">Heading H1</h1>

//Với setAttribute thì có thể thuộc tính class bình thường
headingElement.setAttribute('class','headingClass');
console.log(headingElement);
//<h1 class="HeadingClass">Heading H1</h1>

//Có thể thêm thuộc tính href bằng setAttribute (cách ở ví dụ "thuộc tính class" thì không sử dụng được)
headingElement.setAttribute('href','headingHref');
console.log(headingElement);
//<h1 href="headingHref">Heading H1</h1>

headingElement.setAttribute('data-1','headingData1');
console.log(headingElement);
//<h1 data-1="headingData1">Heading H1</h1>

/** Nếu áp dụng cả 3 thuộc tính (title, id, class) thì sẽ cho ra kết quả dưới đây:
<h1 title="HeadingTitle" id="headingID" class="headingClass" href="headingHref"
   data-1="headingData1">Heading H1</h1>
*/
