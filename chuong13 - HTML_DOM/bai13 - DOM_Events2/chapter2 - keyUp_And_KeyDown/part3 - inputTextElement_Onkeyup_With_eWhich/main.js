//DOM Events 2
/**onkeyup
 * Sự kiện onkeyup được kích hoạt khi người dùng nhả một phím trên bàn phím
 * sau khi đã nhấn xuống (keyup). Sự kiện này thường được sử dụng để xử lý
 * các thao tác nhập liệu, kiểm tra giá trị nhập vào, hoặc thực hiện các hành động
 * dựa trên phím mà người dùng vừa nhả ra.
 * Đối tượng event cung cấp thông tin về phím vừa được nhả, ví dụ: event.key, event.which, event.code, v.v.
 */

var inputTextElement = document.querySelector('input[type="text"]');
console.log(inputTextElement);
//<input type="text">

inputTextElement.onkeyup = function(e){
   console.log(e);
}
/**Mở live server và trình duyệt, nhập vào label và nhấn ngoài label (hoặc nhấn Enter),
 *  vào tab console (trong inspect) để xem kết quả.
 */
/**Giả sử nhập "a" vào trong thì sẽ hiện kết quả là:
 *    KeyboardEvent {isTrusted: true, key: 'a', code: 'KeyA', location: 0, ctrlKey: false, …}
 */

inputTextElement.onkeyup = function(e){
   console.log(e.which);
}
/**Mở live server và trình duyệt, nhập vào label và nhấn ngoài label (hoặc nhấn Enter),
 *  vào tab console (trong inspect) để xem kết quả.
 */
/**Giả sử nhập kí tự "A" vào trong label thì sẽ hiện kết quả là 65 (theo mã ASCII)
 * Nhập thêm kí tự "b" thì sẽ hiện kết quả là 66 (theo mã ASCII)
 * Nhấn thêm nút "ESC" (trên bàn phím) thì sẽ hiện kết quả là 27 (theo mã ASCII)
 */
