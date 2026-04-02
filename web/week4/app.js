// Part 0. Demonstrate string interpolation technique with backticks
/* let feedback = 'correct';
let responseTime = 2.4;
let answer = 25;

alert('You are ' + feedback + '. Answer: ' + answer + '. Response time: ' + responseTime);
alert(`You are ${feedback}. Answer: ${answer}. Response time: ${responseTime}`) */

// const { response } = require("express");

// Part 1. Functions: 
let num1 = getRandomNumber(1, 10);
let num2 = getRandomNumber(0, 100);

console.log(num1);
console.log(num2);

// displayRandomNumber();

function getRandomNumber(min, max) {
    let randomNumber = Math.floor(Math.random() * max) + min;
    return randomNumber;
}

// function displayRandomNumber() {
//     alert(getRandomNumber(1, 10));
// }

// global vs local scopes -> outside of a function: global scope, defined inside the function: local scope 

function calculateRectangleArea(length, width) {
    let area = length * width;
    return area;
}

// Example invoking the above function and writing it’s return value to the console
console.log(calculateRectangleArea(10, 10)) // 100

// Example invoking the above function and capturing its return value in a variable
let area = calculateRectangleArea(10, 5);
console.log(area) // 50

function isSquare(length, width) {
    if (length == width) {
        return true;
    } else {
        return false;
    }
}

console.log(isSquare(10, 10)) // true
console.log(isSquare(15, 20)) // false
// =====================================
// PART 2. Arrays

// An arraw of numbers 
let age = [45, 23, 28, 35];

// An array of strings
let names = ['Alice', 'Jamal', 'Avi', 'Kyle'];
// console.log(names[0]); // Alice
names[1] = 'Bob'; // replaces second element for Bob
names.push('Sara'); // adds Sara at the end
names.unshift('Karen'); // Karen added to the first place

// An array that can contain other arrays, and also is mixed
let mixed = ['a', [true, 'bar', 1], 2, 7, 89, 'b'];

// ============================================
// PART 3. LOOPS

let namesWithA = [];

for (let name of names) {
    if (name.charAt(0) == 'A') {
        namesWithA.push(name);
    }
}

console.log(namesWithA);

// ===============================================
// PART 4. Numerical for loops  
let results = [];

for (let i = 0; i < 3; i++) { // i < 15 reflects that there will be 15 trials 
    let num1 = getRandomNumber(1, 10);
    let num2 = getRandomNumber(1, 10);
    let start = Date.now();
    let response = prompt(`What is ${num1} + ${num2}?`);
    let end = Date.now();
    let time = (end - start) / 1000; // Calculate RT in seconds
    let answer = num1 + num2;
    if (response == num1 + num2) {
        feedback = 'correct';
    } else {
        feedback = 'incorrect';
    }

    // Arrays and objects - now the results are stored in an object
    results.push({
        response: response,
        answer: answer,
        feedback: feedback,
        time: time
    });

    alert(`You answered ${response} (${feedback}) in ${time} seconds.`)
}

console.log(results);

// ===============================================
// PART 5. OBJECTS

// Arrays: Some multiple elements, accessed via numerical indexes
let participantA = ['Alice', 21, true]; // arraw

let participantB = {
    name: 'Alice',
    age: 21,
    consent: true
}; // we have a more intuitive way to access the data (which is similar as in the array)

// if (participantA[2]) {
// ...
// };

// if (participantB.consent) {
// ...
// };

// update values in an object: 
participantB.consent = false;
participantB.startTime = '2:00pm';
// console.log(participantB);
delete (participantB.age); // age is removed

let person = {
    // Strings
    firstName: 'Elliot',
    lastName: 'Brown',

    // Number
    age: 30,

    // Array
    hobbies: ['reading', 'gaming', 'hiking'],

    // Nested Object
    address: {
        street: '324 Western Ave',
        city: 'Cambridge',
        zipCode: '02139'
    },

    // Functions
    // Observe how the keyword *this* is used in functions to reference other properties within this object
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },

    greet: function () {
        return `Hello, my name is ${this.getFullName()} and I am ${this.age} years old.`;
    },

    getAddress: function () {
        return `I live at ${this.address.street}, ${this.address.city} ${this.address.zipCode}`;
    },

    getHobbies: function () {
        return `My hobbies include ${this.hobbies.join(', ')}`;
    }
};

// Testing the functions, accessed via dot notation and invoked with parenthesis
console.log(person.greet()); // Hello, my name is Elliot Brown and I am 30 years old.

console.log(person.getAddress()); // I live at 324 Western Ave, Cambridge 02139
console.log(person.getHobbies()); // My hobbies include reading, gaming, hiking

// Testing the properties
console.log(person.firstName); // Elliot
console.log(person.age); // 30
