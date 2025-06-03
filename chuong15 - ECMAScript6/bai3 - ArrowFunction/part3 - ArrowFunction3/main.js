//Function với Object chứa thuộc tính và phương thức
const course1 = {
   name: 'Javascript basic',
   getName: function(){
      return this;
   }
};
console.log(course1.getName());
// {name: 'Javascript basic', getName: ƒ}
// getName: ƒ ()
// name: "Javascript basic"
// [[Prototype]]: Object

// Arrow Function áp dụng với Object chứa thuộc tính và phương thức sẽ trả về undefined
const course2 = {
   name: 'Javascript basic',
   getName: () => {
      return this;
   }
};
console.log(course2.getName());
//undefined

// Arrow Function không áp dụng với Constructor
const Course3 = function(name, price){
   this.name = name;
   this.price = price;
}
const jsCourse = new Course3('Javascript',100);
console.log(jsCourse);
//Course3 {name: 'Javascript', price: 100}
// name: "Javascript"
// price: 100
// [[Prototype]]: Object
