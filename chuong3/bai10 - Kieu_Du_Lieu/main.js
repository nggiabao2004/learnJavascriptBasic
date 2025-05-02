/**Kieu du lieu
 * 1. Du lieu Nguyen thuy (Primitive Data):
 * - Number: var a= 1.5;
 * - String: var b= "Hello";
 * - Boolean: var isSuccess= True;
 * - Undefined: var age;
 * - Null: var isNull= null;
 * - Symbol: 
 * 2. Du lieu Phuc tap (Complex Data):
 * - Function
 * - Object
 */

//Number
var a=1;
a=2.5;
console.log(a); //2

//String
var b= "Hello \'Friends\'";
console.log(b);

//boolean
var isSuccess= 3>2;
console.log(isSuccess);

//Undefined
var age;
console.log(age);

//Null
var isNull= null;
console.log(isNull);

//Symbol
var id1= Symbol('id');
var id2= Symbol('id');
console.log(id1 == id2);

//Function
var myFunction1= function(){
    alert('Hello World');
}
myFunction1();

//Object
var myObject={
    name: "My Name",
    age: 18,

    myFunction2: function(){
        console.log("myFunction2")
    }
};
console.log('myObject',myObject)

//Array
var myArray=["Java","Python","JS"];
console.log(myArray)

//TypeOf
var c= 3;
console.log(typeof c);
var isNull= null;
console.log(typeof isNull);//Random answer, Not sure
