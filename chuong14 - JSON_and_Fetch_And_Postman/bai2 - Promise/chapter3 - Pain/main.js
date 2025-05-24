//Promise
//Pain (Callback hell)
// Callback hell là hiện tượng khi chúng ta lồng nhiều callback vào nhau,
//    dẫn đến việc code trở nên rối rắm, khó đọc, khó bảo trì,
//    và khó kiểm soát luồng thực thi (như Pyramid: kim tự tháp).
// Để giải quyết vấn đề này, Promise ra đời giúp viết code bất đồng bộ dễ đọc hơn, tránh callback hell.

// Ví dụ dưới đây sử dụng setTimeout lồng nhau để thực hiện các tác vụ bất đồng bộ theo thứ tự.
setTimeout(function(){
   console.log(1);
   setTimeout(function(){
      console.log(2);
      setTimeout(function(){
         console.log(3);
      }, 2000);
   }, 2000);
}, 2000);
//Khi chạy, sẽ không hiện kết quả nào. Nhưng sau 2 giây sẽ xuất hiện kết quả "1".
//Kế tiếp 2 giây tiếp theo sẽ xuất hiện kết quả "2", và 2 giây cuối cùng là xuất hiện kết quả "3".
