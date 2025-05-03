//Vòng lặp do/while - Lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng
var j=0;
do{
   j++
   console.log("Hello World", j);
} while(j<=5);

var i=0;
do{
   i++
   console.log("Hi Javascript", i);
} while(i<0);

var k=0;
var isSucess = false;
do{
   k++;
   console.log("Nap the lan", k);

   // if (true){
   if (false){
      isSucess = true;
   }
} while(!isSucess && k < 3);
