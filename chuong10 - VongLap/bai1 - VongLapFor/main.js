//Vòng lặp for - Lặp với điều kiện đúng
for (var i=1; i<=5; i++){
    console.log("Hello world -", i);
};

function getRandNumbers(min, max, length) {
    var result = [];
    for (var i = 0; i < length; i++) {
        var num = Math.random() * (max - min) + min;
        console.log(num);
        result.push(num);
    }
    return result;
};
getRandNumbers(1, 10, 5); //Hiện 5 số random từ min đến max

function getTotal(arr) {
    var numbers=0
    for (var i=0; i<arr.length; i++){
        numbers += arr[i];
    }
    return numbers;
};
console.log(getTotal([1, 2, 3])); //6

var myArray=[
    'Javascript',
    'Python',
    'Java'
];
myArray.push("Dart");
var myArrayLength = myArray.length;
for (var i=0; i< myArrayLength; i++){
    console.log(myArray[i]);
};

var orders = [
    {
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    }
];
function getTotal(orders) {
    var arrayLength= orders.length;
    var sum=0
    for (var i=0; i<arrayLength; i++){
        sum += orders[i].price;
    }
    return sum;
};
console.log(getTotal(orders)); //8700000

for (var i=5; i>=0; i--){
    console.log("Count:",i)
}

for (var i=0; i<=20; i+=5){
    console.log("Jump:",i);
}
