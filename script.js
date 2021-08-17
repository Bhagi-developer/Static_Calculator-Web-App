
//  FUNCTION FOR FORMATTING
function formatNum(num) {
    var n = Number(num);
    let val = n.toLocaleString("en");
    return (val);
}


//  FUNCTION FOR  REVERSING FORMATTING
function RformatNum(num) {
    return Number(num.replace(/,/g, ''));
}


//FUNCTION FOR STORING DATA
let input1;
let operator;

function storeData(num1, op) {
    input1 = num1;
    operator = op;
}


//FUNCTION FOR PUT INPUT VALUE
var inPara = document.querySelector(".Input-value");

function putIn(num) {
    inPara.innerHTML = num;
}



//ADDING EVENT LISTENERS TO OPERATORS
var operators = document.getElementsByClassName("operator");

for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", function () {

        input=document.querySelector(".Input-value").innerHTML;
        document.querySelector(".history-value").innerHTML = RformatNum(input) + " " + this.id + " ";
        storeData(input, this.id);
        input = "";
        putIn("");


    })
}

// FOR PRTINTING RESULT 
var equal = document.querySelector(".sOperator").addEventListener("click", function () {

    if (operator == "-") {
        putIn(input1 - input);
        document.querySelector(".history-value").innerHTML = "";
    }
    if (operator == "+") {
        putIn(input1 + input);
        document.querySelector(".history-value").innerHTML = "";

    }
    if (operator == "x") {
        putIn(input1 * input);
        document.querySelector(".history-value").innerHTML = "";
    }
    if (operator == "/") {
        putIn(input1 / input);
        document.querySelector(".history-value").innerHTML = "";
    }
    if (operator == "%") {
        putIn(input1 % input);
        document.querySelector(".history-value").innerHTML = "";
    }


})


var input = "";

//ADDING EVENT LISTENERS TO VALUES
var numbers = document.getElementsByClassName("digit");

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function () {
        input = RformatNum(document.querySelector(".Input-value").innerHTML) + this.id;
        if (input != "") {
            putIn(formatNum(input));
        }
    })
}




//ADDING EVENT LISTENERS TO CLEAR
var clear = document.querySelector(".clear");
clear.addEventListener("click", function clear() {
    document.querySelector(".history-value").innerHTML = "";
    input = "";
    putIn(input);
});

//ADDING EVENT LISTENERS TO CLEARONE
var clearOne = document.querySelector(".clearOne");
clearOne.addEventListener("click", function cleaOner() {
   
    let val=  document.querySelector(".Input-value").innerHTML ;
    // val=RformatNum(val);
    val = val.substring(0, val.length - 1);
    putIn(formatNum(val));

});
