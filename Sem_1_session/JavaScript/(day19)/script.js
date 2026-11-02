// const student = {
//     name: "Vaibhav",
//     city: "ambala",
//     rollNumber: "2616400163",
//     college: "KRMU",
//     phone: "7015345647"

// };
// console.log(student)

// delete student.college
// console.log(student)
// console.log(student.name);
// console.log(student["name"]);

// console.log(student.rollNumber);
// console.log(student["rollNumber"]);

// console.log(student.phone)


// console.log(student)

// student["country"] = "India";
// console.log(student)

// student["college"] ="Zenith";
// console.log(student)

// const product = {
//     name: "Monitor",
//     brand: "sony",
//     price: 7000,
// };

// console.log(product)

// product.warranty = "7 years";
// product.price = 9000;
// console.log(product)

// product.price = 11000 ;
 

// const student = {
//     name: "vaibhav",
//     age: 17
// }

// console.log(student)

// const teacher = student;
//  teacher.name = "V";
//  console.log(student)

 

// --------------------------------------------------- ARRAY ---------------------------------------------------------

// const students = ["tejas", "vaibhav", "meow", "ansh"]
// console.log(students);
// console.log(typeof students);
// console.log(students[1]);

// students[20] = "srishti";
// console.log(students);
// console.log(students[20])

// //  PUSH - adds a new element to end of the list
// students.push("vaibhav")
// console.log(students)

// students.push("sagar", "shreyansh");
// console.log(students);



// // POP - removes the last element form the list and returns it 
// const lastStudent = students.pop();
// console.log(students);
// console.log(lastStudent);

// //  SHIFT - removes and returns the element at 0th index
// const firstStudent = students.shift();
// console.log(students);
// console.log(firstStudent);

// //  UNSHIFT - adds an element at the 0th index
// students.unshift("rishi");
// console.log(students);

// //  DELETE
// delete students[1];
// console.log(students);

// // SPLICE - 
// console.log(students);
// students.splice(2,1);
// console.log(students);

// // you cant add multiple keys to an object



// const student = { named: "vaibhav", age: 17, rollNumber: 163};
// const { named,age } = student
// console.log( named,age );


const data = {
  "products": [
    {
      "id": 26,
      "title": "Green Chili Pepper",
      "price": 0.99
    },
    {
      "id": 27,
      "title": "Honey Jar",
      "price": 6.99
    },
    {
      "id": 28,
      "title": "Ice Cream",
      "price": 5.49
    },
    {
      "id": 29,
      "title": "Juice",
      "price": 3.99
    },
    {
      "id": 30,
      "title": "Kiwi",
      "price": 2.49
    },
    {
      "id": 31,
      "title": "Lemon",
      "price": 0.79
    },
    {
      "id": 32,
      "title": "Milk",
      "price": 3.49
    },
    {
      "id": 33,
      "title": "Mulberry",
      "price": 4.99
    },
    {
      "id": 34,
      "title": "Nescafe Coffee",
      "price": 7.99
    },
    {
      "id": 35,
      "title": "Potatoes",
      "price": 2.29
    }
  ],
  "total": 194,
  "skip": 25,
  "limit": 10
}

// let i=0;
// const n = data["products"].length;
// while (i<n) {
//     console.log(data["products"][i]["title"])
//     i+=1;
// }


// ----------EASIER WAY OUT-----------------------------------------------

let i=0
const {products} = data;
const n = products.length;
while (i<n) {
    const product = products[i];
    console.log(product.title, ":", Math.round(product.price *100));
    
    i+=1
}