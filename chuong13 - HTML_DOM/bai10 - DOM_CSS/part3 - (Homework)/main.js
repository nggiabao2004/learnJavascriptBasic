//Thay đổi màu nền của thẻ div có class là .red thành màu #f00
var divElement = document.querySelector('.red');
divElement.style.backgroundColor= '#f00';
console.log(divElement);
//<div class="red" style="background-color: rgb(255, 0, 0);">Đổi màu thẻ div này thành màu #f00</div>

//Thay đổi màu chữ của thẻ p thành màu #f05123
var pElement = document.querySelector('p');
Object.assign(pElement.style,{
   color: '#f05123',
});
console.log(pElement);
//<p style="color: rgb(240, 81, 35);">F8 - Học lập trình để đi làm</p>
