//DOM CSS
var boxElement = document.querySelector('.box');
console.log(boxElement);
//<div class="box"></div>

console.log(boxElement.style);
//CSSStyleDeclaration {accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}

//Cách 1: DOM CSS
var boxElement = document.querySelector('.box');
boxElement.style.width = '500px';
boxElement.style.height = '250px';
boxElement.style.backgroundColor = 'orange';
//Mở live server và trình duyệt để thấy kết quả

console.log(boxElement);
//<div class="box" style="width: 500px; height: 250px; background-color: orange;"></div>
