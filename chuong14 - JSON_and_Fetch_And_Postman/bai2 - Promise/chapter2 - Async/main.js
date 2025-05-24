//Promise
//Async (bất đồng bộ): Là các thao tác không chạy tuần tự
//    mà sẽ được thực hiện song song hoặc sau một khoảng thời gian nhất định,
//    không làm chặn luồng chính của chương trình.
//Ví dụ: setTimeout, setInterval, fetch, đọc file, XMLHttpRequest, requestAnimationFrame,...

// setTimeout là tác vụ bất động bộ (async)
setTimeout(function(){
   console.log(1);
}, 2000); 
// Đây là tác vụ đồng bộ (sync)
console.log(2);
//Do "console.log(1);" được setTimeOut trong 1 giây sau mới chạy, 
//    nên số "2" được in ra trước rồi sẽ đến số "1"
