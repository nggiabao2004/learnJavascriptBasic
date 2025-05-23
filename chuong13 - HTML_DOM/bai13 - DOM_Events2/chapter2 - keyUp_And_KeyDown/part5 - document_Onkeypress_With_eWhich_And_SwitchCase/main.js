//DOM Events 2
/**onkeypress
 * Sự kiện onkeypress được kích hoạt khi người dùng nhấn một phím ký tự trên bàn phím.
 * Sự kiện này thường được sử dụng để xử lý các thao tác nhập liệu từ bàn phím.
 * Trong JavaScript, onkeypress có thể được gán cho các phần tử HTML hoặc đối tượng document.
 * Khi sự kiện xảy ra, một đối tượng sự kiện (event) sẽ được truyền vào hàm xử lý,
 * trong đó thuộc tính 'which' hoặc 'keyCode' cho biết mã ASCII của phím vừa được nhấn.
 * Lưu ý: onkeypress chỉ nhận các phím ký tự, không nhận các phím chức năng như Shift, Ctrl, Alt,...
 */

document.onkeypress = function(e){
   console.log(e.which);
   switch(e.which){
      case 27: //nút "ESC"
         console.log('EXIT');
         break;
      case 32:
         console.log('Press SPACE');
         break;
      case 13:
         console.log('Press ENTER');
         break;
   }
}
/**Mở live server và trình duyệt, nhập vào label và nhấn ngoài label (hoặc nhấn Enter),
 *  vào tab console (trong inspect) để xem kết quả.
 */
/**Nhấn nút kí tự "A" (trên bàn phím), kể cả trong hay ngoài label sẽ hiện kết quả là: "65" (theo mã ASCII).
/**Nhấn nút "SPACE" (trên bàn phím), kể cả trong hay ngoài label sẽ hiện kết quả là: "32" (theo mã ASCII),
 *    và xuất hiện dòng chữ "Press SPACE"
/**Nhấn nút "ENTER" (trên bàn phím), kể cả trong hay ngoài label sẽ hiện kết quả là: "13" (theo mã ASCII),
 *    và xuất hiện dòng chữ "Press ENTER"
 * Nếu nhấn nút "ESC" (trên bàn phím), ể cả trong hay ngoài label sẽ không có gì xảy ra.
 */
