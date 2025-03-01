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

function operate(num1,operator,num2){

}

let num;
let firstnum;
let operator;
let secondnum;

function addNum(number){
    num = result.textContent;
    if (num==0){
        
    }
    if (String(num).length<9){
        result.textContent+=number;
        num = result.textContent;
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
                
            break;
        case 'subtract':
                
            break;
        case 'divide':
                
            break;
        case 'multiply':
                
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
    }
});

