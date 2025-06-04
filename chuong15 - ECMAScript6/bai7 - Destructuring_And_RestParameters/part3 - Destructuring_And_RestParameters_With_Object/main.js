//Destructuring and Rest
//Destructuring and Rest with Object

//1. Cách dùng Destructuring với Object
var course = {
   name: "Javascript",
   price: 1000
};
var {name, price}= course;
console.log(name, price);
//Javascript 1000

//2. Cách dùng Rest parameters với Object
var course = {
   name: "Javascript",
   price: 1000
};
var {name, ...rest}= course;
console.log(name);
//Javascript
console.log(rest);
//{price: 1000}
// price: 1000
// [[Prototype]]: Object

//3. Object lớn chứa Object nhỏ
var course = {
   name: "Javascript",
   price: 1000,
   children: {
      name: "ReactJS",
   }
};
var {name, children}= course;
console.log(name, children);
//Javascript {name: 'ReactJS'}

//Lấy giá trị của name thuộc 'Object children' trong 'Object course'
var {name, children: {name}}= course;
console.log(name);
//ReactJS
//(Giá trị của name thuộc 'Object children' ghi đè lên giá trị của name thuộc 'Object course)

//Để tránh trường hợp 2 name bị ghi đè, thì sẽ tạo 1 tên mới
var {name: parentName, children: {name}}= course;
console.log(parentName, name);
//Javascript ReactJS
var {name: parentName, children: {name: childName}}= course;
console.log(parentName, childName);
//Javascript ReactJS

//4. Tạo thêm thuộc tính trong Object
var course = {
   name: "Javascript",
   price: 1000,
   children: {
      name: "ReactJS",
   }
};
var {name, description = 'Default_Description'}= course;
console.log(name, description);
//Javascript Default_Description

//Nhưng nếu Object đó có thuộc tính rồi thì sẽ lấy thuộc tính trong Object
var course = {
   name: "Javascript",
   price: 1000,
   children: {
      name: "ReactJS",
   },
   description: 'Learn_Javascript',
};
var {name, description = 'Default_Description'}= course;
console.log(name, description);
//Javascript Learn_Javascript
