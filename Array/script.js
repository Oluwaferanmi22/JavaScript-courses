const cl = console.log;
const cohort = ["Idris","Lateefa","muiz","Abdul-kabeer","Ridwan","Damilare"]
console.log(cohort);

const Nested = [[1,2],[3,4], [5,6]]
console.log(Nested)


const newArr = Nested [0][1]
console.log(newArr)
console.log(Nested.length) 


const replaceEl = (cohort[4] = "Dolapo")
console.log(replaceEl)
console.log(typeof replaceEl);

//To add a new element to last index of an array
cohort[6] = "Feranmi"
console.log(cohort);


cohort.forEach((name) => {
    console.log(name.toUpperCase())
})

const student = ["Yemi","Soliu","Elizabeth", "Princess","Praise"]
console.log(student)

//**********PUSH() METHOD*************
// To add a new element to the end of an array

const pushed = student.push("Busayo","Dorcas")
console.log(pushed) // To print new array length


// ******************pop() Method*****************


const number = [3, 2, 1 , 4, 5,5]
console.log(number);

const poped = number.pop(); //to save the removed element in a variable
console.log(poped); //to view the remove elemnt
console.log(number)

//*******Shift() Mthod********* *
// To remove the first element from an array
const colors = ["green","red","Black","whiite"]
console.log(colors)

const remE1 = colors.shift(); // To save the removed element in variable
console.log(colors)
console.log(remE1)


// const color = ["red","Black","whiite",]
// console.log(color)


//Unshift method 

const remE = colors.unshift ("purple"); 
console.log(colors)
console.log(remE)

const foods = ["Semo", "Amala", "Beans", "Eba", "Pounded yam"]
console.log(foods);


//splice Method


foods.splice(0,3, "Tuwo", "Yam")
console.log(foods)


const wears = ["gucci", "D&G", "Addidas", "Versace", "Nike"]
wears.splice(2)
console.log(wears)


//Slice Method
const male = ["Daodu", "Gbojita", "Gbojumo", "Ogundiji","Akani"]
console.log(male)

const newstring = "adeyemi"
console.log(newstring.length);
const slicestring = newstring.slice(12,5);
console.log(slicestring)

const warriors = male.slice(1, 4);
console.log(warriors)

const stakeHolders = male.slice(4)
console.log(stakeHolders);

//Or using negative parameter

const stakeHolders2 = male.slice(-2) //Start counting from element(-1)
console.log(stakeHolders2)
  

//include Method

const blean =male.includes("Dadu");
console.log(blean); // false
const blean2 = male.includes("Akani")
console.log(blean2)

//Sort method
male.sort()
console.log(male)


//Index of Method
const num = [1,2,3,4,9,1,2,9,8,7,12,11,1,2]
console.log(num)
const index1 = num.indexOf(2)
console.log(index1)

//last indexof()

const lastindexOf = num.lastIndexOf(4,num.length)
console.log(lastindexOf)

// //forEach Method
const namer = ["Ahola", "Alaba", "Ajala"] 
// names.forEach(fuction(){
//     consolezlog(names)
// })
namer.forEach((value,i, arr) => {
console.log(value)
console.log(i)
console.log(arr)
})
let totalval = 0;
const trns = [42, 45, 26, 4, 13, 16]
trns.forEach((trn) => {
    console.log(totalval,(totalval += trn), trn)
})

console.log(totalval);

namer.forEach((namer) => console.log(`congratulation ${namer}`))


const investory = [
    {namer:"Rice",price: 50000},
    {namer:"Amala",price: 100},
    {namer:"Beans",price: 5000},
    {namer:"Semo",price: 1000}
]

const prices = investory.map((value) => {
    return value.price
})
console.log(prices)

const commodities = investory.map((value) => value.namer)
console.log(commodities)


//Map method --> create a new array and apply function to each element without modifying the original array.
const arrr =[1,2,3,4,5,6];
const multiplyval = arrr.map((el) =>  el * 2);
console.log(multiplyval);

const words = ["hello","world","javascript"];
console.log(words.map(words => words.toUpperCase()))

const pricesinUSD = [200, 120, 360, 90];
const xcangeRate = 1490;

console.log(pricesinUSD.map ((usd) => usd * xcangeRate))

const users = [
    {name:"lateefah", age:300 },
    {name:"abdullah", age:950 },
    {name:"Muiz", age:1450 },
    {name:"Abdul Kabeer", age:1950 },
]
const naMe = users.map((value) => {
    return value.name
})

const product = [
    {name:"Laptop", pricE:300 },
    {name:"Desktop", pricE:950 },
    {name:"Mouse", pricE:1450 },
    {name:"Keyboard", pricE:1950 },
];

const producT = product.map((product, index) => ({
id:index + 1,    
...product
}));

console.log(producT)


// const productWithId = value.map((value, index) => ({
//     id: index +1
// }))
// console.log(productWithId)


const nums = [1,2,3,4,5,6,7,8,9,10];
const numEs = nums.map((i) => {
    if(i < 6){
        return i 
    }
})
console.log(numEs)

//filter
let evennums = nums.filter((numbers) => numbers % 2 ===0)
console.log(evennums)

const below = product.filter((products) => 
products.pricE <= 1000);
console.log(below)

const longproduct = product.filter((prod)  => {prod.name.length < 7});
cl(longproduct)

let newarr = [100,"Pelumi", false, {}, null, undefined]

const filtered = newarr.filter((data) => typeof data === "string")
console.log(filtered);



let total = 0;
const priced = [300, 950, 1450, 1950]
priced.filter((plus) => {
    cl((total += plus))
})

cl(total);