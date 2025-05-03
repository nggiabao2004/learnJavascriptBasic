//Object (Đối tượng)
var myInfo= {
    name: 'An',
    age: 20
};
console.log(myInfo);  //{name: 'An', age: 20}

myInfo.female= false;
console.log(myInfo); //{name: 'An', age: 20, female: false}

myInfo['region']= 'Viet Nam';
console.log(myInfo); //{name: 'An', age: 20, female: false, region: 'Viet Nam'}

console.log(myInfo.name); //An (String)
console.log(myInfo['age']); //20 (number)
console.log(myInfo.email); //undefined (không có do Object myInfo không có biến email)

var myInfo= {
    name: 'An',
    age: 20,
    num: 123
};
var num= 'age';
console.log(myInfo.num); //123, do trong Object myInfo có biến num= 123
console.log(myInfo[num]); //20, do num= 'age', mà age trong Object myInfo là 20

var programLanguage= 'language';
var myInfo= {
    name: 'An',
    age: 20,
    num: 123,
    [programLanguage]: 'Java'
};
console.log(myInfo.language); //Java, do language -> programLanguage -> Java

delete myInfo.language;
console.log(myInfo); //{name: 'An', age: 20, num: 123}

var myInfo= {
    name: 'An',
    age: 20,
    num: 123,
    getName: function () {
        return this.name; //this.name = name
    }
};
console.log(myInfo.getName()); //An (String)

//Function: Phương thức (methods)
//Others: Thuộc tính (Property/ Abstract)
