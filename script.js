const calc = document.querySelector(".calc");
const result = document.querySelector(".result");
const pluser = document.querySelector("#add");
const minuser = document.querySelector("#subtract");
const divider = document.querySelector("#divide");
const multiplier = document.querySelector("#multiply");

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

function operate(perator){
    if (firstnum==undefined || perator==undefined){

    }else{
        if (secondnum==undefined){
            secondnum=Number(result.textContent);
        }
        switch(perator){
            
            case "+":
                
                result.textContent = add(Number(firstnum),Number(secondnum));
    
                firstnum=undefined;
                secondnum=undefined;
                break;
            case "-":
                result.textContent = subtract(Number(firstnum),Number(secondnum));
    
                firstnum=undefined;
                secondnum=undefined;
                break;
            case "*":
                result.textContent = multiply(Number(firstnum),Number(secondnum));
    
                firstnum=undefined;
                secondnum=undefined;
                break;
            case "/":
                result.textContent = divide(Number(firstnum),Number(secondnum));
    
                firstnum=undefined;
                secondnum=undefined;
                break;
        }
    }
}

let num;
let firstnum;
let operatorX;
let operatorY;
let secondnum;
let operators = ["+","-","/","*"];

function addNum(number){
    num = result.textContent;
    if (number=="."){
        result.textContent+=number;
    }else{
        if (num=="0" || operatorY!=undefined){
            operatorY=undefined;
            result.textContent=number;
        }else if (String(num).length<9){
            result.textContent+=number;
            num = result.textContent;
        }
    }
}

function addOperator(operator){
    let previous = operatorX;
    operatorX=operator;
    operatorY=operator;
    if (operators.includes(result.textContent)){
        result.textContent = operator;
    }else{
        if (firstnum==undefined){
            firstnum=Number(result.textContent);
        }else if(secondnum==undefined){
            secondnum=Number(result.textContent);
            operate(previous);
            firstnum=Number(result.textContent);
        }
    }
}

function clear(){
    result.textContent="0";
    firstnum,operatorX,secondnum = undefined;
    num=0
}

calc.addEventListener("click", (e) => {
    
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
                minuser.classList.remove("selected");
                divider.classList.remove("selected");
                multiplier.classList.remove("selected");
                target.classList.add("selected");
                addOperator("+");
            break;
        case 'subtract':
            pluser.classList.remove("selected");
            divider.classList.remove("selected");
            multiplier.classList.remove("selected");
            target.classList.add("selected");
            addOperator("-");
            break;
        case 'divide':
            minuser.classList.remove("selected");
            pluser.classList.remove("selected");
            multiplier.classList.remove("selected");
            target.classList.add("selected");
            addOperator("/");
            break;
        case 'multiply':
            minuser.classList.remove("selected");
            divider.classList.remove("selected");
            pluser.classList.remove("selected");
            target.classList.add("selected");
            addOperator("*");
            break;
        case 'ac':
            minuser.classList.remove("selected");
            pluser.classList.remove("selected");
            multiplier.classList.remove("selected");
            target.classList.add("selected");
            clear();
            break;
        case 'backspace':
            if (result.textContent.split("").length==1){
                result.textContent="0";
            }else if (result.textContent!="0"){
                let numero = result.textContent.split("");
                numero.pop();
                
                result.textContent = numero.join("");
            }      
            break;
        case 'toggle':
                let cislo = result.textContent.split("");
                if (cislo[0]=="-"){
                    cislo.shift();
                }else{
                    cislo.unshift("-");
                }
                result.textContent=cislo.join("");
            break;
        case 'decimal':
            if (!result.textContent.split("").includes(".")){
                addNum(".");
            }
            break;
        case 'equals':
            minuser.classList.remove("selected");
            divider.classList.remove("selected");
            multiplier.classList.remove("selected");
            pluser.classList.remove("selected");
            operate(operatorX);
            break;
    }
});

window.addEventListener("keydown", (e) => {
    
    let target = e.key;
    

    switch(target) {

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
        case '+':
                minuser.classList.remove("selected");
                divider.classList.remove("selected");
                multiplier.classList.remove("selected");
                pluser.classList.add("selected");
                addOperator("+");
            break;
        case '-':
            pluser.classList.remove("selected");
            divider.classList.remove("selected");
            multiplier.classList.remove("selected");
            minuser.classList.add("selected");
            addOperator("-");
            break;
        case '/':
            minuser.classList.remove("selected");
            pluser.classList.remove("selected");
            multiplier.classList.remove("selected");
            divider.classList.add("selected");
            addOperator("/");
            break;
        case '*':
            minuser.classList.remove("selected");
            divider.classList.remove("selected");
            pluser.classList.remove("selected");
            multiplier.classList.add("selected");
            addOperator("*");
            break;
        case 'ac':
            minuser.classList.remove("selected");
            pluser.classList.remove("selected");
            multiplier.classList.remove("selected");
            target.classList.add("selected");
            clear();
            break;
        case 'Backspace':
            if (result.textContent.split("").length==1){
                result.textContent="0";
            }else if (result.textContent!="0"){
                let numero = result.textContent.split("");
                numero.pop();
                
                result.textContent = numero.join("");
            }      
            break;
        case 'toggle':
                let cislo = result.textContent.split("");
                if (cislo[0]=="-"){
                    cislo.shift();
                }else{
                    cislo.unshift("-");
                }
                result.textContent=cislo.join("");
            break;
        case '.':
            if (!result.textContent.split("").includes(".")){
                addNum(".");
            }
            break;
        case '=':
            minuser.classList.remove("selected");
            divider.classList.remove("selected");
            multiplier.classList.remove("selected");
            pluser.classList.remove("selected");
            operate(operatorX);
            break;
    }
});

