// Default parameter values
function logger2(log, isAlert){
   if (isAlert){
      return alert(`Alert announce: ${log}`);
   }
   console.log(log);
}
logger2('Hello');
//Hello
logger2(123, true)
//123 (và hiện thông báo Alert với dòng chữ: "Alert announce: 123")
