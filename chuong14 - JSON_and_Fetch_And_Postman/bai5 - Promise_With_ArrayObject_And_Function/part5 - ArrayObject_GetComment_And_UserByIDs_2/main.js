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

function getUserByIDs(userIDs){
   return new Promise(function(resolve){
      var result = users.filter(function(user){
         return userIDs.includes(user.id);
      });
      resolve(result);
   });
}

getComments()
   .then(function(comments){
      var userIDs = comments.map(function(comment){
         return comment.user_id;
      });

      return getUserByIDs(userIDs)
         .then(function(users){
            return {
               users:users,
               comments:comments
            };
         }
      );
   })
   .then(function(data){
      console.log(data)
   })
//{users: Array(3), comments: Array(3)}
//    comments: Array(3)
//    0:{id: 1, user_id: 1, content: 'Hello (from A)'}
//    1:{id: 2, user_id: 2, content: 'Hi (from B)'}
//    2:{id: 3, user_id: 1, content: 'A love Javascript (from A)'}
//       length: 3
//       [[Prototype]]: Array(0)
//    users: Array(3)
//       0: {id: 1, name: 'User A'}
//       1: {id: 2, name: 'User B'}
//       2: {id: 3, name: 'User C'}
//       length: 3
//       [[Prototype]]: Array(0)
//    [[Prototype]]: Object
