//JSON
// Trong JavaScript, có thể chuyển đổi giữa Object và JSON bằng:
// - JSON.stringify(object): Chuyển object (Javascript) thành chuỗi JSON.
// - JSON.parse(jsonString): Chuyển chuỗi JSON thành object (Javascript).
console.log(JSON.stringify("Hello"));
//Hello (JSON)

console.log(JSON.stringify(true));
//true (JSON)

console.log(JSON.stringify(null));
//null (JSON)

console.log(JSON.stringify(["Javascript", "Java"]));
//["Javascript","Java"] (JSON)

console.log(JSON.stringify({"name": "Nguyen Van A","age": 20,"isStudent": true}));
//{"name": "Nguyen Van A","age": 20,"isStudent": true} (JSON)
