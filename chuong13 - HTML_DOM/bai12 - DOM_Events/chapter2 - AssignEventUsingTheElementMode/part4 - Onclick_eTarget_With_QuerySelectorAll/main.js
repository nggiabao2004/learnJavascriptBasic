//DOM Events

var h1Elements = document.querySelectorAll('h1');
console.log(h1Elements);
//NodeList(3) [h1, h1, h1]
// 0: h1
// 1: h1
// 2: h1
// length: 3
// [[Prototype]]: NodeList

for (var i=0; i < h1Elements.length; ++i){
   h1Elements[i].onclick = function(e){
      console.log(e.target);
      console.log(i);
   };
}
//Mở live server và trình duyệt, nhấn thử theo thứ tự 3 chữ "DOM Event 1", "DOM Event 2" và "DOM Event 3", vào tab console (trong inspect) để xem kết quả
// <span>DOM Event 1</span>
// 3
// <span>DOM Event 2</span>
// 3
// <span>DOM Event 3</span>
// 3

/**Do biến i được khai báo bằng var (phạm vi function scope),
 * nên tất cả các hàm onclick đều tham chiếu đến cùng một biến i.
 * Sau khi vòng lặp kết thúc, giá trị của i là 3 (bằng độ dài của mảng h1Elements).
 * Vì vậy, dù bạn click vào bất kỳ thẻ h1 nào, giá trị in ra của i luôn là 3.
 * 
 * Dưới đây là bảng mô tả từng bước hoạt động của vòng lặp:

| Bước | Giá trị i | Phần tử đang xét (`h1Elements[i]`)  | Hành động trong vòng lặp | Khi click vào phần tử | Giá trị i in ra khi click |
|------|-----------|-------------------------------------|--------------------------|-----------------------|---------------------------|
| 1    | 0         | h1 đầu tiên                         | Gán hàm onclick          | Click vào h1 đầu tiên | 3                         |
| 2    | 1         | h1 thứ hai                          | Gán hàm onclick          | Click vào h1 thứ hai  | 3                         |
| 3    | 2         | h1 thứ ba                           | Gán hàm onclick          | Click vào h1 thứ ba   | 3                         |
| 4    | 3         | Không còn phần tử                   | Kết thúc vòng lặp        | -                     | -                         |

**Lưu ý:** Khi click vào bất kỳ phần tử nào, giá trị i in ra đều là 3, vì sau khi vòng lặp kết thúc, biến i đã tăng lên bằng độ dài của mảng.
*/
