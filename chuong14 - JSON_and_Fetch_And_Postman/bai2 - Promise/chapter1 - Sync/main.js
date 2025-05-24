//Promise
// Promise là một đối tượng đại diện cho một giá trị có thể có trong tương lai
//    (khi một thao tác bất đồng bộ hoàn thành hoặc thất bại).
// Promise có 3 trạng thái: pending (đang chờ), fulfilled (hoàn thành), rejected (thất bại).

//sync (đồng bộ)
// Mã đồng bộ (synchronous) là mã được thực thi tuần tự từng dòng một.
//    Dòng lệnh sau chỉ được thực hiện khi dòng lệnh trước đã hoàn thành.
//    Điều này đảm bảo thứ tự thực thi rõ ràng, nhưng có thể gây "chặn" nếu một tác vụ mất nhiều thời gian.

// Đây là các tác vụ đồng bộ (sync)
console.log(1);
console.log(2);
//Theo thứ tự các câu lênh thì kết quả sẽ in ra số "1" trước rồi số "2" sau
