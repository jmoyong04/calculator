/*

if function already contains an equals when a button is pressed
    make it so func is only the resulting number after the parenthesis and clear the display

*/
const button = document.querySelector(".buttons");
button.addEventListener('click', handleClick)
let display = document.querySelector(".inputs");
let func = ""
let operator;
function handleClick(e){
    if(display.textContent.includes('=')){
        let index = display.textContent.indexOf('=')
        display.textContent = display.textContent.slice(index+1)
        func = display.textContent
    }
    const target = e.target;
    switch (true){
        case target.classList.contains("digit"):
            func += target.textContent;
            display.textContent += target.textContent;
            break;
        case target.classList.contains("operator"):
            operator = target.textContent
            func += target.textContent;
            display.textContent += target.textContent;
            break;
        case target.classList.contains("clear"):
            func = "";
            operator ="";
            display.textContent="";
            break;
        case target.classList.contains("operate"):
            operate(func,operator);
        }
    }



function operate(func, operator){
    let result;
    const seperatedFunc = func.split(operator);
    console.log(seperatedFunc);
    switch(operator){
        case '+':
            result = add(seperatedFunc[0], seperatedFunc[1]);
            break;
        case '-':
            result = subtract(seperatedFunc[0], seperatedFunc[1]);
            break;
        case '/':
            if(seperatedFunc[1] == 0){
                result = "No Dividing by zero"
                break;
            }
            result = divide(seperatedFunc[0], seperatedFunc[1]);
            break;
        case '*':
            result = multiply(seperatedFunc[0], seperatedFunc[1]);
            break;

    }
    display.textContent += ` = ${result.toFixed(2)}`

    function add(a,b){
        return +a + +b
    }
    function subtract(a,b){
        return +a - +b
    }
    function divide(a,b){
        return +a / +b
    }
    function multiply(a,b){
        return +a * +b
    }
}

