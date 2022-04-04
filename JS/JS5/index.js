// var buttonPlus = document.getElementById('buttonPlus');
// var buttonMinus = document.getElementById('buttonMinus');
// var buttonMultiply = document.getElementById('buttonMultiply');
// var buttonDevide = document.getElementById('buttonDevide');

var operationButtons = document.getElementsByClassName('operation-button');

var input1 = document.getElementById('number1');
var input2 = document.getElementById('number2');

function getNumber(variable){
    return Number(variable.value);
}

function makeOperation(operationCode){
    var result;
    var number1=getNumber(input1);
    var number2=getNumber(input2);
    switch(operationCode){
        case '+':
            result=number1+number2;
            break;
        case '-':
            result=number1-number2;
            break;
        case '*':
            result=number1*number2;
            break;
        case '/':
            result=number1/number2;
            break;
        default:
            result='Сценарий не инициализирован'    
    }
    window.alert(result);
}

function onOperationButtonClick(eventObject)
{
    var clickedElement = eventObject.currentTarget;
    var operation = clickedElement.innerHTML;
    makeOperation(operation);
}

function addCommonEventListener(i){
    operationButtons[i].addEventListener('click'. onOperationButtonClick); 

}

for (let i = 0; i < operationButtons.length; i++) {
    operationButtons[i].addEventListener('click', onOperationButtonClick);
}