let getNum = document.querySelectorAll('.number');
let currentOperationScreen = document.querySelector('.current');
let lastOperationScreen = document.querySelector('.last');  // Fix the class name here
let getOperator = document.querySelectorAll('.operator');
let getResult = document.querySelector('.equals');
let clearButton = document.querySelector('.clear');
let deleteButton = document.querySelector('.delete');
let decimal = document.querySelector('.decimal');

let firstNum = '';
let secondNum = '';
let currentOperator = null;
let shouldResetScreen = false;

deleteButton.addEventListener('click', () => {
    currentOperationScreen.textContent = currentOperationScreen.textContent.slice(0, -1);
});

clearButton.addEventListener('click', () => {
    currentOperationScreen.textContent = "0";
    lastOperationScreen.textContent = '';
    firstNum = "";
    secondNum = "";
    currentOperator = null;
});

getNum.forEach((number) => {
    number.addEventListener('click', (e) => {
        handleNumber(e.target.textContent);
    });
});

getOperator.forEach((op) => {
    op.addEventListener('click', (e) => {
        getOperation(e.target.textContent);
    });
});

function handleNumber(num){
    if (currentOperationScreen.textContent === '0' || shouldResetScreen){
    resetScreen();
    }
    currentOperationScreen.textContent += num
    if(currentOperationScreen.textContent.includes(decimal)){
        currentOperationScreen.textContent += '.';
    }
}

function resetScreen(){
    currentOperationScreen.textContent = '';
    shouldResetScreen = false;
}

function getOperation(operator) {
    if (currentOperator !== null) evaluate();
    firstNum = currentOperationScreen.textContent;
    currentOperator = operator;
    lastOperationScreen.textContent = `${firstNum} ${currentOperator}`;
    shouldResetScreen = true;
}

function evaluate(){
    if(currentOperator == null) return;
    if(currentOperator == "/" && currentOperationScreen.textContent == '0'){
        alert("You can't divide by 0! Press Clear and try again");
    }
    secondNum = currentOperationScreen.textContent;
    let result = operate(firstNum, secondNum);
    currentOperationScreen.textContent = roundAnswer(result);

    lastOperationScreen.textContent = `${firstNum} ${currentOperator} ${secondNum} =`
    currentOperator = null;
    
    firstNum = "";
    secondNum = "";
    shouldResetScreen = true;
}


getResult.addEventListener('click', () => {
    evaluate();
    
})




function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}

function roundAnswer(number){
    return Math.round(number * 100) / 100;
}


function operate(a, b){
    a = Number(a);
    b = Number(b);
    if(currentOperator == "+"){
        return add(a, b);
    }else if(currentOperator == "-"){
        return subtract(a, b);
    }else if(currentOperator == "x"){
        return multiply(a, b);
    }else if(currentOperator == "/"){
        return divide(a, b);
    }
}


//things to work on:
//set up the decimal and make it work
//limit the amount of operators
//set up for negative numbers
//look into how i can get undfined or errors on calculator when dividing by 0
//function firstNum(){
    //const operatorIndex = display.textContent.indexOf(operator);
    //if(operatorIndex !== -1){
     //return parseFloat(display.textContent.slice(0, operatorIndex));
    //}else{
       // return null;
    //}
//}

//function secondNum(){
    //const operatorIndex = display.textContent.indexOf(operator);
    //if(operatorIndex !== -1){
    //return parseFloat(display.textContent.slice(operatorIndex + operator.length));
    //}else{
        //return null;
    //}
//}
