// --- Variables ---

let firstName = "Tereza";
let lastName = "Khachatryan";
let birthYear = 2005;
let currentYear = 2025;
let isStudent = false;
const hobbies = ["Dancing", "Swimming", "Reading", "Walking"];
const contact = {
    email: "tereza.khachatryan.techx@gmail.com",
    phone: 11223344,
    city: "Yerevan"
}

console.log(`Hi, my name is ${firstName} ${lastName}. I live in ${contact.city}.`);
console.log(`I am ${currentYear - birthYear} years old and currently ${isStudent ? "a student" : "not a student"}.`);

// --- Type Coercion & Comparison ---

let ageString = "25"
let ageNumber = 25

console.log(ageNumber == ageString) //true
console.log(ageNumber === ageString) //false
console.log(typeof ageString) //string
console.log(typeof ageNumber) //number

// --- Score and Grade ---

let score = 88
let result;

if(score >= 90 && score <= 100) {
    result = 'A';
} else if (score >= 80 && score <= 89) {
    result = 'B';
} else if (score >= 70 && score <= 79){
    result = 'C';
} else if (score >= 60 && score <= 69) {
    result = 'D';
} else {
    result = 'F';
}

console.log(result);

// --- Switch Statement ---

switch (result) {
    case 'A':
        console.log('Excellent work!');
        break;
    case 'B':
        console.log('Good work!');
        break;
    case 'C':
        console.log('Keep improving.');
        break;
    case 'D':
        console.log('Try harder.');
        break;
    case 'F':
        console.log('Needs serious effort.');
        break;
    default:
        console.log(result);
}

// --- Ternary Operator ---

let message = (result === 'A' || result === 'B' || result === 'C') ? 'You passed.' : 'You failed.';
console.log(message);