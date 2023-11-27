let getNum = document.querySelectorAll('.number');
let display = document.querySelector('.total');
let getOperator = document.querySelectorAll('.operator');
let getResult = document.querySelector('.equals');
let clearButton = document.querySelector('.clear');
let deleteButton = document.querySelector('.delete');



display.textContent = "";
let operator = '';
let firstNumber = '';
let secondNumber = '';


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
    
    if(operator === ""){
        firstNumber += num;
    }else{
        secondNumber += num;
    }
}

function handleOperator(op){
    operator = op;
    firstNumber = parseFloat(display.textContent);
    display.textContent += "" + operator + "";
}



getResult.addEventListener('click', () => {
    display.textContent = operate();
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
    secondNumber = parseFloat(display.textContent);
    if(operator == "+"){
        return add(firstNumber, secondNumber);
    }else if(operator == "-"){
        return subtract(firstNumber, secondNumber);
    }else if(operator == "x"){
        return multiply(firstNumber, secondNumber);
    }else if(operator == "/"){
        return divide(firstNuber, secondNumber);
    }
}
