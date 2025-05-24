//PreventDefault
// Phương thức preventDefault() của đối tượng sự kiện (event),
//    dùng để ngăn chặn hành vi mặc định của trình duyệt.
// Ví dụ: Khi click vào thẻ <a>, mặc định trình duyệt sẽ chuyển trang theo thuộc tính href.
// Sử dụng preventDefault() sẽ ngăn không cho trình duyệt thực hiện hành vi đó.

var aElements = document.querySelectorAll('a');
//hoặc có thể sử dụng: var aElement = document.links;
//hoặc có thể sử dụng: var aElement = document.anchors; (trong trường hợp có thêm thuộc tính "name")
console.log(aElements);
//NodeList(2) [a, a]
// 0: a
// 1: a
// length: 2
// [[Prototype]]: NodeList

for (var i=0; i < aElements.length; ++i){
   aElements[i].onclick= function(e){
      console.log(e.target.href);
   }
}
/**Mở live server và trình duyệt, nhập vào label và nhấn ngoài label (hoặc nhấn Enter),
 *  vào tab console (trong inspect) để xem kết quả.
 */
/**Nhấn thử "Tìm kiếm Google" thì sẽ hiện kết quả là "htttps://google.com",
 *    và sau đó chuyển trang theo đường dẫn "htttps://google.com".
 * https://google.com/
 * Navigated to https://www.google.com/
 * 
 * Nhấn thử "AI ChatGPT" thì sẽ hiện kết quả là "htttps://chatgpt.com",
 *    và sau đó chuyển trang theo đường dẫn "htttps://chatgpt.com".
 * https://chatgpt.com/
 * Navigated to https://www.chatgpt.com/
 */
/**Để tránh bị chuyển trang mà muốn xem kết quả thì vào Setting của Inspect trình duyệt,
 * chọn "Preverse log" là xong.
 */
