//DOM Events 2
var inputCheckboxElement = document.querySelector('input[type="checkbox"]');
console.log(inputCheckboxElement);
//<input type="checkbox">

inputCheckboxElement.onchange = function(e){
   console.log(e.target.checked);
}
/**Mở live server và trình duyệt, nhấn vào ô Checkbox,
 *  vào tab console (trong inspect) để xem kết quả.
 */
/**Giả sử nhấn vào ô Checkbox đang trống, thì sẽ hiện dấu tích và đưa kết quả là: "true",
 * và ngược lại, nhấn vào ô Checkbox đang có dấu tích, thì dấu tích sẽ biến mất và đưa kết quả là: "false"
 */
