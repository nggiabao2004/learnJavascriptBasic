//Array Reduce Method- Part 1
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

var totalCoin=0;
for (var course of courses){
   totalCoin += course.coin;
}
console.log(totalCoin); //1160

//Biến lưu trữ
var i=0;
function coinHandler(accumulator, currentValue, currentIndex, originArray){
   i++;
   console.log(i); //1; 2; 3; 4; 5; 6
}
var totalCoin = courses.reduce(coinHandler, 0);

var i=0;
function coinHandler(accumulator, currentValue, currentIndex, originArray){
   i++;
   console.table({
      'Lượt chạy: ': i,
      'Biến tích trữ: ': accumulator
   });
   console.log(currentValue);
   return 100;
}
var totalCoin = courses.reduce(coinHandler, 0);
// (index): Value
// Lượt chạy:	1
// Biến tích trữ:	0
// {"id": 1,"name": "Javascript","coin": 250}
// (index): Value
// Lượt chạy:	2
// Biến tích trữ:	100
// {id: 2, name: 'HTML, CSS', coin: 0}
//...
// (index): Value
// Lượt chạy:	6
// Biến tích trữ:	1150
// {id: 6, name: 'Ruby', coin: 10}

// var i=0;
// function coinHandler(accumulator, currentValue, currentIndex, originArray){
//    i++;
//    return accumulator + currentValue.coin;
// }
// var totalCoin = courses.reduce(coinHandler, 0);
// console.log(totalCoin); //1160

var i=0;
function coinHandler(accumulator, currentValue, currentIndex, originArray){
   i++;
   var total= accumulator + currentValue.coin;
   console.table({
      'Lượt chạy: ': i,
      'Biến tích trữ: ': accumulator,
      'Giá khóa học: ': currentValue.coin,
      'Tích trữ được: ': total
   });
   return total;
}
var totalCoin = courses.reduce(coinHandler, 0);
// (index): Value
// Lượt chạy:	1
// Biến tích trữ:	0
// Giá khóa học: 250
// Tích trữ được:	250
// (index): Value
// Lượt chạy:	2
// Biến tích trữ:	100
// Giá khóa học: 0
// Tích trữ được:	250
//...
// (index): Value
// Lượt chạy:	6
// Biến tích trữ:	1150
// Giá khóa học:	10
// Tích trữ được:	1160
console.log(totalCoin); //1160

var totalCoin = courses.reduce((a, b) => a + b.coin, 0);
console.log(totalCoin); //1160


var sports = [
   {
       name: 'Bơi lội',
       gold: 11
   },
   {
       name: 'Boxing',
       gold: 3
   },
   {
       name: 'Đạp xe',
       gold: 4
   },
   {
       name: 'Đấu kiếm',
       gold: 5
   },
]
function getTotalGold (sports){
   let total = 0;
   for (var sport of sports){
       total += sport.gold;
   }
   return total;
}
console.log(getTotalGold(sports)) // Output: 23
