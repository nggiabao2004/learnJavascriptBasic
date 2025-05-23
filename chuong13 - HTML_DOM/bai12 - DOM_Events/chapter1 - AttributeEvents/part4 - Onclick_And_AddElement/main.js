//DOM Events
//4. onclick and add element
//Tạo 1 thẻ element:
// <h1 onclick="console.log(this)">
//    <span>DOM Events 1</span>
// </h1>
//Mở live server và trình duyệt, nhấn thử vào chữ "DOM Events", vào tab console (trong inspect) để xem kết quả
// <h1 onclick="console.log(this)">
//    <span>DOM Events 1</span>
// </h1>

//Tạo 1 thẻ element:
// <h1 onclick="console.log(this)">
//    //<span onclick="console.log(this)">DOM Events 2</span>
// </h1>
//Mở live server và trình duyệt, nhấn thử vào chữ "DOM Events", vào tab console (trong inspect) để xem kết quả
//<span onclick="console.log(this)">DOM Events 2</span>
// <h1 onclick="console.log(this)">
//    <span onclick="console.log(this)">DOM Events 2</span>
// </h1>
//Như vậy, thẻ <span> xuất hiện trước rồi thẻ <h1> xuất hiện sau
