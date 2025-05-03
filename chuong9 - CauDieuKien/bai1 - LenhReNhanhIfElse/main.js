//If-Else
var age= 15
if (age>=18){
    console.log("Nguoi lon");
} else if (13<=age<18){
    console.log("Thieu nien"); //age=15
} else{
    console.log("Tre con");
}

function run(a) {
    if (a===3){
        return 1;
    } else if (a===5){
        return 2;
    } else if (a===15){
        return 3;
    } else{
        return "Khong hop le";
    }
}
console.log(run(3)); // 1
console.log(run(5)); // 2
console.log(run(15)); // 3
console.log(run(8)); // Khong hop le

var a=3;
var b=2;
if (a>b){
    console.log(a+" lon hon "+b); //3 lon hon 2   
} else if (a===b){
    console.log(a+" va " +b +" bang nhau");
} else{
    console.log(a+" be hon "+b);   
}
