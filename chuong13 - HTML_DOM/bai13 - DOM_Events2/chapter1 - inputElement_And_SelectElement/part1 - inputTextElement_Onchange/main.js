//DOM Events 2
var inputTextElement = document.querySelector('input[type="text"]');
console.log(inputTextElement);
//<input type="text">

inputTextElement.onchange = function(e){
   console.log(e.target.value);
}
/**Mở live server và trình duyệt, nhập vào label và nhấn ngoài label (hoặc nhấn Enter),
 *  vào tab console (trong inspect) để xem kết quả.
 */
/**Giả sử nhập "123" vào trong, nhấn ngoài label thì sẽ hiện kết quả là: "123"
 * Tiếp theo nhập "Hello" vào trong, nhấn Enter thì sẽ hiện kết quả là: "Hello"
 */
