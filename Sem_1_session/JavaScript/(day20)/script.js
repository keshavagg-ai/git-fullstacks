// function declaration
function greet() {
    console.log("Hello, welcome to class!");
}
// invocation / run
greet();

console.log("----------------------------------------------------------")  

function sayHello(name) {
    console.log(`Hello ${name}`);
}
sayHello("Ajay");
sayHello("Anuj");

console.log("----------------------------------------------------------")  

console.log("START");
function printPrice(item,price) {
    const ans = price*100;
    console.log(`${item} : ${ans}`);
}
printPrice("HoneyJar",6.99);
printPrice("Kiwi",2.49);
console.log("END");

console.log("----------------------------------------------------------")  

function add(a,b) {
    console.log(a+b);
}
let result = add(2,3);
console.log(result);
console.log(add(10,20) * 2);

console.log("----------------------------------------------------------")

function check() {
    return "done";
    console.log("Will this print?");
}
console.log(check());

console.log("----------------------------------------------------------")

function introduce(name,city) {
    console.log(`${name} lives in ${city}`);
}
introduce("Ajay");
introduce("Ajay", "Pune", "India");

console.log("----------------------------------------------------------")

function introduce2(name,city="Delhi") {
    console.log(`${name} lives in ${city}`);
}
introduce2("Ajay");
introduce2("Anuj", "Mumbai");