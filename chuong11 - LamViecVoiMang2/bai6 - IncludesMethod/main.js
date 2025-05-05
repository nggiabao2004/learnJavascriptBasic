//includes() method
console.log(Number.prototype.includes); //undefined

//String include() method
var title = "Responsive web design";
console.log(title.includes("Responsive")); //True
console.log(title.includes("app")); //False
console.log(title.includes("responsive")); //False

var title = "Responsive web design";
console.log(title.includes("Responsive", 0)); //True
console.log(title.includes("Responsive", 1)); //False, vì vị trí số 1 là bắt đầu từ 2 trong "Responsive"
var title = "Responsive web design";

//Array include() method
var courses = ['Javascript', 'Java', 'Python'];
console.log(courses.includes('Java')); //True
console.log(courses.includes('Dart')); //False
console.log(courses.includes('Javascript', 0)); //True
console.log(courses.includes('Javascript', 1)); //False, vì 'Javascript' nằm ở vị trí mảng là 0
console.log(courses.includes('Javascript', -1)); //False
console.log(courses.includes('Javascript', -3)); //True

var cars = ['Rolls-Royce', 'Mercedes', 'Lexus', 'BMW', 'Audi'];
function checkCar1(cars) {
   return cars.includes('Mercedes', 2);
}
console.log(checkCar1(cars)); //False, vì 'Mercedes' nằm ở vị trí số 1
function checkCar2(cars, position) {
   return cars.includes('Mercedes', position);
}
console.log(checkCar2(cars, 1)); //True
