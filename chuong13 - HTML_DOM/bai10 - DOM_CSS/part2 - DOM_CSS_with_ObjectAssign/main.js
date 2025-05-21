//DOM CSS
var boxElement = document.querySelector('.box');
console.log(boxElement);
//<div class="box"></div>

console.log(boxElement.style);
//CSSStyleDeclaration {accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}

//Cách 2: DOM CSS with Object.assign
var boxElement = document.querySelector('.box');
Object.assign(boxElement.style,{
   width: '500px',
   height: '250px',
   backgroundColor: '#008000', //(HEX color code: Green)
});

console.log(boxElement);
//<div class="box" style="width: 500px; height: 250px; background-color: rgb(0, 128, 0);"></div>
console.log(boxElement.style.backgroundColor);
//rgb(0, 128, 0)
//backgroundColor chấp nhận mã màu HEX CODE
