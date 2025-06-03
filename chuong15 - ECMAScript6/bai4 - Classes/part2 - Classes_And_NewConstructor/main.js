// Classes
class Course{
   constructor(name, price){
      this.name= name;
      this.price= price;
   }

   getName(){
      return this.name;
   }

   run(){
      const isSuccess = false;
      if(false){
         isSuccess = true;
      }
   }
}
const javascriptCourse = new Course('Javascript', 100);
const javaCourse = new Course('Java', 90);
console.log(javascriptCourse);
// Course {name: 'Javascript', price: 100}
// getName: ƒ ()
// name: "Javascript"
// price: 100
// [[Prototype]]: Object
console.log(`Khóa học: ${javaCourse.name}`);
// Khóa học: Java
