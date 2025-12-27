let firstNumber = null;
let gotNumber = false;
let decimal = false;
let secondNumber = null;
let operator = null;
let temp;
let answer = null;

function clear(){
    firstNumber = null;
    gotNumber = false;
    secondNumber = null;
    operator = null;
    answer = null;
    
    console.log("CLEARING");
}

document.addEventListener("DOMContentLoaded", function(){

    let previousScreen = document.querySelector(".previous");
    let currentScreen = document.querySelector(".current");



document.addEventListener("click", ({ target }) => {
    if(target.matches('button')) {
        
            console.log(target.innerHTML);
            temp = target.innerHTML;
            temp = String(temp);
            if(temp >=0 || temp == "."){
                if(temp == "." && decimal == true){

                }else{
                    if(temp == ".") decimal = true;
                    if(answer != null){
                        clear();
                        previousScreen.innerHTML = '';
                        currentScreen.innerHTML = '';
                    }
                    if(firstNumber == null && gotNumber == false){
                        firstNumber = temp;
                        console.log("1number is " + firstNumber);
                        previousScreen.innerHTML = firstNumber;
                    }else if(gotNumber == false){
                        if(previousScreen.innerHTML.length > 20){

                        }else{
                            firstNumber = firstNumber + temp;
                            console.log("1number is " + firstNumber);
                            previousScreen.innerHTML = firstNumber;
                        }
                        
                    }else if(secondNumber == null){
                        secondNumber = temp;
                        console.log("2number is " + secondNumber);
                        previousScreen.innerHTML = firstNumber + operator + secondNumber;
                    }else{
                        if(previousScreen.innerHTML.length > 25){

                        }else{
                            secondNumber = secondNumber + temp;
                            console.log("2number is " + secondNumber);
                            previousScreen.innerHTML = firstNumber + operator + secondNumber;
                        }
                        
                    }
                }
            }else{
                decimal = false;
                if(temp == "="){
                    if(operator == "+") answer = Number(firstNumber) + Number(secondNumber);
                    else if(operator == "-") answer = Number(firstNumber) - Number(secondNumber);
                    else if(operator == "x") answer = Number(firstNumber) * Number(secondNumber);
                    else if(operator == "/" && Number(secondNumber) == 0){
                        clear();
                        currentScreen.innerHTML = "You can't do that!";
                    }
                    else if(operator == "/") answer = Number(firstNumber) / Number(secondNumber);
                    else answer = Number(firstNumber);
                    console.log(firstNumber + operator + secondNumber + " = " + answer);
                    currentScreen.innerHTML = parseFloat(answer.toFixed(5));
                }else if(temp == "C"){
                    clear();
                    previousScreen.innerHTML = '';
                    currentScreen.innerHTML = '';
                }else if(secondNumber != null){
                    if(operator == "+") answer = Number(firstNumber) + Number(secondNumber);
                    else if(operator == "-") answer = Number(firstNumber) - Number(secondNumber);
                    else if(operator == "x") answer = Number(firstNumber) * Number(secondNumber);
                    else if(operator == "/" && Number(secondNumber) == 0){
                        clear();
                        currentScreen.innerHTML = "You can't do that!";
                    }
                    else if(operator == "/") answer = Number(firstNumber) / Number(secondNumber);
                    console.log(firstNumber + operator + secondNumber + " = " + answer);
                    operator = temp;
                    console.log("operator is " + operator);
                    gotNumber = true;
                    previousScreen.innerHTML = parseFloat(answer.toFixed(5)) + operator;
                    firstNumber = answer;
                    answer = null;
                    secondNumber = null;
                }else{
                    operator = temp;
                    console.log("operator is " + operator);
                    gotNumber = true;
                    if(answer != null) {
                        firstNumber = answer;
                        secondNumber = null;
                        currentScreen.innerHTML = "";
                        answer = null;
                    }
                    previousScreen.innerHTML = firstNumber + operator;
                }
                
            }
        
    }
})

})