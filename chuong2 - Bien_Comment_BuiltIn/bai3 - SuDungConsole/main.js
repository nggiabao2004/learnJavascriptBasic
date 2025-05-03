//console
alert('Hello World');
console.log('Day la dong note');
/**Sử dụng extension "live server" để chạy project trên trình duyệt,
 * sau đó nhấn phím F12 (Inspect) khi mở tab trình duyệt chạy project để hiển thị kết quả (ở mục Console)
 * 
 */
console.log(123);
console.log(true);

var hi= 'hello';
console.log(hi);
console.warn(hi);
console.error(hi);

//confirm
confirm('Xac nhan ban du tuoi!');
//prompt: label
prompt('Xac nhan ban du tuoi');

//setTimeOut
setTimeout(function() {
    alert('Thong bao sau 1 giay!')
}, 1000) //1000 miliSecond= 1 giay

//set interval
setInterval(function() {
    alert('Thong bao sau 1 giay!')
}, 1000) //Thuc thi lien tuc sau 1 giay
setInterval(function() {
    console.log('Day la log'+ Math.random())
}, 1000)
