//Tham số, và Arguments
/** 1. Tham số
 * - Là 1 giá trị truyền vào 1 function
 */
function writeMessage(message){
    console.log(message);
}
writeLog('Hello World');
//message là tham số
//'Hello world' là đối số

function writeNum(number){
    console.log(typeof number);
}
writeNum(123);

function writeInfo(name, age){
    console.log('Name:',name,';age:',age);
}
writeInfo('Van A', 18);

function writeLog(log1, log2){
    if (log1){
        console.log(log1);
    }else{
        console.log('Không có log1');
    }

    if (log2){
        console.log(log2);
    }else{
        console.log('Không có log2');
    }
}
writeLog();
writeLog('Hi');
writeLog('Hi','everyone');

/**2. Arguments
 * 
 */
console.log(1, 2, 3);
function countLog(){
    console.log(arguments);
}
countLog('log1',2,null)

function writeArguments(){
    for (var param of arguments){
        console.log(param);
    }
}
writeArguments('log1',2,null)

function writeString(){
    var myString = '';
    for (var param of arguments){
        myString += `${param} - `
    }
    console.log(myString);
}
writeString('log1',2,null)
