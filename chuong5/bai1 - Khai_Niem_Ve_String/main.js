//String: Chuỗi
//1. Tạo chuỗi:
//Có 2 cách tạo ra chuỗi:
var hi= 'Hello World';
console.log(hi);
var name= new String('Van A');
console.log(name);
//đôi lúc cách 2 tạo ra 1 object
console.log(typeof name);

//2. backflash (\):
var message1= 'Hi \'everyone1\'';
console.log(message1); //Hi 'everyone'
//hoặc có thể dùng khác dấu '' và ""
var message2= "Hi 'everyone2'";
console.log(message2); //Hi 'everyone'
var message3= "Day la backflash \\";
console.log(message3); //Day la backflash \

//3. length (độ dài):
var message4= "Hi everyone";
console.log(message4.length); //11

//4. Chú ý độ dài khi viết code:
//- 1 dòng đề xuất chỉ tối đa 80 kí tự thôi
var listCart="Thứ cần mua: "
    +"Táo, "+"Bưởi, "
    +"Cam,...";
console.log(listCart);

//5. Template String ES6:
var firstName= "Van A";
var lastName= "Nguyen";
console.log("Normal: Toi la: "+lastName+' '+firstName);
//Sử dụng ES6 khiến code gọn gàng và dễ kiểm tra hơn
console.log(`ES6: Toi la: ${lastName} ${firstName}`);
//Sử dụng ES6 có biến gán ${} sẽ xuất ra kiểu String
var age= 20; //20 (number)
console.log(`Tuoi: ${age}`); //20 (String)
