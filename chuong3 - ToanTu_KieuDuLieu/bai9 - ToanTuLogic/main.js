/**Toan tu Logic
 * 1. && and
 * 2. || or
 * 3. ! Not
 */
var a=1;
var b=2;
var c=3;
//&& : ca 2 phai dung moi thanh cong
if (a>c && c>b){
    console.log("true")
}else{
    console.log("false")
}
// || : chi can 1 trong 2 la thanh cong
if (b>c || b>a){
    console.log("true")
}else{
    console.log("false")
}
// ! : phu dinh lai cau tra loi
if (!(c>b)){
    console.log("true")
}else{
    console.log("false")
}