//Date
var date= new Date();
console.log(date); //Fri Mar 07 2025 21:36:29 GMT+0700 (Indochina Time)
console.log(typeof date); //Object

var date= Date();
console.log(date); //Fri Mar 07 2025 21:36:29 GMT+0700 (Indochina Time)
console.log(typeof date); //String

var date= new Date();
console.log(date.getFullYear()); //2025
console.log(date.getMonth()); //2 (Tháng 3)
//Định dạng month là từ 0-11 cho 12 tháng, vì vậy ta phải +1 vào month
console.log(date.getMonth()+1); //3 (Tháng 3)
console.log(date.getDate()); //7
console.log(date.getHours()); //21
console.log(date.getMinutes()); //42
console.log(date.getSeconds()); //26

var day= date.getDate();
var month= date.getMonth()+ 1;
var year= date.getFullYear();
console.log(`${day}-${month}-${year}`); //7-3-2025

function getNextYear(){
    return new Date().getFullYear()+1;
}
console.log(getNextYear()); //2026
