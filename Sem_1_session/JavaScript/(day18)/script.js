const students = ["tejas","srinjoy","vaibhav","zaid"];

console.log(students);
console.log(typeof students);
console.log(students[1]);
// student[20]="srishti";
// console.log(student);
// console.log(student[20]);

// push - append/insert new element at the end of the array
console.log("--------push--------")
students.push("srishti");
students.push("sagar","manas","roshan")
console.log(students);
const extraStudents = ["shreyansh", "keshav", "sachin"];

// spread operater - spreads the array item into individual elements
students.push(...extraStudents);
console.log(students);

// pop - removes the last element from the array and returns it
console.log("--------pop--------")
const lastStudent = students.pop();
console.log(students);
console.log(lastStudent);

// shift - removes the first element/ element on 0th index from the array and returns it
console.log("--------shift--------")
const firstStudent = students.shift();
console.log(students);
console.log(firstStudent);

// unshift - add/insert new element at 0th index
console.log("--------unshift--------")
students.unshift("rishi");
console.log(students);

// splice - it requires a start index and delete count, 
//          it starts from the start index and deletes the elements upto "delete count number",
//          if delete count isnt given, it deletes all the element till the end of the list.
console.log("--------splice--------")
console.log(students);
students.splice(3,2);
console.log(students);
students.splice(1, 0, "a","b");
console.log(students);
students.splice(4);
console.log(students);
students.splice(1,2, ...extraStudents);
console.log(students);

// reverse indexing - it doesnt work like python and returns undefinded
console.log("--------reverse indexing--------")
console.log(students[-1]);

//delete - 
console.log("--------delete--------")
console.log(students);
delete students [2];
console.log(students);

// in this case the latest value of the duplicate key will be there (overwritten)
const student1 = {
    name: "tejas",
    age: 18,
    name: "rishi",
};
console.log[student1];  

const student2 = {
    name: "tejas",
    age: 18,
};
// this will update the name to new value
student2["name"] = "rishi";
console.log[student2];  
