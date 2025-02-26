//Question 1
let numbers = [3, 7, 2, 9, 5];
let squares = [];
for (let i = 0; i < numbers.length; i++) {
    squares[i] = numbers[i] ** 2;
}

console.log(squares); 

//Question 2
let arr = [1, 2, 3, 5, 6, 7];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 5) {
        break;
    }
    console.log(arr[i]);
}

//Question 3

let colors = ["red", "green", "blue"];
for (let color of colors) {
    console.log(color);
}

//Question 4




//Question 5
let nums = "result";
let result = nums > 0 ? "Positive" : nums === 0 ? "Zero" : "Negative";
console.log(result)

//Question 6
let num = 15;

let Result = (num % 3 === 0 && num % 5 === 0) ? "FizzBuzz" :
                (num % 3 === 0) ? "Fizz" :
                (num % 5 === 0) ? "Buzz" : 
                num;

console.log(Result);