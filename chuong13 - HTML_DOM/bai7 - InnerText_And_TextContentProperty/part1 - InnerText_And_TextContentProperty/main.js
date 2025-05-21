//Inner Text & Text Content Property
var headingElement = document.querySelector('h1');
//hoặc có thể viết: var headingElement = document.querySelector('.heading');
console.log(headingElement);
//<h1 class="heading">Heading text</h1>

//InnerText
console.log(headingElement.innerText);
//Heading text

//TextContent
console.log(headingElement.textContent);
//Heading text

//Sửa giá trị text trong thẻ element
headingElement.innerText = 'New Heading'
console.log(headingElement.innerText);
//New Heading

headingElement.innerText = `

   New Heading (innerText)

`;
//Đổi sang tab Element (trong live server, trình duyệt) thì sẽ như này:
// <h1 class="heading">
// <br>
// <br>
//    New Heading
// <br>
// <br>
// </h1>
console.log(headingElement.innerText);


// New Heading (innerText)

//(headingElement.innerText từ dòng 34-37)
console.log(headingElement.textContent);

headingElement.textContent = `

   New Heading (textContent)

`;
//Đổi sang tab Element (trong live server, trình duyệt) thì sẽ như này:
//<h1 class="heading">New Heading (textContent)</h1>
console.log(headingElement.innerText);
//New Heading (textContent)
console.log(headingElement.textContent);


   // New Heading (textContent)

//(headingElement.textContent từ dòng 51-54)
