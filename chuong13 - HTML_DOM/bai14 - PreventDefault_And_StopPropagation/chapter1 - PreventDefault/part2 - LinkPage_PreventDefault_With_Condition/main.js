//PreventDefault
// Phương thức preventDefault() của đối tượng sự kiện (event),
//    dùng để ngăn chặn hành vi mặc định của trình duyệt.
// Ví dụ: Khi click vào thẻ <a>, mặc định trình duyệt sẽ chuyển trang theo thuộc tính href.
// Sử dụng preventDefault() sẽ ngăn không cho trình duyệt thực hiện hành vi đó.

var aElements = document.links;
console.log(aElements);
//NodeList(2) [a, a]
// 0: a
// 1: a
// length: 2
// [[Prototype]]: NodeList

for (var i=0; i < aElements.length; ++i){
   aElements[i].onclick= function(e){
      if (!e.target.href.startsWith('https://google.com')){
         e.preventDefault();
      }
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
 * Còn nếu nhấn thử "AI ChatGPT" thì sẽ không chuyển trang và không có kết quả gì
 */
/**Để tránh bị chuyển trang mà muốn xem kết quả thì vào Setting của Inspect trình duyệt,
 * chọn "Preverse log" là xong.
 */
