//Toán tử 3 ngôi: Ternary operator
var course={
    name: 'Javascript',
    coin: 250
}

if (course.coin >0){
    console.log(`${course.coin} Coins`); //250 Coins
} else{
    console.log(`Free ${course.name} course`);
}

course.coin= 300
var result= course.coin >0 ? `${course.coin} Coins` : `Free ${course.name} course`;
console.log(result); //300 Coins

course.coin= 0
var result= course.coin >0 ? `${course.coin} Coins` : `Free ${course.name} course`;
console.log(result); //Free Javascript course

var a=1;
var b=2;
var c= a>b ? a : b;
console.log(c); //2
