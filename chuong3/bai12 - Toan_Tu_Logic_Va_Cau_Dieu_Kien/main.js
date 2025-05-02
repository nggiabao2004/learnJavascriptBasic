//Toán tử logical và câu lệnh điều kiện If
var a=1;
var b=2;
if (a<b){
    console.log('A<B');
}else{
    console.log('A>B')
}

var isResult= a>b;
if(isResult){
    console.log("true");
}else{
    console.log("false");
}

var isSuccess= a>b || a>0;
console.log(isSuccess); //true

var char1= 'A' && 'B' && 'C';
console.log(char1); //C

var char2= null && 'B' && 'C';
console.log(char2); //null

var char3= 'A' && 'B' && NaN && 'C';
if(char3){
    console.log(true);
}else{
    console.log(false);
}

var char4= 'A' || 'B' || 'C';
console.log(char4); //A

var char5= null || 'B' || 'C';
console.log(char5); //B

var char6= 'A' || undefined || 'C';
if(char6){
    console.log(true);
}else{
    console.log(false);
}
