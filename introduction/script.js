// Javascript Variables,data types and operators

// variable keywords: const and let

let a = 10;

console.log(a)

a = 25
console.log(a)

const myNumber=30;

console.log(myNumber)


console.log(a)

let b = 3;
let c = 4;
let temp;

temp = b;
b = c;
c = temp;

console.log(`b: ${b}, c: ${c}`)



// Javascript Data types: Primitive and Non-Primitive Data types

let studentNames = ["Dolapo", "Ridwan", "Mueez", "Feranmi"]; //non-primitive


let primitive = 10; // primitive
let anotherPrimitive = primitive;

primitive = 30;

console.log({primitive, anotherPrimitive})


//Non-promitive Data types

let newstudentNames = studentNames;


// studentNames = ["soliu", "Abdullahi"];

// console.log({studentNames, newstudentNames})

studentNames[0] = "Amodu"

console.log({studentNames, newstudentNames})


//javascript operators

// Logical operator;

const num1 = 0;

const name1 = 0;

// const trueValue = num1 && name1 ? "It is truthy value": "It is false"
const trueValue = num1 || name1 ? "It is truthy value": "It is false"

// console.log('${trueValue}')


//comparison operator

let num2 = 10;
num2++
const num3 = 10;

const result = num2 === num3 ? "yes": "no"

console.log(++num2);
