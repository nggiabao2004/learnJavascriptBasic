/**VÒNG LẶP
 * 1. for - Lặp với điều kiện đúng
 * 2. for/in - Lặp qua key của đối tượng
 * 3. for/of - Lặp qua value của đối tượng
 * 4. while - Lặp khi điều kiện đúng
 * 5. do/while - Lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng * 
 */

//Vòng lặp for - Lặp với điều kiện đúng
for (var i=1; i<=10; i++){
    console.log("Hello world -", i);
}

function getRandNumbers(min, max, length) {
    var result = [];
    for (var i = 0; i < length; i++) {
        var rand = Math.random() * (max - min) + min;
        console.log(rand);
        result.push(rand);
    }
    return result;
}

getRandNumbers(1, 10, 5);
