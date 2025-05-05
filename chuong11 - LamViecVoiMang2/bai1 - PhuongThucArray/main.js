//Array Methods: Phương thức Array
var courses = [
   {
      id: 1,
      name: 'Javascript',
      coin: 250
   },
   {
      id: 2,
      name: 'HTML, CSS',
      coin: 0
   },
   {
      id: 3,
      name: 'Ruby',
      coin: 0
   },
   {
      id: 4,
      name: 'PHP',
      coin: 400
   },
   {
      id: 5,
      name: 'ReactJS',
      coin: 500
   },
   {
      id: 6,
      name: 'Ruby',
      coin: 10
   },
]

//1. forEach()
courses.forEach(function(course){
   console.log(course);
}); //call back

//2. every()
var isFree = courses.every(function(course){
   return course.coin === 0;
});
console.log(isFree); //False

var isPay = courses.every(function(course){
   return course.coin >= 0;
});
console.log(isPay); //True

//3. some()
var isFree = courses.some(function(course){
   return course.coin === 0;
});
console.log(isFree); //True

//4. find()
var isRuby = courses.find(function(course){
   return course.name === "Ruby";
});
console.log(isRuby); //{id: 3, name: 'Ruby', coin: 0}

var isPython = courses.find(function(course){
   return course.name === "Python";
});
console.log(isPython); //undefined

//5. filter()
var isRuby = courses.filter(function(course){
   return course.name === "Ruby";
});
console.log(isRuby); //(2) [{…}, {…}]
//0:{id: 3, name: 'Ruby', coin: 0}
//1:{id: 6, name: 'Ruby', coin: 10}

const sports = [
   {
       name: 'Bóng rổ',
       like: 6
   },
   {
       name: 'Bơi lội',
       like: 5
   },
   {
       name: 'Bóng đá',
       like: 10
   },
];
function getMostFavoriteSport(sports){
   return sports.filter(function(sport){
       return sport.like >5;
   })
};
console.log(getMostFavoriteSport(sports)); //(2) [{…}, {…}]
//0: { name: 'Bóng rổ, like: 6 }
//1: { name: 'Bóng đá, like: 10 }]
