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


cohort.forEach((names) => {
    console.log(names.toLowerCase())
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
console.log(poped); //to vieq the remove elemnt
console.log(number)

//*******Shift() Mthod********* *
// To remove the first element from an array
const colors = ["green","red","Black","whiite"]
console.log(colors)

const remE1 = colors.shift(); // To save the removed element in variable
console.log(colors)
console.log(remE1)


const color = ["red","Black","whiite",]
console.log(color)


//Unshift method 

const remE = color.unshift ("purple"); 
console.log(remE)

const foods = ["Semo", "Amala", "Beans", "Eba", "Pounded yam"]
console.log(foods);


//splice Method


foods.splice(3,0, "Tuwo", "Yam")
console.log(foods)


const wears = ["gucci", "D&G", "Addidas", "Versace", "Nike"]
wears.splice(2)
console.log(wears)


//Slice Method
const male = ["Daodu", "Gbojita", "Gbojumo", "Ogundiji","Akani"]
console.log(male)

const newstring = "adeyemi"
console.log(newstring.length);
const slicestring = newstring.slice(1,4);
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