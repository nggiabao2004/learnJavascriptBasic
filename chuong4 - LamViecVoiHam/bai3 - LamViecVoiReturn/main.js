// return
confirm('Message?');
var isConfirm= confirm('Message?');
console.log(isConfirm);

function cong1(a, b) {
    return a+ b;
    console.log("Hi");/*undefined
    do chưa trả về kết quả (thiếu return)*/
}
var result1= cong1(2,3);
console.log(result1)

function plus(a, b) {
    a+b;/*Không chạy, 
    do không trả về vì trong hàm có từ return*/
    console.log('Hi');
}
var result2= plus(2,3);
console.log(result2) /*undefined
do chưa trả về kết quả (thiếu return)*/

function cong2(a, b) {
    return a.toString()+ b.toString();
}
var result3= cong2(2,3);
console.log(result3) //23 (String)
