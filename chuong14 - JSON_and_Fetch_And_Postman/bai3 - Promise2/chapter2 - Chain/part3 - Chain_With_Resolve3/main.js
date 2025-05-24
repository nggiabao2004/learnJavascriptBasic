//Promise
//Chain
// Promise có 3 trạng thái: pending (đang chờ), fulfilled (hoàn thành), rejected (thất bại).
// Khi tạo Promise, truyền vào một hàm executor với 2 tham số:
//    resolve (khi thành công), reject (khi thất bại).
// Sử dụng ".then()" để xử lý khi Promise thành công, ".catch()" để xử lý khi thất bại.
// Còn ".finally" được sử dụng để thực thi một đoạn mã sau khi Promise kết thúc
//    (dù thành công hay thất bại). Nó luôn chạy sau .then hoặc .catch,
//    và thường dùng để thực hiện các thao tác dọn dẹp hoặc thông báo hoàn tất.

// Chain (chuỗi) trong Promise là kỹ thuật nối tiếp các phương thức .then() lại với nhau.
// Mỗi .then() nhận kết quả trả về từ .then() trước đó.
// Điều này giúp xử lý tuần tự các tác vụ bất đồng bộ, tránh callback hell.
// Nếu một .then() trả về một Promise, .then() tiếp theo sẽ đợi Promise đó hoàn thành.
// Nếu một .then() trả về giá trị thông thường, giá trị đó sẽ được truyền sang .then() tiếp theo.
// Nếu có lỗi ở bất kỳ đâu trong chuỗi, .catch() sẽ bắt lỗi đó.

//Tạo new Promise()
var promise = new Promise(
   //Executor
   function(resolve, reject){
      //logic
         //Thành công:
         resolve('Hello world');
   }
);
// undefined
// Done

promise
   .then(function(){
      return new Promise(function(resolve){
         setTimeout(resolve, 3000);
      });
   })
   .then(function(data){
      console.log(data);
   })
   .catch(function(){
      console.log('Failure');
   })
   .finally(function(){
      console.log('Done');
   })
