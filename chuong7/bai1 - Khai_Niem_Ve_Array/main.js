//Mang (Array)
//1. Tạo mảng
var language1= "Java";
var language2= "JavaScript";
var language3= "Python";
console.log(language1); //Java
console.log(language2); //JavaScript
console.log(language3); //Python

//Thay vì tạo nhiều biến thì nên dùng mảng
var languages=["Java","JavaScript","Python"];
console.log(languages);
/**0:"Java"
 *1:"JavaScript"
 *2:"Python"
 *length:3
 */

var list= new Array(
    "Hello World",
    123,
    true
);
console.log(list);
/**0:"Hello World"
 *1:123
 *2:true
 *length:3 
 */
console.log(typeof list); //Object
console.log(typeof []); //Object
//Cách kiểm tra xem có phải là mảng không thì ta dùng: Array.isArray
console.log(Array.isArray(list)); //true: là mảng
console.log(Array.isArray({})); //false: là 1 Object
console.log(Array.isArray(new Array(10,false,'abc'))); //true: là mảng

//2. Truy xuất mảng
//- length: độ dài của mảng
var list= new Array(
    "Hello World",
    123,
    true
);
console.log(list.length); //3

//- lấy phần tử theo Index
var list= new Array(
    "Hello World",
    123,
    true
);
console.log(list[1]); //123 (ở vị trí số 1)