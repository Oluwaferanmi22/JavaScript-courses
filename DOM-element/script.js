//Accessing elements

//Classname

const body = document.getElementsByClassName("body")

console.log(body)

//Id

// const header = document.getElementById("header")

// console.log(header)

// //tag name

// const hone =document.getElementsByTagName("h1")

// console.log(hone)


//query selector

// const classElements = document.querySelector(".body")

// console.log(classElements)

//document.querySelector
//document,querySelectorAll

// const all = document.querySelectorAll("h1")

// console.log(all)

// Dom manipulation

// 1) Text content
// 2) Inner html
// 3) Styling
// 4) Adding  and removing of classes
// 5) Event listener


//TExtCONTENT

const header = document.getElementById("header")

header.textContent = "Hello universe"

const p =document.querySelector("p")

p.textContent = ("I am a student")



//INNERHTML

const container = document.querySelector('div')

container.innerHTML = `
<h1>I do code</h1>
<p>and play games </p>
`

// STYLING

container.style.backgroundColor = "black"
container.style.color = "white"


//ADDING AND REMOVING OF CLASSES


const h6 = document.querySelector('h6')

h6.textContent = "i enjoy gaming"

// ADDING A CLASS TO H6

h6.classList.add("subheader")

p.classList.remove("body")

const bodyElements = document.getElementsByClassName("body")

console.log(bodyElements)


// Adding Event Listener


//click event

document.querySelector("button").addEventListener("click",function(){

const message = document.getElementById("message")

if(message.textContent === "Hello!"){

    message.textContent = "Button Clicked"

}else{
    message.textContent = "Hello!"
}

})


//Mouse event

document.getElementById("box").addEventListener("mouseover",function(){
    document.getElementById("box").style.backgroundColor= "yellow"
})

document.getElementById("box").addEventListener("mouseout",function(){
    document.getElementById("box").style.backgroundColor= "black"
})

//keyup

document.getElementById("textInput").addEventListener("keyup", function(event){
    document.getElementById("output").textContent = 'you pressed:' + event.key
})


function greet(name){
    alert("hello," + name + "!")
}

document.getElementById("greetBtn").addEventListener("click",() => greet("Feranmi"))



const newBox = document.createElement('div')

newBox.textContent = "how are you doing today"

document.body.appendChild(newBox)

const box = document.getElementById ("box")

const newH1 = document.createElement("h1")

newH1.textContent = "WTF"
newH1.style.color = "white"

box.appendChild(newH1)
