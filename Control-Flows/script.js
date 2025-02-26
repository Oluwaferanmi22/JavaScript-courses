console.log("Hello world!")

//control flows --> determines how programmes are executed based on conditions and iteration.

// conditionals -- if,if else,else, ternary operator.

if("Condition") {
    //code to execute if condition is net
}

let age = 30;

if (age === 25){
    console.log("Age is greater than 25");
} else if (age < 25){
    console.log("Age is lesser than 25");
} else{
    console.log("Age is 30");
}


let isloggedin = true;

if (!isloggedin) {
    console.log("You are not logged in")
} else {
    console.log("You are logged in ...")
}


let balance = 500;
let withdraw = 1000;

if(withdraw > balance){
    console.log("insuffient funds")
} else if (withdraw === balance){
    console.log( "unable to empty your wallet")
} else {
    console.log( "successful")
}

let yearold = 18;

if (yearold < 18){
    console.log("access denialed")
}
else if (yearold === 18){
    console.log ("access granted")
}


let purchaseAmount = 300;
let discount;

if(purchaseAmount >= 250) {
    discount = 10;
} else if(purchaseAmount>= 150){
    discount = 5;
} else if (purchaseAmount <= 100){
discount = 1.5;
} else{
    discount = 0;
}
console.log(`you got a discount of ${discount}`);

//Ternary operator.
// condition ? expression_if_true :expression_if_false.

let threashold = 40;

threashold >= 40 ? console.log("marry") : console.log("You are still a minor");


const number = 9;

const results = number % 2 === 0 ? "even" : "odd";

console.log(results)


let temprature = 90;
const heat = temprature > 60 ? "it is a hot day" : "it is a cool day";
console.log(heat)


// switch statement -- used when there a multiple possible value for a variable 

let day = "Tuesday"

switch(day){
    case "Monday":
    console.log("Today is bright!");
    break;
    case "Friday":
        console.log("Jimoh Oloyin");
        break;
        case"Tuesday":
        console.log("Today is Tuesday!");
        break;
        default:
            console.log("It is a normal day");
}

let order = "pizza"
switch(order) {
    case "Burger":
        console.log("This is burger");
        break;

        case "pizza":
            console.log("you ordered a pizza");
            break;
            case "Doughnut":
                console.log("you ordered a Doughnut");
                break;
                default:
                    console.log("invalid order, please select from the menu")
}

//exercise 1


let dayname;
let daynumber = 0;
switch(daynumber){
    case 1:
        dayname = "Sunday";
        break;
    case 2:
        dayname = "Monday";
        break;
    case 3:
        dayname = "Tuesday";
        break;
    case 4:
        dayname = "Wednesday";
        break;
    case 5:
        dayname = "Thursday";
        break;
    case 6:
        dayname = "Friday";
        break;
    case 7:
        dayname = "Saturday";
        break;
        default :
        dayname = "😊"
}
console.log(`Day ${daynumber} is ${dayname}`);

//exercise 2

const role = "admin"
switch(role){
    case "admin":
        console.log("Welcome admin");
        break;
    case "editor":
        console.log ("i'm the editor");
        break;
    case "viewer":
        console.log("we are the viewers");
        break;
        default:
             console.log("unknown role please contact support")
}


//loops are used to execute a block of code multiple times.


for(let i = 0; i < 10; i++) {
    console.log(i)
}

let table = 5;
for(let i = 1; i <= 10; i++)  {
    console.log(`${table} * ${i} = ${table * i}`);
}

// let i, x = '';
// for (i = 0; i <= 5; i++) {
//     x +=  i;
// console.log(x)
// }


//Equality operator (strict)

let nuMber1 =  [1, 2, 3];
let nuMber2 =  [1, 2, 3];
// console.log([1, 2, 3] === [1, 2, 3]);

console.log(5 === "5");
console.log(true === 1);
console.log(null === undefined);
// console.log({} === {})

let obj1 = {name: "lateefa"};
let obj2 = {name: "lateefa"};

console.log(obj1 === obj2)



//Equality operator (loss)

let nuMbeR1 =  [1, 2, 3];
let nuMberR2 = [1, 2, 3];
console.log([1, 2, 3] == [1, 2, 3]);

console.log(5 == "5");
console.log(true == 1);
console.log(null == undefined);
console.log("j" == "g")

let obJ1 = {name: "lateefa"};
let obJ2 = {name: "lateefa"};
console.log(typeof obJ1)
console.log(typeof obj1 == obj2)


//example
for (let i = 1; i <= 10; i +=2){
console.log("odd:", i);
}

for (let i = 1; i <= 2; i++){
    console.log("result:", i);
    }
for (let i = 4; i <= 5; i++){
    console.log("result:", i);
    } 

  
        
// let array1 =["Apple", "Banana", "Mango"];
// for(let i = 1; i < array1.length; i++) { 
//     console.log(array1[i]);
// }
let names = "ALABAFERANMI"
for(let i =0; i < names.length; i++) {
    console.log(names[i]);
}


//for...in loop

//Example1
let User ={Name:'Feranmi', Age:15, City:'ogun'};

for(key in User) {
console.log(key + "-", User[key])
}
let array =["Red","Orange", "Pink", "Yellow"]
for(array of array){
    console.log(array);
}
    
//while loop

// while (condition) {
    //code to execute
// }

// Example 1
// let k = 1;
// while(k <=7){
//     console.log(k)
// }
 

// let y = 0;
// while(y < 5){
//     y++;

//     if(y === 3){
//         continue;
//     }
//     console.log(y)
// }


let fruitz = ["Apple", "Banana", "Mango"];
let i = 0;
while(i < fruitz.length){
    console.log(fruitz[i]);

    i++}

    //foreach
    const students = ['abdullah', 'daisy', 'prime']
    students.forEach((student, i) => { 
        console.log(`index ${i}: ${student}`)
    })



    