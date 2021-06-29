const inputOperandSumOne = document.getElementById('input1');
const inputOperandSumTwo = document.getElementById('input2');
const inputOperandSubtractionOne = document.getElementById('input3');
const inputOperandSubtractionTwo = document.getElementById('input4');
const inputOperandMultiplicationOne = document.getElementById('input5');
const inputOperandMultiplicationTwo = document.getElementById('input6');
const inputOperandDivisionOne = document.getElementById('input7');
const inputOperandDivisionTwo = document.getElementById('input8');
const button = document.getElementById('button');


function operators(inputResult, elementId) {
	document.getElementById(elementId).innerHTML = inputResult;
}

function sum(inputOperandSumOneValue, inputOperandSumTwoValue) {
	return parseFloat(inputOperandSumOneValue, 10) + parseFloat(inputOperandSumTwoValue, 10);
}

function subtraction(inputOperandSubtractionOneValue, inputOperandSubtractionTwoValue) {
	return parseFloat(inputOperandSubtractionOneValue, 10) - parseFloat(inputOperandSubtractionTwoValue, 10);
}

function multiplication(inputOperandMultiplicationOneValue, inputOperandMultiplicationTwoValue) {
	return parseFloat(inputOperandMultiplicationOneValue, 10) * parseFloat(inputOperandMultiplicationTwoValue, 10);
}

function division(inputOperandDivisionOneValue, inputOperandDivisionTwoValue) {
	return parseFloat(inputOperandDivisionOneValue, 10) / parseFloat(inputOperandDivisionTwoValue, 10);
}

function calculate(inputOperandOne, inputOperandTwo, operation) {
	return operation(inputOperandOne.value, inputOperandTwo.value);
}


button.addEventListener('click', function () {

	const inputSum = calculate(inputOperandSumOne, inputOperandSumTwo, sum);

	const inputSubtraction = calculate(inputOperandSubtractionOne, inputOperandSubtractionTwo, subtraction);

	const inputMultiplication = calculate(inputOperandMultiplicationOne, inputOperandMultiplicationTwo, multiplication)

	const inputDivision = calculate(inputOperandDivisionOne, inputOperandDivisionTwo, division)

	operators(inputSum, 'sum');
	operators(inputSubtraction, 'subtraction');
	operators(inputMultiplication, 'multiplication');
	operators(inputDivision, 'division');
});

function resetsInput(inputId) {
	document.getElementById(inputId).value = '';
}

function resetsDiv(divId) {
	document.getElementById(divId).innerHTML = '';
}
reset.addEventListener('click', function () {
	resetsInput('input1');
	resetsInput('input2');
	resetsInput('input3');
	resetsInput('input4');
	resetsInput('input5');
	resetsInput('input6');
	resetsInput('input7');
	resetsInput('input8');
	resetsDiv('sum');
	resetsDiv('multiplication');
	resetsDiv('subtraction');
	resetsDiv('division');
});





