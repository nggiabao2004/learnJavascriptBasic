//Array Map Method
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

var newCourses = courses.map(function courseHandler(course){
   console.log(course);
});
console.log(newCourses);
//(6) [undefined, undefined, undefined, undefined, undefined, undefined]

var newCourses = courses.map(function courseHandler(course){
   return course;
});
console.log(newCourses);
// (6) [{…}, {…}, {…}, {…}, {…}, {…}]
// 0: {id: 1, name: 'Javascript', coin: 250}
// 1: {id: 2, name: 'HTML, CSS', coin: 0}
// 2: {id: 3, name: 'Ruby', coin: 0}
// 3: {id: 4, name: 'PHP', coin: 400}
// 4: {id: 5, name: 'ReactJS', coin: 500}
// 5: {id: 6, name: 'Ruby', coin: 10}

var newCourses = courses.map(function courseHandler(course){
   return course.name;
});
console.log(newCourses);
// (6) ['Javascript', 'HTML, CSS', 'Ruby', 'PHP', 'ReactJS', 'Ruby']
// 0: "Javascript"
// 1: "HTML, CSS"
// 2: "Ruby"
// 3: "PHP"
// 4: "ReactJS"
// 5: "Ruby"

var newCourses = courses.map(function courseHandler(course){
   return {
      id: course.id,
      name: `Khoa hoc: ${course.name}`,
      coinText: `Gia: ${course.coin}`
   }
});
console.log(newCourses);
// (6) [{…}, {…}, {…}, {…}, {…}, {…}]
// 0: {id: 1, name: 'Khoa hoc: Javascript', coinText: 'Gia: 250'}
// 1: {id: 2, name: 'Khoa hoc: HTML, CSS', coinText: 'Gia: 0'}
// 2: {id: 3, name: 'Khoa hoc: Ruby', coinText: 'Gia: 0'}
// 3: {id: 4, name: 'Khoa hoc: PHP', coinText: 'Gia: 400'}
// 4: {id: 5, name: 'Khoa hoc: ReactJS', coinText: 'Gia: 500'}
// 5: {id: 6, name: 'Khoa hoc: Ruby', coinText: 'Gia: 10'}

var newCourses = courses.map(function courseHandler(course, originArray){
   return {
      id: course.id,
      name: `Khoa hoc: ${course.name}`,
      coinText: `Gia: ${course.coin}`,
      originArray: courses,
   }
});
console.log(newCourses);
// (6) [{…}, {…}, {…}, {…}, {…}, {…}]
// 0: {id: 1, name: 'Khoa hoc: Javascript', coinText: 'Gia: 250', originArray: Array(6)}
// 1: {id: 2, name: 'Khoa hoc: HTML, CSS', coinText: 'Gia: 0', originArray: Array(6)}
// 2: {id: 3, name: 'Khoa hoc: Ruby', coinText: 'Gia: 0', originArray: Array(6)}
// 3: {id: 4, name: 'Khoa hoc: PHP', coinText: 'Gia: 400', originArray: Array(6)}
// 4: {id: 5, name: 'Khoa hoc: ReactJS', coinText: 'Gia: 500', originArray: Array(6)}
// 5: {id: 6, name: 'Khoa hoc: Ruby', coinText: 'Gia: 10', originArray: Array(6)}

var newCourses = courses.map(function courseHandler(course){
   return `<h2>${course.name}</h2>`;
});
console.log(newCourses.join('; '));
//<h2>Javascript</h2>; <h2>HTML, CSS</h2>; <h2>Ruby</h2>; <h2>PHP</h2>; <h2>ReactJS</h2>; <h2>Ruby</h2>
