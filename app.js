//add event listener to add button
var add = document.getElementById('add');
var num1 = document.getElementById('firstNumber').value;
var num2 = document.getElementById('secondNumber').value;
var result = document.createElement('p');

//Add numbers on click
add.addEventListener('click', function () {
    var sum = parseInt(num1) + parseInt(num2);
    result.innerHTML = sum;
});

//add event listener to subtract button
var subtract = document.getElementById('subtract');

//Subtract numbers on click
subtract.addEventListener('click', function () {
    var difference = parseInt(num1) - parseInt(num2);
    result.innerHTML = difference;
});

//add event listener to multiply button
var multiply = document.getElementById('multiply');

//Multiply numbers on click
multiply.addEventListener('click', function () {
    var product = parseInt(num1) * parseInt(num2);
    result.innerHTML = product;
});

//add event listener to divide button
var divide = document.getElementById('divide');

//Divide numbers on click
divide.addEventListener('click', function () {
    var quotient = parseInt(num1) / parseInt(num2);
    result.innerHTML = quotient;
});
document.body.appendChild(result);