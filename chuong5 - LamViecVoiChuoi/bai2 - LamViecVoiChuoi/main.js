//Làm việc với String: Chuỗi
var message= "Hi everyone, welcome to JS";
var message1= "Hi everyone, i'm JS. Welcome to JS";
var message2= "  Hi everyone, welcome to  JS ";

//1. Length
console.log(message.length); //26

//2. Find Index
//Câu lệnh bắt đầu đếm từ vị trí đầu, số 0
console.log(message.indexOf('JS')); //24: từ vị trí "J"
//Có phân biệt được chữ hoa và chữ thường
console.log(message.indexOf('js')); //-1:  không tìm thấy
console.log(message.indexOf('hello')); //-1:  không tìm thấy
//Nếu không tìm được sẽ ra kết quả -1

console.log(message1.indexOf('JS')); //17, lấy từ vị trí "j" của "JS" đầu tiên
console.log(message1.indexOf('JS',20)); //32, lấy từ vị trí "j" của "JS" thứ 2
//Nếu muốn đếm vị trí từ "JS" cuối cùng trong chuỗi thì dùng "lastIndexOf"
console.log(message1.lastIndexOf('JS')); //32, lấy từ vị trí "j" của "JS" cuối cùng trong chuỗi

//Search: 
console.log(message1.search('JS')); //17, lấy từ vị trí "j" của "JS" đầu tiên
//Search Chỉ tìm được trong chuỗi đầu tiên, không tìm kiếm từ vị trí chỉ định như indexOf('JS',20)
//Search hỗ trợ cho biểu thức chính quy

//3. Cut String
console.log(message.slice(0,11)); //Hi everyone
console.log(message.slice(12)); // welcome to JS
console.log(message.slice(12,)); // welcome to JS
console.log(message.slice(0,-15)); //Hi everyone
console.log(message.slice(0)); //Hi everyone, welcome to JS
//với số âm thì sẽ đếm vị trí chuỗi từ phải sang trái, bắt đầu từ -1
console.log(message.slice(-3,-1)); //JS

//4. Replace
console.log(message.replace('JS','JavaScript')); //Hi everyone, welcome to JavaScript
console.log(message1.replace('JS','JavaScript')); //Hi everyone, i'm JavaScript. Welcome to JS
//Để replace hết từ 'JS' sang 'JavaScript', ta dùng biểu thức chính quy
console.log(message1.replace(/JS/g,'JavaScript')); //Hi everyone, i'm JavaScript. Welcome to JavaScript

//5. Convert to UPPERCASE (biến chữ viết hoa hết tất cả các kí tự chữ)
console.log(message.toUpperCase()); //HI EVERYONE, WELCOME TO JS

//6. Convert to LOWERCASE (biến chữ viết thường hết tất cả các kí tự chữ)
console.log(message.toLowerCase()); //hi everyone, welcome to js

//7. Trim
console.log(message2.length); //30, do có space (khoảng trắng) thừa ở cả 2 đầu
console.log(message2.trim()); //Hi everyone, welcome to  JS
console.log(message2.trim().length); //27
//Chỉ xóa space (khoảng trắng) ở 2 đầu, không xóa được space thừa ở giữa chuỗi

//8. Split
console.log(message.split(',')); //Tạo ra mảng: ['Hi everyone', ' welcome to JS']
var languages= 'Java, Python, JavaScript';
console.log(languages.split(',')); //Tạo ra mảng: ['Java', ' Python', ' JavaScript']
var javascript= 'JavaScript';
console.log(javascript.split('')); //Tạo ra mảng: ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']

//9. Get a character by Index
console.log(message.charAt(10)) //e (String)
console.log(message.charAt(12)) //(space) (String)
console.log(typeof message.charAt(12)) //String
//Trường hợp không thấy
console.log(message.charAt(30)) //(space) (String)
console.log(typeof message.charAt(30)) //String
//Ngoài ra còn có thể dùng mảng, bắt đầu từ số 0 và đi từ trái sang phải
console.log(message[10]); //e
console.log(message[12]); //(space) (String)
console.log(message[30]); //(undefined) Không có
console.log(typeof message[30]); //undefined: Không có
