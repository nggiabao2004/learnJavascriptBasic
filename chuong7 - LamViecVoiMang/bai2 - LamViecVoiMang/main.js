//Làm việc với mảng (Array)
var list= ["Hello World",123,true,"Java","JavaScript","Python"];
var mang=new Array(
    "Developer",
    2000,
    false
 );

//1. to String (chuyển thành kí tự String)
console.log(list.toString()); //Hello World,123,true,Java,JavaScript,Python
console.log(typeof list.toString()); //String

//2. join (cho dấu giữa các giá trị của mảng)
console.log(list.join()); //Hello World,123,true,Java,JavaScript,Python
console.log(list.join('')); //Hello World123trueJavaJavaScriptPython
console.log(list.join('-')); //Hello World-123-true-Java-JavaScript-Python
console.log(list.join('; ')); //Hello World; 123; true; Java; JavaScript; Python

//3. Pop (Xóa đi phần tử cuối của mảng)
console.log(list.pop()); //Python
console.log(list);
/**0:"Hello World"
 *1:123
 *2:true
 *3:"Java"
 *4:"JavaScript"
 *length:5
 *(Do 'Python' bị Pop ở trên nên không còn trong mảng)*/
 //Trong trường hợp pop hết tất cả giá trị trong mảng thì sẽ cho ra kết quả: undefined

//4. Push (Thêm phần tử vào cuối mảng)
console.log(list.toString()); ////Hello World,123,true,Java,JavaScript
console.log(list.push('Dart')); //6 (đã thêm 'Dart')
console.log(list);
/**0:"Hello World"
 *1:123
 *2:true
 *3:"Java"
 *4:"JavaScript"
 *5:"Dart"
 *length:6 */

//5. Shift (Xóa đi phần tử đầu của mảng)
console.log(list.toString()); //Hello World,123,true,Java,JavaScript,Dart
console.log(list.shift()); //Hello World
console.log(list);
/**0:123
 *1:true
 *2:"Java"
 *3:"JavaScript"
 *4:"Dart"
 *length:5
 * (Do 'Hello World' bị shift ở trên nên không còn trong mảng) */
//Trong trường hợp shift hết tất cả giá trị trong mảng thì sẽ cho ra kết quả: undefined

//6. Unshift (Thêm phần tử vào đầu mảng)
console.log(list.toString()); //123,true,Java,JavaScript,Dart
console.log(list.unshift('Hi')); //6 (đã thêm 'Hi')
console.log(list);
/**0:"Hi"
 *1:123
 *2:true
 *3:"Java"
 *4:"JavaScript"
 *5:"Dart"
 *length:6 */

//7. splicing (Con trỏ tại vị trí mảng)
console.log(list.toString()); //Hi,123,true,Java,JavaScript,Dart
list.splice(1,2); //Trỏ và lấy 2 giá trị mảng từ vị trí 1, sau đó xóa
console.log(list);
/**0:"Hi"
 *1:"Java"
 *2:"JavaScript"
 *3:"Dart"
 *length:4 */
list.splice(1,0); //Trỏ và không lấy giá trị mảng từ vị trí 1
console.log(list);
/**0:"Hi"
 *1:"Java"
 *2:"JavaScript"
 *3:"Dart"
 *length:4 */
list.splice(-2); //Trỏ và xóa 2 giá trị mảng từ phải sang trái, sau đó xóa
console.log(list);
/**0:"Hi"
 *1:"Java"
 *length:2 */
list.splice(1,0,'everyone'); //Trỏ và thêm giá trị mảng 'everyone' tại vị trí 1
console.log(list);
/**0:"Hi"
 *1:"everyone"
 *2:"Java"
 *length:3 */
 list.splice(1,2,false); //Trỏ và xóa 2 giá trị mảng từ vị trí số 1, thay giá trị mảng (false) vào vị trí đó
 console.log(list);
/**0:"Hi"
 *1: false
 *length:2 */
 list.splice(1,1,true); //Trỏ và xóa 1 giá trị mảng từ vị trí số 1, thay giá trị mảng (true) vào vị trí đó
 console.log(list);
 /**0:"Hi"
 *1: true
 *length:2 */

//8. concat (Gộp mảng)
console.log(list.toString()); //Hi,true 
var mang=new Array(
   "Developer",
   2000,
   true //Concat cho phép hiển thị các giá trị trùng nhau ở 2 mảng
);
console.log(list.concat(mang));
/**0:"Hi"
 *1: true
 *2: "Developer"
 *3: 2000
 *4. true
 *length:5 */

//9. Slicing (Cắt và lấy giá trị)
console.log(mang.toString()); //Developer,2000,true
console.log(mang.slice(1, 2)); //Trỏ tại vị trí số 1
/**0:2000
 *length:1 */
console.log(mang.slice(1, 3)); //Trỏ tại vị trí số 1
/**0:2000
 * 1:true
 *length:2 */
console.log(mang.slice(1)); //Trỏ tại vị trí số 1
/**0:2000
 * 1:true
 *length:2 */
console.log(mang.slice(0)); //Trỏ tại vị trí số 0
/**0:"Developer"
 * 1:2000
 * 2:true
 *length:3 */
console.log(mang.slice(-1)); //Trỏ tại ví trí bắt đầu từ phải sang trái
/**0:true
 *length:1 */
console.log(mang.slice(-3,-1)); //Trỏ tại ví trí bắt đầu từ phải sang trái
/**0:"Developer"
 * 1:2000
 *length:2 */

//10. Split (Tách các từ trong văn bản thành các phần tử trong mảng)
var VanBan = "Hello World. Hi Javascript";
console.log(VanBan.split("."));
/**['Hello World', ' Hi Javascript']
 * 0:"Hello World"
 * 1:" Hi Javascript"
 * length:2 */
console.log(VanBan.split(" "));
/**['Hello', 'World.', 'Hi', 'Javascript']
 * 0:"Hello"
 * 1:"World."
 * 2:"Hi"
 * 3:"Javascript"
 * length:4 */
