//generate a random number between 1 and 10 and store it as a variable
let randomNumber;
let num1;
let num2;

//get input from the user and store it as a variable
const getValues = function () {
    randomNumber = Math.floor(Math.random() * 10) + 1;
    num1 = document.getElementById('firstNumber').value;
    num2 = document.getElementById('secondNumber').value;
}

//initialize result variable
let result = document.createElement('p');

//add event listener to add button
let add = document.getElementById('add');

add.addEventListener('click', function () {
    getValues();
    let sum = parseInt(num1) + parseInt(num2);
    if (randomNumber > 5) {
        const x = Math.random();
        sum += x;
    }
    result.innerHTML = sum;
});

//add event listener to subtract button
let subtract = document.getElementById('subtract');

subtract.addEventListener('click', function () {
    getValues();
    let difference = parseInt(num1) - parseInt(num2);
    if (randomNumber > 5) {
        const x = Math.random();
        difference += x;
    }
    result.innerHTML = difference;
});

//add event listener to multiply button
let multiply = document.getElementById('multiply');

multiply.addEventListener('click', function () {
    getValues();
    let product = parseInt(num1) * parseInt(num2);
    if (randomNumber > 5) {
        const x = Math.random();
        product += x;
    }
    result.innerHTML = product;
});

//add event listener to divide button
let divide = document.getElementById('divide');

divide.addEventListener('click', function () {
    getValues();
    let quotient = parseInt(num1) / parseInt(num2);
    if (randomNumber > 5) {
        const x = Math.random();
        quotient += x;
    }
    result.innerHTML = quotient;
});

document.body.appendChild(result);