//Array Reduce Method- Part 3
/**Phương thức reduce có logic như thế nào?
 * var (biến) = (Array).reduce((callback), (initialValue)) => {
 *    return (callback) + (initialValue);
 * }, (Jump/ Giao thức) );
 */

const numbers = [1, 2, 3, 4, 5];
const result = numbers.reduce((total, number) => {
   return total + number; //cho var total=0; for number of numbers
}, 0);
console.log(result); //15

Array.prototype.reduce((callback, result) => {
   for (let i=0; i< this.length; i++){
      result = callback(result, this[i], i, this);
   }
   return result;
}, 0);
console.log(result); //15

Array.prototype.reduce((callback, result) => {
   for (let i=0; i< this.length; i++){
      result = callback(result, this[i], i, this);
   }
   return result;
}, 0);
const result2 = numbers.reduce((total, number) => {
   return total + number;
}, 10);
console.log(result2); //25

Array.prototype.reduce = function(callback, result) {
   let i=0;
   if (arguments.length < 2){
      i=1;
      result = this[0];
   }
   for (; i< this.length; i++){
      result = callback(result, this[i], i, this);
   }
   return result;
};
const result3 = numbers.reduce((total, number, index, array) => {
   console.log(total, number, index, array);
   return total + number;
}, 0);
// 0 1 0 (5) [1, 2, 3, 4, 5]
// 1 2 1 (5) [1, 2, 3, 4, 5]
// 3 3 2 (5) [1, 2, 3, 4, 5]
// 6 4 3 (5) [1, 2, 3, 4, 5]
// 10 5 4 (5) [1, 2, 3, 4, 5]
console.log(result3); // 15

const result4 = numbers.reduce((total, number, index, array) => {
   console.log(total, number, index, array);
   return total + number;
}, 10);
// 10 1 0 (5) [1, 2, 3, 4, 5]
// 11 2 1 (5) [1, 2, 3, 4, 5]
// 13 3 2 (5) [1, 2, 3, 4, 5]
// 16 4 3 (5) [1, 2, 3, 4, 5]
// 20 5 4 (5) [1, 2, 3, 4, 5]
console.log(result4); //25

var arr = [
   ['name', 'Tom Nguyễn'],
   ['age', 18],
];
function arrToObj(arr) {
   return arr.reduce(function(obj, item) {
      obj[item[0]] = item[1];
      return obj;
   }, {});
}
console.log(arrToObj(arr));
// { name: 'Tom Nguyễn', age: 18 }
