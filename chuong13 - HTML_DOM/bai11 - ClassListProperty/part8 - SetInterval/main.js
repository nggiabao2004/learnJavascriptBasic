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

//ClassList.toggle() + setInterval()
setInterval(() => {
   boxElement.classList.toggle('blue');
}, 1000); //Toggle kiểm tra xem có thuộc tính trong thẻ không và tự động lặp lại add('blue') và remove('blue') sau 1 giây
//Mở live server và trình duyệt để xem kết quả, và lặp lại lệnh thêm và xóa thuộc tính blue sau 1 giây
//Lúc thêm thuộc tính add('blue') vào
   //<div class="box box-1 box-2 blue">
   //   <h1>CLASS LIST</h1>
   //</div>
   //Chữ 'CLASS LIST' lúc này có màu 'blue'
//Lúc xóa thuộc tính add('blue') đi
   //<div class="box box-1 box-2">
   //   <h1>CLASS LIST</h1>
   //</div>
   //Chữ 'CLASS LIST' có màu 'black', không có màu 'blue'
