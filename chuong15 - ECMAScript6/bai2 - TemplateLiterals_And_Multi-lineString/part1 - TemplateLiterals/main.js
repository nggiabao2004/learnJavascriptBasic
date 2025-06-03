// TemplateLiterals
//Cách viết thông thường
const courseName1 = 'Javascript';
const description1 = 'Course name: '+ courseName1;
console.log(description1);
//Course name: Javascript

//Viết theo kiểu `Template Spring` (nội suy)
const courseName2 = 'Java';
const description2 = `Course name: ${courseName2}`;
console.log(description2);
//Course name: Java

//Còn muốn console.log() in ra được cái 'nội suy' (${}) thì như vậy
const text= `Ký tự nội suy: \${}`;
console.log(text);
//Ký tự nội suy: ${}
