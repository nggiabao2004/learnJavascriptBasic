//PreventDefault
// Phương thức preventDefault() của đối tượng sự kiện (event),
//    dùng để ngăn chặn hành vi mặc định của trình duyệt.
// Ví dụ: Khi click vào thẻ <a>, mặc định trình duyệt sẽ chuyển trang theo thuộc tính href.
// Sử dụng preventDefault() sẽ ngăn không cho trình duyệt thực hiện hành vi đó.

var ulElement = document.querySelector('ul');
console.log(ulElement);
//<ul>
//   <li>Javascript</li>
//   <li>Java</li>
//   <li>Python</li>
//</ul>

//onmousedown: khi click sẽ không bị ẩn đi
ulElement.onmousedown = function(e){
   e.preventDefault();
}

ulElement.onclick = function(e){
   console.log(e.target);
}

/**Mở live server và trình duyệt, nhập vào label và nhấn ngoài label (hoặc nhấn Enter),
 *  vào tab console (trong inspect) để xem kết quả.
 */
/**Nhấn thử ô label thì sẽ hiện các thẻ element "li" (các thẻ "li" chứa bên trong thẻ "ul");
 * Nhấn thử thẻ "Javascript" thì sẽ hiện kết quả: <li>Javascript</li>
 */ 
/**Để tránh bị chuyển trang mà muốn xem kết quả thì vào Setting của Inspect trình duyệt,
 * chọn "Preverse log" là xong.
 */
