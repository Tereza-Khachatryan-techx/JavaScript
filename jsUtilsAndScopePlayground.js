// --- PART A ---

function biggestNum (arr){
    let max = -Infinity
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] >= max) {
            max = arr[i]
        }
    }
    return max
}
// console.log(biggestNum([1, 2, 3]))

const hello = function () {
    return 'Hello World'
}
// console.log(hello())

const upperCase = (str) => {
    return str.toUpperCase()
}
// console.log(upperCase('yerevan'))

function isPalindrome(str){
    let reversedStr = str.split('').reverse().join('')
    return reversedStr === str
}
// console.log(isPalindrome('hello'))

const reverseStr = function(str){
    return str.split('').reverse().join('')
}
// console.log(reverseStr('Armenia'))

const sumOfNumbers = (arr) => {
    return arr.reduce((acc, i) => acc + i, 0)
}
// console.log(sumOfNumbers([1, 2, 3]))


// --- PART B ---

let globalVar = 'Global';

function outerFunction() {
    var functionVar = 'Var inside the function';

    if (true) {
        let blockElementLet = 'Block-scoped with let';
        const blockElementConst = 'Block-scoped with const';

        console.log(globalVar);          // Accessible-global
        console.log(functionVar);        // Accessible-function-scoped
        console.log(blockElementLet);    // Accessible-same block
        console.log(blockElementConst);  // Accessible-same block
    }

    console.log(globalVar);       // Accessible-global
    console.log(functionVar);     //  Accessible-function-scoped
    console.log(blockElementLet);  // Not accessible-block-scoped to if block
    console.log(blockElementConst); // Not accessible-block-scoped to if block

    function nestedFunction() {
        console.log('Inside nested function:');
        console.log(globalVar);         // Accessible-global
        console.log(functionVar);       // Accessible-function-scoped
        console.log(blockElementLet);   // Not accessible-block-scoped to if block
        console.log(blockElementConst); //  Not accessible-block-scoped to if block
    }

    nestedFunction();
}

// outerFunction();

// console.log(globalVar);          // Accessible-global
// console.log(functionVar);     // Not accessible
// console.log(blockElementLet); // Not accessible


// --- PART C ---


// --- function hoisting ---

console.log(bye()) // Good bye
//This function declaration is fully hoisted.Both the function name and body are moved to the top of the scope at compile time.
function bye(){
    return 'Good bye'
}

console.log(helloFunc()) //ReferenceError
// Function expression assigned to a `const` — not hoisted
const helloFunc = function() {
    console.log('Hello')
}


// --- variable hoisting ---

console.log(firstName) //ReferenceError
let firstName = 'Tereza'
//Throws error because cannot access 'firstName' before initialization.
//'let' declarations are hoisted but not initialized. 

console.log(age) //undefined
var age = 20
// 'var' declarations are hoisted and initialized with 'undefined'.

console.log(city) //ReferenceError
const city = 'Yerevan'
//Throws error because cannot access 'city' before initialization.
// 'const' behaves like 'let' in terms of hoisting.

