//DOM Events 2
/**onkeyup
 * Sự kiện onkeyup được kích hoạt khi người dùng nhả một phím trên bàn phím
 * sau khi đã nhấn xuống (keyup). Sự kiện này thường được sử dụng để xử lý
 * các thao tác nhập liệu, kiểm tra giá trị nhập vào, hoặc thực hiện các hành động
 * dựa trên phím mà người dùng vừa nhả ra.
 * Đối tượng event cung cấp thông tin về phím vừa được nhả, ví dụ: event.key, event.which, event.code, v.v.
 */

document.onkeyup = function(e){
   console.log(e.which);
   switch(e.which){
      case 27: //nút "ESC"
         console.log('EXIT');
         break;
   }
}
/**Mở live server và trình duyệt, nhập vào label và nhấn ngoài label (hoặc nhấn Enter),
 *  vào tab console (trong inspect) để xem kết quả.
 */
/**Nhấn nút kí tự "A" (trên bàn phím), kể cả trong hay ngoài label sẽ hiện kết quả là: "65" (theo mã ASCII).
 * Nếu nhấn nút "ESC" (trên bàn phím), thì sẽ hiện kết quả là EXIT.
 */
