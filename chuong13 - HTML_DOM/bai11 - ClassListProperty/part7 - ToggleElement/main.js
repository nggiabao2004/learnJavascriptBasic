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

//ClassList.toggle();
//Nếu có thuộc tính trong thẻ element thì toggle sẽ loại bỏ đi (remove)
//Nếu không có thuộc tính trong thẻ element thì toggle sẽ thêm vào (add)
boxElement.classList.add('blue');
//Mở live server và trình duyệt để xem kết quả, và đã thêm thuộc tính blue
//<div class="box box-1 box-2 blue">
//   <h1>CLASS LIST</h1>
//</div>
//Lúc này, chữ 'CLASS LIST' có màu 'blue'

setTimeout(() => {
   boxElement.classList.toggle('blue');
}, 3000); //Toggle kiểm tra xem có thuộc tính trong thẻ không và tự động remove('blue') sau 3 giây
//Mở live server và trình duyệt để xem kết quả, và đã xóa thuộc tính blue
//<div class="box box-1 box-2">
//   <h1>CLASS LIST</h1>
//</div>
//Chữ 'CLASS LIST' có màu 'black', không có màu 'blue'

setTimeout(() => {
   boxElement.classList.toggle('green');
}, 5000); //Toggle kiểm tra xem có thuộc tính trong thẻ không và tự động add('green') sau 3 giây
//Mở live server và trình duyệt để xem kết quả, và đã thêm thuộc tính green
//<div class="box box-1 box-2 green">
//   <h1>CLASS LIST</h1>
//</div>
//Chữ 'CLASS LIST' có màu 'black', không có màu 'green'

setTimeout(() => {
   boxElement.classList.toggle('blue');
}, 8000); //Toggle kiểm tra xem có thuộc tính trong thẻ không và tự động add('blue') sau 3 giây
//Mở live server và trình duyệt để xem kết quả, và đã thêm thuộc tính blue
//<div class="box box-1 box-2 green blue">
//   <h1>CLASS LIST</h1>
//</div>
//Chữ 'CLASS LIST' lúc này có màu 'blue'
