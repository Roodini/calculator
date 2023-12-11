let getNum = document.querySelectorAll('.number');
let display = document.querySelector('.total');
let getOperator = document.querySelectorAll('.operator');
let getResult = document.querySelector('.equals');
let clearButton = document.querySelector('.clear');
let deleteButton = document.querySelector('.delete');



display.textContent = "";
let operator = null;



deleteButton.addEventListener('click', () => {
    display.textContent = display.textContent.slice(0,-1);
})
clearButton.addEventListener('click', () => {
    display.textContent = "";
})
getNum.forEach((number) => {
    number.addEventListener('click', (e) => {
    handleNumber(e.target.textContent);
    });
});

getOperator.forEach((op) => {
    op.addEventListener('click', (e) => {
       handleOperator(e.target.textContent);
    });
});

function handleNumber(num){
    display.textContent += num;
}


function firstNum(){
    const operatorIndex = display.textContent.indexOf(operator);
    if(operatorIndex !== -1){
     return parseFloat(display.textContent.slice(0, operatorIndex));
    }else{
        return null;
    }
}

function secondNum(){
    const operatorIndex = display.textContent.indexOf(operator);
    if(operatorIndex !== -1){
    return parseFloat(display.textContent.slice(operatorIndex + operator.length));
    }else{
        return null;
    }
}


function handleOperator(op){
    operator = op;
    display.textContent += operator;
}



getResult.addEventListener('click', () => {
    display.textContent = operate();
    if(!operator){
        display.textContent = "You need a second number!";
    }
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

function operate(){
    if(operator == "+"){
        return add(firstNum(), secondNum());
    }else if(operator == "-"){
        return subtract(firstNum(), secondNum());
    }else if(operator == "x"){
        return multiply(firstNum(), secondNum());
    }else if(operator == "/"){
        return divide(firstNum(), secondNum());
    }
}


//things to work on:
//set up the decimal and make it work
//limit the amount of operators
//set up for negative numbers
//look into how i can get undfined or errors on calculator when dividing by 0