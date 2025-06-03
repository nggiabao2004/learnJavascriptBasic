// Arrow Function
//Triển khai Function bình thường
function logger1(log){
   console.log(log);
};
logger1('message1');
//message1

//Triển khai function dạng biến
const logger2 = function(log){
   console.log(log);
};
logger2('message2');
//message2

//Triển khai Arrow Function
const logger3 = (log) => {
   console.log(log);
};
logger3('message3');
//message3

const logger4 = (log) => console.log(log);
logger4('message4');
//message4

const logger5 = log => console.log(log);
logger5('message5');
//message5
