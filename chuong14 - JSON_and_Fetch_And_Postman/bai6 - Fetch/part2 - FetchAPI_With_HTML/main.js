//Fetch
// Fetch là một API JavaScript dùng để gửi yêu cầu HTTP (GET, POST, PUT, DELETE, ...)
//    tới server và nhận dữ liệu trả về (thường là JSON).
// Cú pháp cơ bản: fetch(url, options)
// fetch trả về một Promise, khi thành công sẽ trả về đối tượng Response.
// Để lấy dữ liệu JSON từ response, dùng response.json() (cũng trả về Promise).
// Ví dụ:
// fetch('https://api.example.com/data')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));
//Backend -> API -> Fetch -> JSON/XML -> JSON.parse -> Javascript types -> Render ra giao diện với HTML

//API
// API (Application Programming Interface) là giao diện lập trình ứng dụng,
//    cho phép các phần mềm giao tiếp với nhau.
// Trong web, API thường là các endpoint (địa chỉ URL) mà client (trình duyệt, ứng dụng)
//    gửi yêu cầu (request) để lấy hoặc gửi dữ liệu tới server.
// API giúp tách biệt giữa phần giao diện (frontend) và xử lý dữ liệu (backend),
//    giúp phát triển ứng dụng dễ dàng, linh hoạt hơn.
// Các kiểu API phổ biến: REST API, GraphQL, SOAP, ...
// Khi làm việc với JavaScript, thường sử dụng API để lấy dữ liệu từ server về (thường ở dạng JSON)
//    và hiển thị lên giao diện.

//vào trang web 'https://jsonplaceholder.typicode.com/posts' để copy API
var postAPI = 'https://jsonplaceholder.typicode.com/posts';
//Stream (hoặc response: phản hồi)
fetch(postAPI)
   .then(function(response){
      return response.json();
      //Đoạn này sẽ chuyển từ JSON sang Javascript (JSON.parse: JSON -> Javascript types)
   })
   .then(function(posts){
      var htmls = posts.map(function(post){
         return `<li>
            <h2>${post.id}: ${post.title}</h2>
            <p>${post.body}</p>
         </li>`
      })
      var new_htmls = htmls.join('');
      document.getElementById('post-block').innerHTML = new_htmls;
   })
   .catch(function(error){
      console.log(error);
   })
// (Mở live server và trình duyệt để xem kết quả trong tab Console (inspect))
