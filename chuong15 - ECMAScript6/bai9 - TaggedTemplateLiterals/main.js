//Tagged template literals
function highlight1(...rest){
   console.log(rest);
}
var course1 = "Javascript";
var tutor1 = "Mrs.JS";
var weekday1 = "Thursday";
highlight1`Learn ${course1} with ${tutor1} on ${weekday1}!`;
// (4) [Array(4), 'Javascript', 'Mrs.JS', 'Thursday']
// 0: (4) ['Learn ', ' with ', ' on ', '!', raw: Array(4)]
// 1: "Javascript"
// 2: "Mrs.JS"
// 3: "Thursday"
// length: 4
// [[Prototype]]: Array(0)

function highlight2([first, ...strings], ...value){
   console.log('First word:', first);
   console.log('Strings:', strings);
   console.log('Values:', value);
}
var course2 = "Java";
var tutor2 = "Mr.Java";
var weekday2 = "Monday";
highlight2`Learn ${course2} with ${tutor2} on ${weekday2}!`;
// First word: Learn 
// Strings: (3) [' with ', ' on ', '!']
// Values: (3) ['Java', 'Mr.Java', 'Monday']
// (Learn <span>Java</span> with <span>Mr.Java</span> on <span>Monday</span>!)

//Tagged template literals with Array Reduce Methods
function highlight3([first, ...strings], ...value){
   return value.reduce(
      (acc, curr) => [...acc, `<span>${curr}</span>`, strings.shift()],[first]
   ).join('');
}
var course3 = "Python";
var tutor3 = "Miss.Python";
var weekday3 = "Tuesday";
const html = highlight3`Learn ${course3} with ${tutor3} on ${weekday3}!`;
console.log(html);
//Learn <span>Python</span> with <span>Miss.Python</span> on <span>Tuesday</span>!
