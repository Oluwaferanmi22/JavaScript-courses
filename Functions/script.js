// Function Declaration


// function myName (){
//     return "Hello world"
// }


// //Function Expression
// const myname = function(){
//     return "Hello world"
// }


// // Arrow Function
// const Myname = () => {
//     return 'Hello world'
// }


//Function Delaration
function add (a,b){
    return a+b;
}
console.log(add(1,2))

function subtract (a,b){
    return a-b;
}
console.log(subtract(1,2))

function multiply (a,b){
    return a*b;
}
console.log(multiply(1,2))

function divide (a,b){
    return a/b;
}
console.log(divide(1,2))

function module (a,b){
    return a%b;
}
console.log(module(1,2))


function jamb (age){
    if (age > 30){
        return "You are to old"
    } else if(age < 30 && age > 18){
        return "You are qualified to register"
    } else {
        return "Too young to register"
    }
}
console.log(jamb(100))

// function dayoftheweek (day){
//     if (day > 100){
//         return "It is a sunny day"
//     } else if(day < 90 && day > 50){
//         return "it is a warm day"
//     } else {
//         return "it is a Frezing day"
//     }
// }
// console.log(dayoftheweek(110))

function everday(day) {
    switch (day){
        case "monday":
            return "A bright day";
        case "Tuesday":
            return "A sunny day indeed";
        case "Wednesday":
            return "Frosty";
        case "Thursday":
            return "Hectic";
        case "Friday":
            return "wet";
        case "Saturday":
            return "rainy day";
        case "Sunday":
            return "cold day";
            default:
                "😒😒😒"
    }
}

console.log(everday("monday"));


const checknumber = (num) => {
    if(num > 0) {
        return 'positive'
    } else if (num <0) {
        return 'negative'
    } else {
        return "zero"
    }
}
console.log(checknumber(0))
console.log(checknumber(4))
console.log(checknumber(-4))

const isEven = (num) => num % 2 === 0 ? "even" : "odd"
console.log(isEven(4))

const login = (username, password, isAdmin) => {
    if(!username || !password) return "please fill the required fields";
    if(isAdmin) return "admin login successful";
    return username === "user" && password === "pass123" ? "user login sucessful":
    "invalid credentials"
}

console.log(login('user', 'pass123', false))

//write a function that handles registration

const register = (Email, Password, Username) => {
    if(!Username || !Password || !Email) return "please fill the required fields";
    return Username === "Alaba" && Password === "password" && Email === "alabaferanmi2510@gmail.com"?  "account already exist":`${Username} sucessful registered`
   
}
console.log(register('Alaba', "password", "alabaferanmi2510@gmail.com"))



//SCOPE 

//GLOBAL SCOPE



let globalVar = "i am global"

function showVar(){
    console.log(globalVar)
}

showVar()
function showlocalVar(){
let localVar = "i am local"

    console.log(localVar);
}
showlocalVar()

//lexical scope
function outterFunc(){
    let outerVar = "i am outer";

    function innerfunc(){
        console.log(outerVar)
        
    }
    innerfunc()
}
outterFunc()



function getName(name){
    function greet(){
        console.log(`Good day ${name}`)
    }
    greet()
}
getName("Dianah")                               


function toCelsius(f) {
    return (5/9) * (f-32);
  }
  let value = toCelsius(77);
  console.log(value)

  function tofahrenheit(c) {
    return (c * 9/5) + 32 ;
}  
    let values = tofahrenheit(25);
    console.log(values)
    function toKelivin(K) {
        return K = 32 + 273.15;
    }
    let Value = toKelivin(227);
    console.log(Value)

  