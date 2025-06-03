// Default parameter values
function logger3(log, type='log'){
   console[type](log);
}
logger3('Hello');
//Hello (hiển thị bình thường)
logger3('Hello', 'warn');
//Hello (hiển thị dạng warning)
logger3('Hello','error');
//Hello (hiển thị dạng error)
