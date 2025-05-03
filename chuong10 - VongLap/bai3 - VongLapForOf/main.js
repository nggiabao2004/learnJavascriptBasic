//Vòng lặp for/of - Lặp qua value của đối tượng
var languages = "Javascript";
for (var value of languages){
    console.log(value); //J; a; v; a; s; c; r; i; p; t
}

var myInfo = {
    name: "Tom Nguyen",
    age: 18
}
console.log(Object.keys(myInfo)); //['name', 'age']
for (var value of Object.keys(myInfo)){
    console.log(myInfo[value]); //Tom Nguyen; 18
}
