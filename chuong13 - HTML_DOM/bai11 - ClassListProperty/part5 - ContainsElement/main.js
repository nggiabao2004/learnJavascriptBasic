//ClassList Property
var boxElement = document.querySelector('.box');
console.log(boxElement);
//<div class="box box-1 box-2"></div>

console.log(boxElement.classList);
//DOMTokenList(3) ['box', 'box-1', 'box-2', value: 'box box-1 box-2']
// 0:"box"
// 1:"box-1"
// 2:"box-2"
// length: 3
// value:"box box-1 box-2"
// [[Prototype]]:DOMTokenList

//ClassList.contains();
boxElement.classList.add('blue');
//Mở live server và trình duyệt để xem kết quả, và đã thêm thuộc tính blue
//<div class="box box-1 box-2 blue">
//   <h1>CLASS LIST</h1>
//</div>
//Lúc này, chữ 'CLASS LIST' có màu 'blue'

console.log(boxElement.classList.contains('blue'));
//true

console.log(boxElement.classList.contains('green'));
//false

boxElement.classList.add('blue', 'green', 'red');
//Mở live server và trình duyệt để xem kết quả, và đã thêm các thuộc tính khác
//<div class="box box-1 box-2 blue">
//   <h1>CLASS LIST</h1>
//</div>
//Nhưng chữ CLASS LIST chỉ hiện màu blue, không có hiện màu green hay red
console.log(boxElement.classList.contains('green'));
//true (vì đã add thêm thuộc tính 'green' vào rồi)

