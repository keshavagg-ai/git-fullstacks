// // calculate cube of a number
// function cubeNumber(x) {
//     let cube = x*x*x;
//     return cube;
// }
// let x = prompt("Enter a number to calculate its cube:");
// let cubeOfX = cubeNumber(x);
// alert(`The cube of ${x} = ${cubeOfX}`);

//-------------------------------------------------------------------

// // check if a person is an adult
// function adult(age) {
//     if (age >= 18) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// let a = parseInt(prompt("Enter your age:"));
// let canVote = adult(a);
// alert(`Can you vote? ${canVote}`);

//-------------------------------------------------------------------

// // calculate BMI (Body Mass Index)
// function calculateBMI(weight, height) {
//     // BMI = weight / (height in meters)^2
//     const heightInMeters = height / 100;
//     let bmi = weight / (heightInMeters * heightInMeters);
//     return bmi;
// }
// let weight = parseFloat(prompt("Enter your weight in kg:"));
// let height = parseFloat(prompt("Enter your height in cm:"));
// let bmi = calculateBMI(weight, height);
// alert(`Your BMI is ${bmi.toFixed(2)}`);

//-------------------------------------------------------------------

// // check the grade based on marks
// function gradeFromMarks(marks) {
//     if (marks >= 90) {
//         return "A";
//     } else if (75 <= marks && marks <= 89) {
//         return "B";
//     } else if (50 <= marks && marks <= 74) {
//         return "C";
//     } else {
//         return "F";
//     }
// }
// let marks = parseInt(prompt("Enter your marks:"));
// let grade = gradeFromMarks(marks);
// alert(`Your grade is ${grade}`);

//-------------------------------------------------------------------

// // apply discount based on membership
// function applyDiscount(price, isMember = false) {
//     if (isMember) {
//         return price * 0.9;
//     }
//     else {
//         return price;
//     }
// }
// let price = parseFloat(prompt("Enter the price of the item:"));
// let isMember = confirm("Are you a member?");
// let finalPrice = applyDiscount(price, isMember);
// alert(`The final price is ${finalPrice}`);


//-------------------------------------------------------------------

// // count the number of vowels in a word // normal way
// function countVowels(word, count = 0) {
//     let i = 0;
//     while (i < word.length) {
//         if (word[i] === 'a' || word[i] === 'e' || word[i] === 'i' || word[i] === 'o' || word[i] === 'u') {
//             count+=1;
//         }
//         i+=1;
//     }
//     return count;
// }   
// let word = prompt("Enter a word to count its vowels:");
// let vowelCount = countVowels(word);
// alert(`The number of vowels in "${word}" is ${vowelCount}.`);

//-------------------------------------------------------------------

// // count the number of vowels in a word // array method
// function countVowels(word1, count = 0) {
//     let vowels = "aeiou";
//     let i = 0;
//     while (i < word.length) {
//         if (vowels.includes(word[i])) {
//             count+=1;
//         }
//         i+=1;
//     }
//     return count;
// }   
// let word1 = prompt("Enter a word to count its vowels:");
// let vowelCount1 = countVowels(word1);
// alert(`The number of vowels in "${word1}" is ${vowelCount1}.`);

//-------------------------------------------------------------------

// // calculate sum of cube and square of a number
// function cube(x) {
//     let cube = x*x*x;
//     return cube;
// }
// function square(x) {
//     let square = x*x;
//     return square;
// }
// function sumOfSquareAndCube(x) {
//     let sumOfSquareAndCube = cube(x) + square(x)
//     return sumOfSquareAndCube
// }
// let x = parseInt(prompt("Enter a number to calculate sum of its cube and square:"));
// let sumOfSqAndCube = sumOfSquareAndCube(x);
// alert(`The sum of square and cube of ${x} = ${sumOfSqAndCube}`);

//-------------------------------------------------------------------

// // calculate absolute value and then square root of a number
// function isPositive(x) {
//     if (x>=0) {
//         return (x);
//     }
//     else {
//         return(-x)
//     }
// }
// function safeSquareRoot(x) {
//     let number = isPositive(x)
//     let safeSquareRoot = Math.sqrt(number)
//     return safeSquareRoot
// }
// let x = parseInt(prompt("Enter a number to calculate square root of it"));
// let SafeSqRt = safeSquareRoot(x);
// alert(`The square root of ${x} = ${SafeSqRt}`);

//-------------------------------------------------------------------

// finds the maximum number in an array
function findMax(numbers) {
    if(Array.isArray(numbers)==false){
        console.log("not an array");
        return;
    }
    if(array.length==0){
        console.log("empty array");
        return;
    }
    let max=numbers[0];
    let i=1;
    while (i<numbers.length){
        if (numbers[i] > max) {
            max = numbers[i];
        }
        i+=1;
    }
}
let array = prompt("Type an array in the format eg. ([a,b,c,.,.,])");
let Max = findMax(array);
alert(`The maximum number in ${array} = ${Max}`);