//Toan tu ++ va -- (Prefix & Postfix)
var a=5;
console.log('a',a);
console.log('a++:',a++); //print:5; a=6
console.log('a:',a); //print:6; a=6

var b=5
console.log('b:',b)
console.log('++b:',++b);//print:6; a=6
console.log('b:',b)

var c=5;
var num= ++c *2- c-- *2;
//Ap dung quy tac toan logic: Tinh trong ngoac -> Nhan, chia -> Cong, tru
console.log('num:',num)