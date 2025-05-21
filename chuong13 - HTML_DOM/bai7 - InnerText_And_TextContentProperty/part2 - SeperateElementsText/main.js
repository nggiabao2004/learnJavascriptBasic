//Inner Text & Text Content Property
var headingElement = document.querySelector('.heading');
console.log(headingElement);
//<h1 class="heading">
//
//   <span>Heading</span>
//   <span style="display: none">(No display)</span>
//   <span>text</span>
//
//</h1>

//InnerText
console.log(headingElement.innerText);
//Heading text

//TextContent
console.log(headingElement.textContent);


      //   Heading
      //   (No display)
      //   text

    
//TextContent sẽ xuất ra những text trong các thẻ Element và cả khoảng cách (từ dòng 18-24)
