// Explain "This" (Array)
Array.prototype.myFilter = function(callback) {
   var output=[];
   for (var index in this){
       if (this.hasOwnProperty(index)){
           var result = callback(this[index], index, this);
           if (result){
               output.push(this[index]);
           }
       }
   }
   return output;
};
var numbers = [1, 2, 3, 4];
console.log(numbers.myFilter(function (number) {
    return number % 2 === 0;
})); //Output: [2, 4]
console.log(numbers.myFilter(function (number, index) {
    return index % 2 === 0;
})); //Output: [1, 3]
console.log(numbers.myFilter(function (number, index, array) {
    return array.length % 2 === 0;
})); //Output: [1, 2, 3, 4]

//<1> Phân tách:
Array.prototype.myFilter = function(callback) {
    var output = [];
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            console.log('Calling callback with:');
            console.log(' - value:', this[index]);
            console.log(' - index:', index);
            console.log(' - array:', this);

            var result = callback(this[index], index, this);
            if (result) {
                output.push(this[index]);
            }
        }
    }
    return output;
};
var numbers = [10, 20, 30];
numbers.myFilter(function (value, index, array) {
    console.log(`>> Inside callback: value=${value}, index=${index}, array length=${array.length}`);
    // return value > 15;
});
// Calling callback with:
//  - value: 10
//  - index: 0
//  - array: [10, 20, 30]
// >> Inside callback: value=10, index=0, array length=3
// Calling callback with:
//  - value: 20
//  - index: 1
//  - array: [10, 20, 30]
// >> Inside callback: value=20, index=1, array length=3
// Calling callback with:
//  - value: 30
//  - index: 2
//  - array: [10, 20, 30]
// >> Inside callback: value=30, index=2, array length=3

// | Đối số truyền vào callback | Ý nghĩa                                     | Ví dụ cụ thể     |
// | -------------------------- | ------------------------------------------- | ---------------- |
// | `this[index]`              | Giá trị phần tử tại vị trí hiện tại         | `10`, `20`, `30` |
// | `index`                    | Vị trí của phần tử trong mảng               | `0`, `1`, `2`    |
// | `this`                     | Chính mảng gốc đang thực hiện `.myFilter()` | `[10, 20, 30]`   |

//<2> Tổng kết ý nghĩa của 3 đối số:
// Nếu callback là:
    var newNumber = numbers.myFilter(function (value, index, array) {
        return value > 15;
    });
    console.log(newNumber);

// | value | index | array         | value > 15 | Kết quả    |
// | ----- | ----- | ------------- | ---------- | ---------- |
// | 10    | 0     | \[10, 20, 30] | false      | Không thêm |
// | 20    | 1     | \[10, 20, 30] | true       | Thêm `20`  |
// | 30    | 2     | \[10, 20, 30] | true       | Thêm `30`  |

// Thì kết quả sẽ là: [20, 30]
// Vì chỉ 20 và 30 thỏa mãn điều kiện value > 15.
