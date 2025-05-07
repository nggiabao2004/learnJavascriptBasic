//Callback: là hàm (function) được truyền qua đối số khi gọi hàm khác
function myFunction1(param1){
   console.log(typeof param1);
};
myFunction1("Học lập trình"); //String
function myCallBack1(){
};
myFunction1(myCallBack1); //function

function myCallBack1(value){
   console.log("Value:", value)
}
myCallBack1("Hello world"); //Value: Hello world

function myFunction2(param2){
   param2('Học lập trình');
}
function myCallBack2(value){
   console.log("Value:", value)
}
myFunction2(myCallBack2); //Value: Học lập trình

function myFunction3(param3){
   if (typeof param3 === 'function'){
      param3(123);
   }
}
function myCallBack3(value){
   console.log("Value:", value)
}
myFunction3(myCallBack3); //Value: 123

function sumCb(a, b) {
   return a+b;
};
function subCb(a, b) {
   return a-b;
};
function multiCb(a, b) {
   return a*b;
};
function divCb(a, b) {
   return a/b;
};
function caculate(a, b, cb) {
   return cb(a, b);
}
console.log(caculate(1, 2, sumCb)) // Output: 3
console.log(caculate(1, 2, subCb)) // Output: -1
console.log(caculate(1, 2, multiCb)) // Output: 2
console.log(caculate(3, 1, divCb)) // Output: 3
