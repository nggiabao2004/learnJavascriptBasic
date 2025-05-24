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

buttonElement.onclick = function(){
   console.log('viec1');
   console.log('viec2');
   console.log('viec3');
}
/**Mở live server và trình duyệt, nhập vào label và nhấn ngoài label (hoặc nhấn Enter),
 *  vào tab console (trong inspect) để xem kết quả.
 */
//Nhấn thử button "CLICK ME" thì sẽ hiện kết quả là: "viec1"; "viec2"; "viec3"
/**Để tránh bị chuyển trang mà muốn xem kết quả thì vào Setting của Inspect trình duyệt,
 * chọn "Preverse log" là xong.
 */
