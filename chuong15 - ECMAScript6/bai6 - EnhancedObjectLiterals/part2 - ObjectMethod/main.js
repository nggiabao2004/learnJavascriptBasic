// Enhanced object literals
// Định nghĩa method cho object

//Cách thông thường
var name1 = 'Javascript';
var price1 = 120;
var course1 = {
   name1,
   price1,
   getName: function(){
      return name1;
   }
};
console.log(course1);
//{name: 'Javascript', price: 120}
console.log(course1.getName());
//Javascript

//Cách viết tắt function trong method
var name2 = 'Java';
var price2 = 150;
var course2 = {
   name2,
   price2,
   getName(){
      return name2;
   }
};
console.log(course2);
//{name2: 'Java', price2: 150}
console.log(course2.getName());
//Java
