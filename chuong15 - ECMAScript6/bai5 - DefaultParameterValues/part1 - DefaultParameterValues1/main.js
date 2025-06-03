// Default parameter values
function logger3(log){
   if (typeof log === 'undefined'){
      log = '(No value)';
   }
   console.log(log);
}
logger3('Hello');
//Hello
logger3(123);
//123
logger3(true);
//true
logger3(['A','B','C']);
//(3) ['A', 'B', 'C']
logger3({
   nameCourse: 'Javascript',
   isSuccess: false
})
//{nameCourse: 'Javascript', isSuccess: false}
logger3(undefined)
//(No value)