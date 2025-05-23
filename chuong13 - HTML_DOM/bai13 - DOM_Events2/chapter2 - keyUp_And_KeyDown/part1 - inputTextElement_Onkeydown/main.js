//DOM Events 2
/**onkeydown
 * Sự kiện onkeydown được kích hoạt khi một phím bất kỳ trên bàn phím được nhấn xuống.
 * Sự kiện này thường được sử dụng để xử lý các thao tác nhập liệu từ bàn phím.
 * Đối tượng sự kiện (event) truyền vào hàm xử lý chứa thông tin về phím được nhấn như: key, code, ctrlKey, shiftKey, v.v.
 * Lưu ý: onkeydown xảy ra trước khi giá trị của input thay đổi.
 */

var inputTextElement = document.querySelector('input[type="text"]');
console.log(inputTextElement);
//<input type="text">

inputTextElement.onkeydown = function(e){
   console.log(e);
}
/**Mở live server và trình duyệt, nhập vào label và nhấn ngoài label (hoặc nhấn Enter),
 *  vào tab console (trong inspect) để xem kết quả.
 */
/**Giả sử nhập "a" vào trong thì sẽ hiện kết quả là:
 *    KeyboardEvent {isTrusted: true, key: 'a', code: 'KeyA', location: 0, ctrlKey: false, …}
 */

inputTextElement.onkeydown = function(e){
   console.log(e.target.value);
}
/**Mở live server và trình duyệt, nhập vào label và nhấn ngoài label (hoặc nhấn Enter),
 *  vào tab console (trong inspect) để xem kết quả.
 */
/**Giả sử nhập kí tự "a" vào trong label thì sẽ không hiện kết quả gì.
 * Nhưng nếu nhập thêm kí tự "b" thì sẽ hiện kí tự "a" lúc trước nhập vào đã xuất hiện.
 * Nhập thêm kí tự "c" vào thì sẽ hiện kết quả là "ab" (kí tự "a" đã nhập đầu tiên và kí tự "b" nhập trước đó)
 */
