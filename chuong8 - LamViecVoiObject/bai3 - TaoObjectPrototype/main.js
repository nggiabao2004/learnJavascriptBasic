//Object Prototype - Basic
//1. Prototype là Nguyên mẫu
function User(firstName, lastName, avatar){
    this.firstName= firstName;
    this.lastName= lastName;
    this.avatar= avatar;

    this.getName= function () {
        return `${this.firstName}` + ' ' +  `${this.lastName}`
    }
}
var user1= new User('Son','Dang','Avatar1');
console.log(user1); //{firstName: 'Son', lastName: 'Dang', avatar: 'Avatar1', getName: ƒ}
var user2= new User('Tan','Dang','Avatar2');
console.log(user2); //{firstName: 'Tan', lastName: 'Dang', avatar: 'Avatar2', getName: ƒ}

//Giả sử thêm thuộc tính className vào
User.className= "F8";
console.log(user1.className); //undefined, không tìm thấy
console.log(user1); //{firstName: 'Son', lastName: 'Dang', avatar: 'Avatar1', getName: ƒ}
//Để giải quyết tình trạng trên, ta sẽ thêm prototype vào
User.prototype.className= "F8";
console.log(user1.className); //F8 (String)
console.log(user2.className); //F8 (String)
console.log(user2); //{firstName: 'Tan', lastName: 'Dang', avatar: 'Avatar2', getName: ƒ}
/**avatar:"Avatar2"
 *firstName:"Tan"
 *getName:ƒ ()
 *lastName:"Dang"
 *[[Prototype]]:Object
 *className:"F8"
 *constructor:ƒ User(firstName, lastName, avatar)
 *[[Prototype]]:Object
*/

User.prototype.getClassName= function () {
    return this.className;
}
console.log(user2.getClassName()); //F8

//2. Prototype dùng để làm gì?
// Prototype cho phép chúng ta thêm các thuộc tính và phương thức vào tất cả các đối tượng cùng kiểu.
// Điều này giúp tiết kiệm bộ nhớ và tăng hiệu suất vì các phương thức và thuộc tính được chia sẻ giữa các đối tượng.
function Animal(name, species) {
    this.name = name;
    this.species = species;
}
Animal.prototype.getDetails = function() {
    return `${this.name} is a ${this.species}`;
};
var animal1 = new Animal('Lion', 'Wild');
var animal2 = new Animal('Dog', 'Domestic');
console.log(animal1.getDetails()); // Lion is a Wild
console.log(animal2.getDetails()); // Dog is a Domestic
// Bằng cách sử dụng prototype, chúng ta có thể thêm các phương thức và thuộc tính mà không cần thay đổi hàm tạo ban đầu.
