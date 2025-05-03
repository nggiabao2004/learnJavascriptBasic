//Vòng lặp lồng nhau (Nested Loop)
var myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (var i=0; i < myArray.length; i++){
    console.log(myArray[i]);
}
//(3) [1, 2, 3]
//(3) [4, 5, 6]
//(3) [7, 8, 9]

//Nested Loop:
for (var i=0; i < myArray.length; i++){
    for (var j=0; j<myArray[i].length; j++){
        console.log(myArray[i][j]);
    }
}
// 1; 2; 3; 4; 5; 6; 7; 8; 9
