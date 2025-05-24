//Event listener
// Event listener là một phương thức cho phép lắng nghe (hoặc hủy bỏ lắng nghe)
//    và xử lý nhiều việc khi các sự kiện (event) xảy ra trên phần tử HTML.
// Cú pháp phổ biến: element.addEventListener('event', function, useCapture);
// Ví dụ: button.addEventListener('click', function() { ... });
// Ưu điểm: Có thể gán nhiều hàm xử lý cho cùng một sự kiện trên một phần tử,
//    dễ dàng gỡ bỏ bằng removeEventListener.
// So với thuộc tính on<Event> (như onclick), event listener linh hoạt và mạnh mẽ hơn.

var buttonElement = document.getElementById('btn')
console.log(buttonElement)
//<button id="btn">CLICK ME</button>

function viec1(){
   console.log("viec1.1");
   console.log("viec1.2");
}
buttonElement.addEventListener('click', viec1);
function viec2(){
   console.log("viec2");
}
buttonElement.addEventListener('click', viec2);
setTimeout(function(){
   buttonElement.removeEventListener('click', viec2);
}, 3000)
/**Mở live server và trình duyệt, nhập vào label và nhấn ngoài label (hoặc nhấn Enter),
 *  vào tab console (trong inspect) để xem kết quả.
 */
/**Cho setTimeout(function(){
 *    buttonElement.removeEventListener('click', viec1);
 *    buttonElement.removeEventListener('click', viec2);
 * }, 3000) * 
 * Nếu chỉ muốn 1 trong 2 function sau 3 giây sẽ dừng hoạt động tiếp,
 *    thì giữ nguyên lệnh removeEventListener của function muốn ngừng hoạt động.
 * Ví dụ: Muốn function viec2(){} sau 3 giây sẽ không hoạt động,
 *    thì vẫn giữ dòng lệnh "buttonElement.removeEventListener('click', viec2);"
 *    và xóa lệnh "buttonElement.removeEventListener('click', viec1);" để cho function 1 sau 3 giây vẫn hoạt động
 * Như vậy, lúc đầu là 2 function viec1, viec2 trong 3 giây sẽ hoạt động bình thường,
 *    vẫn khi nhấn button "CLICK ME" vẫn sẽ in ra kết quả "viec1.1"; "viec1.2"; "viec2".
 * Nhưng sau 3 giây, do xóa lệnh "buttonElement.removeEventListener('click', viec1);"
 *    để tiếp tục chạy function viec1 nên giờ chỉ còn:
 *       setTimeout(function(){
 *           buttonElement.removeEventListener('click', viec2);
 *       }, 3000)
 * Vì vậy, khi nhấn button "CLICK ME" thì chỉ in ra kết quả của function "viec1.1"; "viec1.2"; "viec2".
 * Nhưng sau 3 giây, khi button "CLICK ME" thì chỉ in ra kết quả của function "viec1.1"; "viec1.2".
 */
/**Để tránh bị chuyển trang mà muốn xem kết quả thì vào Setting của Inspect trình duyệt,
 * chọn "Preverse log" là xong.
 */
