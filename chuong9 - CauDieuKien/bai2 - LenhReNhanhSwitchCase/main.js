//Switch-Case
var date=2;
switch(date){
    case 2:
        console.log("Thu 2"); //date=2
        break;
    case 3:
        console.log("Thu 3");
        break;
    case 4:
        console.log("Thu 4");
        break;
    case 5:
        console.log("Thu 5");
        break;
    case 6:
        console.log("Thu 6");
        break;
    case 7:
        console.log("Thu 7");
        break;
    case 1:
        console.log("Chu Nhat");
        break;
    default:
        console.log("Khong hop le");
}

function run(fruits) {
    var result;
    switch(fruits) {
        case "Banana":
            result = "This is a Banana";
            break;
        case "Apple":
            result = "This is an Apple";
            break;
        default:
            result = "ERROR"
    }
    return result;
}
console.log(run("Apple")); //This is an Apple
console.log(run("Cake")); //ERROR
