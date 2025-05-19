//Get element methods: ID
//Mỗi trang chỉ có 1 ID duy nhất để tìm và lấy (GET) bằng ID
var headingNode1 = document.getElementById('heading');
console.log(headingNode1);
// <h1 id="heading">JavaScript1</h1>

var headingNode2 = document.getElementById('headingJavascript');
console.log(headingNode2);
//null

console.log({
   element: headingNode1
});
//{element: h1#heading}
// element: h1#heading
// [[Prototype]]: Object

console.log({
   element: headingNode2
});
//{element: null}
// element: null
// [[Prototype]]: Object
