//Số và làm việc với số
//1. Tạo giá trị number
var age= 18;
var piNum= 3.14;
console.log(age); //18
console.log(piNum); //3.14

var otherNumber= new Number(2);
console.log(otherNumber); //2
console.log(typeof otherNumber); //Object

var result= 20/'ABC';
console.log(result); //NaN (Không hợp lệ)
console.log(typeof result); //Number

//2. Làm việc với Number
//- To String
var age= 18;
console.log(age.toString()) //18
console.log(typeof age.toString()) //String

var piNum= 3.14;
var myString= piNum.toString();
console.log(myString); //3.14
console.log(typeof myString);
//- To Fixed
var piNum= 3.14;
console.log(piNum.toFixed()); //3
console.log(typeof piNum.toFixed()); //String

var dtb= 6.5;
console.log(dtb.toFixed()) //7

var pi= 3.1415;
console.log(pi.toFixed(3)) //3.142
console.log(pi.toFixed(2)) //3.14

//Xác định isNumber dựa vào hàm
function isNumber(value){
    return typeof value === 'number' && !isNaN(value);
}
console.log(isNumber(999)); // true
console.log(isNumber('abc')); // false
console.log(isNumber('100')); // false
console.log(isNumber(NaN)); // false
console.log(isNumber(100 / 'abc')); // false

