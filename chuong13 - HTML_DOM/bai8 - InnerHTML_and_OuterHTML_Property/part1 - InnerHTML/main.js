//InnerHTML_and_OuterHTML_Property
var boxElement= document.querySelector('.box');
console.log(boxElement);
//<div class="box">Box</div>

//InnerHTML
boxElement.innerHTML = '<h1>Heading H1</h1>';
console.log(boxElement);
//<div class="box">
//   <h1>Heading H1</h1>
//</div>
console.log(document.querySelector('h1').innerText);
//Heading H1

boxElement.innerHTML = '<h1 title="Heading">Heading H1</h1>';
console.log(boxElement);
//<div class="box">
//   <h1 title="Heading">Heading H1</h1>
//</div>
console.log(boxElement.innerHTML);
//<h1 title="Heading">Heading H1</h1>
