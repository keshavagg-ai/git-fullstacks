const studentName = "Keshav";
const studentCity = "Delhi";
const studentRollNumber = "2616400126";
const studentCollege = "KRMU";

const student = {
    Name: "Keshav",
    StudentCity: "Delhi",
    RollNumber: "2616400126",
    College: "KRMU",
}

console.log(student);
console.log(typeof student);

console.log(student.Name);
console.log(student["Name"]);

console.log(student.RollNumber);
console.log(student["RollNumber"]);

console.log(student.Phone);

student["Country"] = "INDIA";
console.log(student);

student["College"] = "Zenith";
console.log(student);

delete student.College;
console.log(student);   

//-------------------------------------------------------

// const product = {
//     title: "Monitor",
//     price: "7000",
//     brand: "Sony",
// };
// console.log(product);
// product.warranty = '3 years';
// product.price = '9000';
// console.log(product);
// product.price = '11000';

//--------------------------------------------------------

