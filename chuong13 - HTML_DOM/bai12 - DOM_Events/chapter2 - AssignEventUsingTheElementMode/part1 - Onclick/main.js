//DOM Events

var h1Element = document.querySelector('h1');
console.log(h1Element);
//<h1>
// <span>DOM Events 1</span>
//</h1>

h1Element.onclick = function(){
   console.log(this)
};
//Mở live server và trình duyệt, nhấn thử vào chữ "DOM Event 1", vào tab console (trong inspect) để xem kết quả
//<h1>
// <span>DOM Events 1</span>
//</h1>
