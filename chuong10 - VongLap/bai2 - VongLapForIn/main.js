//Vòng lặp for/in - Lặp qua key của đối tượng
var myInfo = {
    name: "Tom Nguyen",
    age: 18,
    address: "Ha Noi"
};
for (var key in myInfo){
    console.log(key); //name; age; address
}
for (var key in myInfo){
    console.log(myInfo[key]); //Tom Nguyen; 18; Ha Noi
}

var languages = [
    'Javascript',
    'Java',
    'Python'
];
for (var key in languages){
    console.log(key); //0; 1; 2
}
for (var key in languages){
    console.log(languages[key]); //Javascript; Java; Python
}

var myString = "Javascript";
for (var key in myString){
    console.log(myString[key]); //J; A; V; A; S; C; R; I; P; T
}

function run(object) {
    var array = [];
    for (var key in object) {
        var message = `Thuộc tính ${key} có giá trị ${object[key]}`;
        console.log(message);
        array.push(message);
    }
    return array;
}
console.log(run({ name: 'Nguyen Van A', age: 16 }));
//0: "Thuộc tính name có giá trị Nguyen Van A"
//1: "Thuộc tính age có giá trị 16"
