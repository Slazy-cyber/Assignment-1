function sum() {
    let firstNumber = parseInt( num1.value);
    let secondNumber = parseInt(num2.value);
    const sum = firstNumber + secondNumber;
    let answer1 = "The answer is " + sum;
    console.log(sum);
    answer.innerHTML = answer1;
}


function difference() {
    let firstNumber = num1.value;
    let secondNumber = num2.value;
    const difference = firstNumber - secondNumber;
    let answer2 = "The answer is " + difference;
    console.log(difference);
    answer.innerHTML = answer2;
}

function product() {
    let secondNumber = (num2.value);
    let firstNumber = (num1.value);
    const product = firstNumber * secondNumber;
    let answer3 = "The answer is " + product;
    console.log(product)
    answer.innerHTML = answer3;
}


function quotient() {
    let firstNumber = parseInt( num1.value);
    let secondNumber = parseInt(num2.value);
    const quotient = firstNumber / secondNumber;
    let answer4 = "The answer is " + quotient;
    console.log(quotient);
    answer.innerHTML = answer4;
}

function exponential() {
    let firstNumber = parseInt( num1.value);
    let secondNumber = parseInt(num2.value);
    const exponential = firstNumber ** secondNumber;
    let answer5 = "The answer is " + exponential;
    console.log(exponential);
    answer.innerHTML = answer5;
}

function modulus() {
    let firstNumber = parseInt( num1.value);
    let secondNumber = parseInt(num2.value);
    const modulus = firstNumber % secondNumber;
    let answer6 = "The answer is " + modulus;
    console.log(modulus);
    answer.innerHTML = answer6;
}