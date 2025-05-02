//Math Object
//1. Math.PI
console.log(Math.PI); //3.141592653589793

//2. Math.round()
console.log(Math.round(3.1415)); //3

//3. Math.abs()
console.log(Math.abs(-3)); //3

//4. Math.ceil()
console.log(Math.ceil(5.3)); //6

//5. Math.floor()
console.log(Math.floor(8.9)); //8

//6. Math.random()
console.log(Math.random()); //0.11105314046760784 (Kết quả random bất kỳ)
console.log(Math.random()*10); //5.91900285536626 (Kết quả random bất kỳ và dưới 10)
console.log(Math.floor(Math.random()*10)); //9 (Kết quả random bất kỳ và dưới 10)

var random= Math.floor(Math.random()*3);
var bonus= [
    '10 coin',
    '20 coin',
    '30 coin',
]
console.log(bonus[random]); //10 coin (Kết quả random bất kỳ và dưới 3)
//Nếu để Math.random()*(num) với num lớn hơn mảng thì đôi khi sẽ cho ra kết quả undefined
var random= Math.floor(Math.random()*10);
var bonus= [
    '10 coin',
    '20 coin',
    '30 coin',
]
console.log(bonus[random]); //undefined (Kết quả random bất kỳ và dưới 10)

var random= Math.floor(Math.random()*100);
if (random<20){ //tỉ lệ 20%
    alert('Cường hóa thành công');
    console.log("Cường hóa thành công");
}

//7. Math.min()
console.log(Math.min(10,20,50)); //10

//8. Math.max()
console.log(Math.max(10,20,50)); //50

function getRandomItem(array) {
    if (!Array.isArray(array) || array.length === 0) {
        throw new Error("Tham số phải là một mảng không rỗng");
    }
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}
const fruits = ["Táo", "Chuối", "Cam", "Dâu", "Xoài"];
console.log(getRandomItem(fruits)); // (Kết quả ngẫu nhiên từ mảng)