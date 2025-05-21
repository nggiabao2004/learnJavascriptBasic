//InnerHTML_and_OuterHTML_Property
var boxElement= document.querySelector('.box');
console.log(boxElement);
//<div class="box">
//   <h1>Heading H1</h1>
//</div>

//OuterHTML
console.log(boxElement.outerHTML);
//<div class="box">
//   <h1>Heading H1</h1>
//</div>

boxElement.innerHTML= '<span>Test Span</span>';
console.log(boxElement);
//<div class="box">
// <span>Test Span</span>
//</div>