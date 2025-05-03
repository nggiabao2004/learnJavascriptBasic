//Object Constructor
function User(firstName, lastName, avatar){
    this.firstName= firstName;
    this.lastName= lastName;
    this.avatar= avatar;
}
var author= new User('Admin','Web','AdminAvatar');
var normalUser= new User('Normal_User','Comment','UserAvatar');
console.log(author); //{firstName: 'Admin', lastName: 'Web', avatar: 'AdminAvatar'}
/**avatar:"AdminAvatar"
 *firstName:"Admin"
 *lastName:"Web"
 *[[Prototype]]:Object
 *constructor:ƒ User(firstName, lastName, avatar)
 *[[Prototype]]:Object
 */
console.log(author.constructor);
/**ƒ User(firstName, lastName, avatar){
 *      this.firstName= firstName;
 *      this.lastName= lastName;
 *      this.avatar= avatar;
 *   }
 */
console.log(author.constructor === User); //true
console.log(normalUser); //{firstName: 'Normal_User', lastName: 'Comment', avatar: 'UserAvatar'}

author.tittle= 'Hello World';
console.log(author); //User {firstName: 'Admin', lastName: 'Web', avatar: 'AdminAvatar', tittle: 'Hello World'}
normalUser.comment= 'Developer';
console.log(normalUser); //User {firstName: 'Normal_User', lastName: 'Comment', avatar: 'UserAvatar', comment: 'Developer'}

function User(firstName, lastName, avatar){
    this.firstName= firstName;
    this.lastName= lastName;
    this.avatar= avatar;

    this.getName= function () {
        return `${this.firstName}` + ' ' +  `${this.lastName}`
    }
}
var author= new User('Admin','Web','AdminAvatar');
console.log(author.getName()); //Admin Web (firstName: 'Admin', lastName: 'Web')
var normalUser= {
    firstName: 'Normal_User',
    lastName: 'Comment',
    avatar: 'UserAvatar',

    getName: function () {
        return `${this.firstName}` + '-' +  `${this.lastName}`
    }
}
console.log(normalUser.getName()); //Normal_User-Comment (firstName: 'Normal_User', lastName: 'Comment')
