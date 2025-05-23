//DOM Events 2
var inputTextElement = document.querySelector('input[type="text"]');
console.log(inputTextElement);
//<input type="text">

inputTextElement.oninput = function(e){
   console.log(e.target.value);
}
/**Mở live server và trình duyệt, nhập vào label và nhấn ngoài label (hoặc nhấn Enter),
 *  vào tab console (trong inspect) để xem kết quả.
 */
/**Giả sử nhập "123" theo thứ tự vào trong, thì sẽ hiện kết quả theo thứ tự là: "1"; "12"; "123"
 */
