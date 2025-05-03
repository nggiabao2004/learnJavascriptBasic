//Function 2:
//1. Decleration function:
function showMessage1(){
    console.log("Hello World 1")
}
showMessage1();

//2. Expression function
var showMessage2 = function showMessage2() {
    console.log("Hello World 2");
}
showMessage2();

setTimeout(function showMessage3() {
    console.log("Hello World 3");
}, 1000);

var showMessage4 = {
    myFunction: function(showMessage4) {
        console.log("Hello World 4")
    }
};
showMessage4.myFunction();

//3. Arrow function
var showMessage5 = () => {
    console.log("Hello World 5");
};
showMessage5();

//Hosting: Chạy trước khi tạo và gọi hàm
showAlert();
function showAlert(){
    console.log('Alert Hosting')
}
//Khong áp dụng được cho Expression function