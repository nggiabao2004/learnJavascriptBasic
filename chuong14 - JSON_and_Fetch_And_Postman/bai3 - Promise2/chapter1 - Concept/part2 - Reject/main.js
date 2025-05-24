//Promise
//Concept (Lý thuyết, cách hoạt động)
// Promise có 3 trạng thái: pending (đang chờ), fulfilled (hoàn thành), rejected (thất bại).
// Khi tạo Promise, truyền vào một hàm executor với 2 tham số:
//    resolve (khi thành công), reject (khi thất bại).
// Sử dụng ".then()" để xử lý khi Promise thành công, ".catch()" để xử lý khi thất bại.
// Còn ".finally" được sử dụng để thực thi một đoạn mã sau khi Promise kết thúc
//    (dù thành công hay thất bại). Nó luôn chạy sau .then hoặc .catch,
//    và thường dùng để thực hiện các thao tác dọn dẹp hoặc thông báo hoàn tất.

//Tạo new Promise()
var promise = new Promise(
   //Executor
   function(resolve, reject){
      //logic
         //Thất bại:
         reject();
   }
);
//Failure
//Done

promise
   .then(function(){
      console.log('Successfully');
   })
   .catch(function(){
      console.log('Failure');
   })
   .finally(function(){
      console.log('Done');
   })
