//DOM Events 2
var inputTextElement = document.querySelector('select');
console.log(inputTextElement);
{/* <select>
   <option value="valueJavscript">Javascript</option>
   <option value="valueJava">Java</option>
   <option value="valuePython">Python</option>
</select> */}

inputTextElement.oninput = function(e){
   console.log(e.target.value);
}
/**Mở live server và trình duyệt, lựa chọn (select) các thẻ <option> và nhấn thẻ đó,
 *  vào tab console (trong inspect) để xem kết quả.
 */
/**Giả sử chọn thẻ <option value="valueJava">Java</option>,
 * thì sẽ hiện kết quả của thuộc tính value element đã chọn: "valueJava"
 */
