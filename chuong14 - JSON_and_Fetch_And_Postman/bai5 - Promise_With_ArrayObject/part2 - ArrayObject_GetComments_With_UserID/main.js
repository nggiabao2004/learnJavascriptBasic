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
      user_id: 3,
      content: "Comment C"
   },
];

//1. Lấy Comments
//2. Từ comments lấy ra user_id,
//    từ user_id lấy ra user tương ứng

//Fake API
function getComments(){
   return new Promise(function(resolve){
      setTimeout(function(){
         resolve(comments);
      }, 2000);
   });
}

getComments()
   .then(function(comments){
      var userIds = comments.map(function(comment){
         return comment.user_id;
      });

      console.log(userIds);
   })

//(3) [{…}, {…}, {…}]
// 0:{id: 1, user_id: 1, content: 'Comment A'}
// 1:{id: 2, user_id: 2, content: 'Comment B'}
// 2:{id: 3, user_id: 3, content: 'Comment C'}
// length:3
// [[Prototype]]:Array(0)

//(3) [1, 2, 3]
// 0: 1
// 1: 2
// 2: 3
// length: 3
// [[Prototype]]: Array(0)
