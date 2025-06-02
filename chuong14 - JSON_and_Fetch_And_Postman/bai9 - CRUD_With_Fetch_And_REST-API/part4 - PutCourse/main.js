//Sử dụng Postman làm việc với REST API
//JSON server: API Server (Fake) / Mock API -> ok
//CRUD and REST API: 
// - Create(Tạo mới): POST
// - Read(Đọc/lấy dữ liệu): GET
// - Update(Cập nhật thông tin): PUT/PATCH
// - Delete(Xóa): DELETE
//Postman: test CRUD
//---
//node package manager (npm)
//Bước 1: Tạo 1 package với tên json-server
//Bước 2: Vào terminal của chính package vừa tạo (json-server),
//    hoặc có thể dùng cmd trong folder của chính windows là được
//Bước 3: Tải package.json bằng lệnh terminal: npm init
//Bước 4: Tải json-server bằng lệnh terminal: npm install json-server
//Bước 5: Tạo file db.json và soạn dưới dạng JSON
//Bước 6: Vào package.json và thêm vào dòng lệnh như sau:
//   "scripts": {
//     "start":"json-server --watch ./db.json", (dòng lệnh cần thêm vào)
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },
//Bước 7: Vào lại terminal của package json-server và gõ lệnh 'npm start' để chạy file db.json.
//    Sau đó, terminal sẽ trả kết quả và server sẽ chạy, có thể gõ thử trên thanh địa chỉ trình duyệt.
//    Ví dụ: Truy cập http://localhost:3000/courses; http://localhost:3000/courses/1;...
//Bước 8: Muốn tắt và thoát server trong terminal thì chỉ cần nhấn tổ hợp phím "Ctrl + C" là xong.

var listCoursesBlock = document.querySelector('#list-courses');
var courseAPI = "http://localhost:3000/courses"
function start(){
   //Lấy listCourse
   getCourses(function(courses){
      renderCourses(courses);
   });
   handleCreateForm();
   //hoặc có thể viết tắt thành getCourse(renderCourses);
}
//Bắt đầu chạy
start();

//Function CRUD (GET)
function getCourses(callback){
   fetch(courseAPI)
      .then(function(response){
         return response.json();
      })
      .then(callback)
}
//Function Print result
function renderCourses(courses){
   var listCoursesBlock = document.querySelector('#list-courses');
      var htmls = courses.map(function(course){
         return `
            <li class="course-item-${course.id}">
               <h3>${course.name}</h3>
               <p>${course.description}</p>
               <button onclick="handleDeleteCourse('${course.id}')">Delete Course</button>
               <button onclick="handleEditCourse('${course.id}', '${course.name}', '${course.description}')">Update Course</button>
            </li>
         `;
      });
   listCoursesBlock.innerHTML = htmls.join('');
}

//Function CRUD (POST)
function handleCreateForm(){
   var createBtn = document.querySelector('#create');
   createBtn.onclick = function(){
      var name = document.querySelector('input[name="name"]').value;
      var description = document.querySelector('input[name="description"]').value;
      
      var formData = {
         name: name,
         description: description
      };
      createNewCourse(formData, function(){
         getCourses(renderCourses);
      });
   }
}
//Function Create new Course
//(Tham khảo cách viết POST ở trang web:
//    https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch )
function createNewCourse(data, callback){
   var options = {
      method: 'POST',
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
   };
   fetch(courseAPI, options)
      .then(function(response){
         response.json();
      })
      .then(callback)
}

//Function CRUD (DELETE)
function handleDeleteCourse(id){
   var options = {
      method: 'DELETE',
      headers: {
         "Content-Type": "application/json",
      },
   };
   fetch(courseAPI + '/' + id, options)
      .then(function(response){
         response.json();
      })
      .then(function(){
         var courseItem = document.querySelector('.course-item-'+id);
         if (courseItem){
            courseItem.remove();
         }
      })
}

//Function CRUD (PUT)
function handleEditCourse(id, name, description) {
   document.querySelector('input[name="name"]').value = name;
   document.querySelector('input[name="description"]').value = description;
   var createBtn = document.querySelector('#create');
   createBtn.textContent = "Update this Course";
   createBtn.onclick = function() {
      var newName = document.querySelector('input[name="name"]').value;
      var newDescription = document.querySelector('input[name="description"]').value;
      var formData = {
         name: newName,
         description: newDescription
      };
      updateCourse(id, formData, function() {
         getCourses(renderCourses);
         createBtn.textContent = "Create new Course";
         // Reset lại sự kiện cho nút create
         handleCreateForm();
         // Xóa dữ liệu trên form
         document.querySelector('input[name="name"]').value = '';
         document.querySelector('input[name="description"]').value = '';
      });
   }
}

//Function Update Course
function updateCourse(id, data, callback) {
   var options = {
      method: 'PUT',
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
   };
   fetch(courseAPI + '/' + id, options)
      .then(function(response){
         return response.json();
      })
      .then(callback)
}
