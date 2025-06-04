//Optional chaining (?.)
//Optional chaining with Methods
const obj = {
   getName(value){
      console.log(value);
   }
}
obj.getName?.('Hello world');
//Hello world
obj.getAge?.(18);
//(Not result, vì không có phương thức getAge())
