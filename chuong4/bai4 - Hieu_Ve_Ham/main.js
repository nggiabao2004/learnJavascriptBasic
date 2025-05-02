//Khi function trùng tên?
function showMessage(){
    console.log('Message 1');
}
function showMessage(){
    console.log('Message 2');
}
showMessage(); //Message 2
//-> Bị ghi đè showMessage() trước đó
//-> Không nên tạo hàm trùng tên trước đó

//Khai báo biến trong hàm?
function showMessage1(){
    var hi= 'Hello World';
    console.log(hi);
}
showMessage1(); //Hello World
/**console.log(hi); -> ERROR,
 * do biến 'hi' chỉ hoạt động trong hàm chứa biến đã tạo trong đó*/
//-> Được, nhưng chỉ áp dụng trong hàm (private)

//Định nghĩa hàm trong hàm?
function showMessageCha(){
    function showMessageCon(){
        var num= 123;
        console.log(num);
    }
    showMessageCon();
}
showMessageCha(); //123
/**showMessageCon(); -> ERROR,
 * do hàm showMessageCon chỉ hoạt động trong hàm showMessageCha đã tạo trong đó*/
//-> Được, nhưng chỉ áp dụng trong hàm (private)

