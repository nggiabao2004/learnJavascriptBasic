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
      content: "Comment A"
   },
   {
      id: 2,
      user_id: 2,
      content: "Comment B"
   },
   {
      id: 3,
      user_id: 1,
      content: "Comment C"
   },
];

//1. Lấy Comments
//2. Từ comments lấy ra user_id,
//    từ user_id lấy ra user tương ứng

//Fake API
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
      var commentBlock = document.getElementById('comment-box');
      var html = '';
      data.comments.forEach(function(comment){
         var user = data.users.find(function(user){
            return user.id === comment.user_id;
         });
         html += `<li>${user.name}: ${comment.content}</li>`;
      });
      commentBlock.innerHTML = html;
         
      });
// (Mở live server và trình duyệt để xem kết quả HTML)
// User A: Comment A
// User B: Comment B
// User A: Comment C
