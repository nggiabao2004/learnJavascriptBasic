// StopPropagation là một phương thức của đối tượng sự kiện (event) trong JavaScript.
// Khi một sự kiện xảy ra trên một phần tử, sự kiện đó sẽ "bubbling" (nổi bọt) lên các phần tử cha.
// Nếu bạn muốn ngăn không cho sự kiện tiếp tục nổi bọt lên các phần tử cha,
//    hãy sử dụng event.stopPropagation().
// Ví dụ:
// element.addEventListener('click', function(event) {
//     event.stopPropagation(); // Ngăn sự kiện click nổi bọt lên cha
// });

var divElement = document.querySelector('div');
console.log(divElement);
//<div onclick="console.log('DIV')">
//   DIV
//
//   <button onclick="console.log('Click me!')">CLICK ME!</button>
//</div>

/**Mở live server và trình duyệt, nhập vào label và nhấn ngoài label (hoặc nhấn Enter),
 *  vào tab console (trong inspect) để xem kết quả.
 */
/**Nhấn thử button "CLICK ME!" thì sẽ hiện kết quả như sau:
 * Click me! (in HTML)
 * DIV (in HTML)
 */ 
/**Để tránh bị chuyển trang mà muốn xem kết quả thì vào Setting của Inspect trình duyệt,
 * chọn "Preverse log" là xong.
 */
