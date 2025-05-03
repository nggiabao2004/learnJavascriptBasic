var array1 = ['a','b','c','d','a','b','c'];
console.log(array1); //(7) ['a', 'b', 'c', 'd', 'a', 'b', 'c']
console.log(new Set(array1)); //Set(4) {'a', 'b', 'c', 'd'}
console.log([...(new Set(array1))]); //(4) ['a', 'b', 'c', 'd']

/**Đệ quy: Lặp lại chính mình
 * - Xác định điểm dừng
 * - Logic handle (tạo ra điểm dừng)
 */
function countDown(num){
    if (num > 0){
        console.log(num);
        return countDown(--num);
    }
    return num;
}
countDown(5); //5; 4; 3; 2; 1

function loop(start, end, comeback){
    if (start <= end){
        comeback(start);
        return loop(start+1, end, comeback);
    }
}
var array = ['Javascript','Java','Python'];
loop(0, array.length - 1, function(index){
    console.log('Index:', array[index]);
});

function giaiThua1(num){
    var output = 1;
    for (var i=num; i>0; i--){
        output *= i;
    }
    return output;
}
console.log(giaiThua1(3)); //3*2*1=6

function giaiThua2(num){
    if (num > 0){
        return num * giaiThua2(--num);
    }
    return 1;
}
console.log(giaiThua2(6)); //6*5*4*3*2*1=720
