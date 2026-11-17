console.log("----- START -----");
let a = 2;
var b = 3;
console.log(a, b);
function multiplyByTwo(n) {
    console.log("----- INSIDE FUNCTION -----");
    let result = n * 2;
    console.log("----- FUNCTION ABOUT TO RETURN RESULT -----");
    return result;
    console.log("----- FUNCTION COMPLETED -----");
}
console.log("----- MID -----");
let c = multiplyByTwo(a);
console.log(c);
console.log("----- END -----")

//-------------------------------------------------------------------

console.log(x);
var x = 5;
console.log(x);

sayHi();
function sayHi() {
    console.log("Hi!");
}

//-------------------------------------------------------------------

console.log(y);
let y = 10;

//-------------------------------------------------------------------

let college = "Zenith";
function intro() {
    console.log("I study at " + college);
}
intro();

//-------------------------------------------------------------------

let city = "Pune";
function showCity() {
    let city = "Delhi";
    console.log(city);
}
showCity();
console.log(city);

//-------------------------------------------------------------------

function printGrade(marks) {
    if (marks >= 50) {
        let grade = "Pass";
        console.log(grade);
    }
    console.log(grade);
}
printGrade(80);
console.log(grade);

//-------------------------------------------------------------------
