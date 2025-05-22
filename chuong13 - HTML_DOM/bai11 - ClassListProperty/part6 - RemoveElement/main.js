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

//ClassList.remove();
boxElement.classList.add('blue');
//Mở live server và trình duyệt để xem kết quả, và đã thêm thuộc tính blue
//<div class="box box-1 box-2 blue">
//   <h1>CLASS LIST</h1>
//</div>
//Lúc này, chữ 'CLASS LIST' có màu 'blue'

setTimeout(() => {
   boxElement.classList.remove('blue');
}, 3000) //Tự động remove('blue') sau 3 giây

//Mở live server và trình duyệt để xem kết quả, và đã xóa thuộc tính blue
//<div class="box box-1 box-2">
//   <h1>CLASS LIST</h1>
//</div>
//Chữ 'CLASS LIST' có màu 'black', không có màu 'blue'

setTimeout(() => {
   boxElement.classList.remove('red');
}, 3000) //Tự động remove('red') sau 3 giây
//Mở live server và trình duyệt để xem kết quả, do không có thuộc tính 'red' nên không có gì thay đổi
//<div class="box box-1 box-2">
//   <h1>CLASS LIST</h1>
//</div>
//Chữ 'CLASS LIST' có màu 'black', không có màu 'blue'
