//add event listener to add button
var add = document.getElementById('add');

//Add numbers on click
add.addEventListener('click', function () {
    var num1 = document.getElementById('firstNumber').value;
    var num2 = document.getElementById('secondNumber').value;
    var sum = parseInt(num1) + parseInt(num2);
    var result = document.createElement('p');
    result.innerHTML = sum;
    document.body.appendChild(result);
});

//add event listener to subtract button
var subtract = document.getElementById('subtract');

//Subtract numbers on click
subtract.addEventListener('click', function () {
    var num1 = document.getElementById('firstNumber').value;
    var num2 = document.getElementById('secondNumber').value;
    var difference = parseInt(num1) - parseInt(num2);
    var result = document.createElement('p');
    result.innerHTML = difference;
    document.body.appendChild(result);
});