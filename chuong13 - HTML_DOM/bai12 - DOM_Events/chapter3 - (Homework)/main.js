//Cho trước thẻ button, hãy viết code JS sao cho khi click vào button sẽ đổi màu chữ button sang màu #fff.
var buttonElement = document.querySelector('button');
buttonElement.onclick = function(){
   buttonElement.classList.remove('button');
   buttonElement.style.color = '#fff';
};

