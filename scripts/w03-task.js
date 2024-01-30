/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {

    return number1 +number2;
}

function addNumbers() {

    let num1 = Number(document.querySelector('#add1').value);
    let num2 = Number(document.querySelector('#add2').value);

    document.querySelector('#sum').value = add(num1, num2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);
/* Function Expression - Subtract Numbers */
function subtract(number1, number2) {

    return number1 - number2;
}

function subtractNumbers() {

    let num1 = Number(document.querySelector('#subtract1').value);
    let num2 = Number(document.querySelector('#subtract2').value);

    document.querySelector('#difference').value = subtract(num1, num2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);
/* Arrow Function - Multiply Numbers */
let multiply = (number1, number2) => number1 * number2;

let multiplyNumbers = () => {

    let num1 = Number(document.querySelector('#factor1').value);
    let num2 = Number(document.querySelector('#factor2').value);

    document.querySelector('#product').value = multiply(num1, num2);
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);
/* Open Function Use - Divide Numbers */
let divide = (number1, number2) => number1 / number2;

function divideNumbers() { // The standard function call was used for the multi-line function because I still don't understand that point of not having a concise lambda.

    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);

    document.querySelector('#quotient').value = divide(dividend, divisor);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);
/* Decision Structure */
function getTotalDue() {

    let subtotal = Number(document.querySelector('#subtotal').value);
    let isMember = Boolean(document.querySelector('#member').checked);

    let finalOut = (calcTotal(subtotal, isMember)).toFixed(2);

    if (Number(finalOut) < 10) {
        document.querySelector('#total').innerHTML = `$ 0${finalOut}`
    } else {
        document.querySelector('#total').innerHTML = `$ ${finalOut}`
    }
}

let calcTotal = (total, memStatus) => {

    if (memStatus) {
        return total * 0.80;
    } else {
        return total;
    }
}

document.querySelector('#getTotal').addEventListener('click', getTotalDue);
/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.querySelector('#array').innerHTML = numbersArray;
/* Output Odds Only Array */
document.querySelector('#odds').innerHTML = numbersArray.filter(number => !(number % 2 === 0));
/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = numbersArray.filter(number => (number % 2 === 0));
/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').innerHTML = numbersArray.reduce((sum, number) => sum + number);
/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').innerHTML = numbersArray.map(number => number * 2);
/* Output Sum of Multiplied by 2 Array */
let multipliedList = numbersArray.map(number => number * 2);
document.querySelector('#sumOfMultiplied').innerHTML = multipliedList.reduce((sum, number) => sum + number);