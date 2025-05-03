//if...else...
var a= 2;
var b= 3;
if (a>b) {
    console.log("true")
} else {
    console.log("false")
}

var isSucsess= a<b;
if (isSucsess) {
    console.log("true")
} else {
    console.log("false")
}

/**Cac dieu kien tra ve "false":
 * 1. 0 (int)
 * 2. false (boolean)
 * 3. '' hoac ""
 * 4. undefined
 * 5. NaN
 * 6. null
 */
var isSucsess= null;
if (isSucsess) {
    console.log("true")
} else {
    console.log("false")
}