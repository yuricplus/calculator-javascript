var btnOn = document.querySelector("#on-off");
var btnCe = document.querySelector("#ce")
var valueInput = document.querySelector("#valueInput")
let calculatorOnOff = false;
let number1 = document.querySelector("#one")
let number2 = document.querySelector("#two")
let number3 = document.querySelector("#tree")
let number4 = document.querySelector("#four")
let number5 = document.querySelector("#five")
let number6 = document.querySelector("#six")
let number7 = document.querySelector("#seven")
let number8 = document.querySelector("#eight")
let number9 = document.querySelector("#nine")
let number0 = document.querySelector("#zero")
const addNumber = document.querySelector("#add")
const multiplyNumber = document.querySelector("#multiply")
const divideNumber = document.querySelector("#divide");
const substrationNumber = document.querySelector("#substration");
let add = false;
let multiply = false;
let divide = false;
let substration = false
var fisrtNumber = null
var lastNumber = null
var like = document.querySelector("#results")
var result = null

btnCe.onclick = function(){
    valueInput.value = ""
}

btnOn.onclick = function() {
    if (calculatorOnOff == false) {
        calculatorOnOff = true
        valueInput.value = ""
    } else {
        valueInput.value = ""
        calculatorOnOff = false
    }
    return showNumber();
}

function showNumber() {
    if (calculatorOnOff === true) {
        number0.onclick = function() {
            valueInput.value += "0"
        }
        number1.onclick = function() {
            valueInput.value += "1"
        }
        number2.onclick = function() {
            valueInput.value += "2"
        }
        number3.onclick = function() {
            valueInput.value += "3"
        }
        number4.onclick = function() {
            valueInput.value += "4"
        }
        number5.onclick = function() {
            valueInput.value += "5"
        }
        number6.onclick = function() {
            valueInput.value += "6"
        }
        number7.onclick = function() {
            valueInput.value += "7"
        }
        number8.onclick = function() {
            valueInput.value += "8"
        }
        number9.onclick = function() {
            valueInput.value += "9"
        }
        addNumber.onclick = function() {
            add = true
            multiply = false
            divide = false
            substration = false
            fisrtNumber = valueInput.value
            valueInput.value = ""
        }
        multiplyNumber.onclick = function() {
            multiply = true;
            add = false
            divide = false
            substration = false
            fisrtNumber = valueInput.value
            valueInput.value = ""
        }
        divideNumber.onclick = function(){
            divide = true;
            add = false
            multiply = false
            substration = false
            fisrtNumber = valueInput.value
            valueInput.value = ""
        }
        substrationNumber.onclick = function(){
            substration = true;
            add = false 
            multiply = false
            divide = false
            fisrtNumber = valueInput.value
            valueInput.value = ""
        }

        like.onclick = function() {
            if (add == true) {
                results = +fisrtNumber + +valueInput.value;
            }
            if (divide == true) {
                results = fisrtNumber / valueInput.value;
            }
            if (substration == true) {
                results = fisrtNumber - valueInput.value;
            }
            if (multiply == true) {
                results = fisrtNumber * valueInput.value;
            }
            valueInput.value = results
        }
    }
    if (calculatorOnOff === false) {
        valueInput.value = "LIGUE"
        valueInput.value = ""
    }
}