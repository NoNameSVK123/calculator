const calc = document.querySelector(".calc");
const result = document.querySelector(".result");

function add(num1,num2){
    return num1+num2;
}
function subtract(num1,num2){
    return num1-num2;
}
function multiply(num1,num2){
    return num1*num2;
}
function divide(num1,num2){
    return num1/num2;
}

function operate(){
    switch(operatorX){
        case "+":
            console.log(Number(firstnum),Number(secondnum));
            
            result.textContent = add(Number(firstnum),Number(secondnum));

            firstnum=undefined;
            operatorX=undefined;
            secondnum=undefined;
            break;
        case "-":
            result.textContent = subtract(Number(firstnum),Number(secondnum));

            firstnum=undefined;
            operatorX=undefined;
            secondnum=undefined;
            break;
        case "*":
            result.textContent = multiply(Number(firstnum),Number(secondnum));

            firstnum=undefined;
            operatorX=undefined;
            secondnum=undefined;
            break;
        case "/":
            result.textContent = divide(Number(firstnum),Number(secondnum));

            firstnum=undefined;
            operatorX=undefined;
            secondnum=undefined;
            break;
    }
}

let num;
let firstnum;
let operatorX;
let secondnum;
let operators = ["+","-","/","*"];

function addNum(number){
    num = result.textContent;
    if (num==0 || operators.includes(result.textContent)){
        result.textContent=number;
    }else if (String(num).length<9){
        result.textContent+=number;
        num = result.textContent;
    }
}

function addOperator(operator){
    operatorX=operator;
    if (operators.includes(result.textContent)){
        result.textContent = operator;
    }else{
        if (firstnum==undefined){
            firstnum=Number(result.textContent);
            result.textContent = operator;
        }else{
            secondnum=Number(result.textContent);
            result.textContent = operator;
        }
    }
}

function clear(){
    result.textContent="0";
    num=0
}

calc.addEventListener("click", (e) => {
    console.log("click");
    
    let target = e.target;

    switch(target.id) {

        case '1':
            addNum(1);
            break;
        case '2':
            addNum(2);
            break;
        case '3':
            addNum(3);
            break;
                    
        case '4':
            addNum(4);
            break;
         case '5':
            addNum(5);
            break;
        case '6':
            addNum(6);
            break;
        case '7':
            addNum(7);
            break;
        case '8':
            addNum(8);
            break;
        case '9':
            addNum(9);
            break;
        case '0':
            addNum(0);
            break;
        case 'add':
                addOperator("+");
            break;
        case 'subtract':
            addOperator("-");
            break;
        case 'divide':
            addOperator("/");
            break;
        case 'multiply':
            addOperator("*");
            break;
        case 'ac':
            clear();
            break;
        case 'percent':
                
            break;
        case 'toggle':
                
            break;
        case 'decimal':
                
            break;
        case 'equals':
                operate();
            break;
    }
});

