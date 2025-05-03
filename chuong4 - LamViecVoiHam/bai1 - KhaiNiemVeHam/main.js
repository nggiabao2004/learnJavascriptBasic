/**Hàm (function)
 * 1. Khái niệm: 1 khối mã làm việc cụ thể
 * 2. Loại hàm:
 * - Built In
 * - Tự định nghĩa
 * 3. Tính chất:
 * - Không thực thi khi định nghĩa
 * - Sẽ thực thi khi gọi
 * - Có thể nhận tham số
 * - Có thể trả về 1 giá trị
 * 4. Quy tắc đặt tên hàm
 * - Chứa kí tự A-Z,a-z,0-9,"$","_"
 */
alert('Hello World (outside)')
function showDialog() {
    alert('Hello World (function showDialog)');
}

//call() function
showDialog();