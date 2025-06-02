var users = [
   {
      id: 1,
      name: "User A"
   },
   {
      id: 2,
      name: "User B"
   },
   {
      id: 3,
      name: "User C"
   },
];

var comments = [
   {
      id: 1,
      user_id: 1,
      content: "Hello (from A)"
   },
   {
      id: 2,
      user_id: 2,
      content: "Hi (from B)"
   },
   {
      id: 3,
      user_id: 1,
      content: "A love Javascript (from A)"
   },
];

//Cách bươc để hiện các dòng comment (user: comment)
//1. Lấy Comments
//2. Từ comments lấy ra user_id,
//3. Từ user_id lấy ra user tương ứng
function getComments(){
   return new Promise(function(resolve){
      resolve(comments);
   });
}

getComments()
   .then(function(comments){
      var userIds = comments.map(function(comment){
         return comment.user_id;
      });
      console.log(userIds);
   })
//(3) [1, 2, 3]
// 0: 1
// 1: 2
// 2: 3
// length: 3
// [[Prototype]]: Array(0)
