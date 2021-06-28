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

button.addEventListener('click', function () {
	const inputOperandSumOneValue = inputOperandSumOne.value;
	const inputOperandSumTwoValue = inputOperandSumTwo.value;
	const inputSum = parseFloat(inputOperandSumOneValue, 10) + parseFloat(inputOperandSumTwoValue, 10);

	const inputOperandSubtractionOneValue = inputOperandSubtractionOne.value;
	const inputOperandSubtractionTwoValue = inputOperandSubtractionTwo.value;
	const inputSubtraction = parseFloat(inputOperandSubtractionOneValue, 10) - parseFloat(inputOperandSubtractionTwoValue, 10);

	const inputOperandMultiplicationOneValue = inputOperandMultiplicationOne.value;
	const inputOperandMultiplicationTwoValue = inputOperandMultiplicationTwo.value;
	const inputMultiplication = parseFloat(inputOperandMultiplicationOneValue, 10) * parseFloat(inputOperandMultiplicationTwoValue, 10);

	const inputOperandDivisionOneValue = inputOperandDivisionOne.value;
	const inputOperandDivisionTwoValue = inputOperandDivisionTwo.value;
	const inputDivision = parseFloat(inputOperandDivisionOneValue, 10) / parseFloat(inputOperandDivisionTwoValue, 10);

	operators(inputSum, 'sum');
	operators(inputSubtraction, 'subtraction');
	operators(inputMultiplication, 'multiplication');
	operators(inputDivision, 'division');
});

function resets(divResult, divId) {
	document.getElementById(divId).value = divResult;
	document.getElementById(divId).innerHTML = divResult;
}

reset.addEventListener('click', function () {
	resets('', 'input1');
	resets('', 'input2');
	resets('', 'input3');
	resets('', 'input4');
	resets('', 'input5');
	resets('', 'input6');
	resets('', 'input7');
	resets('', 'input8');
	resets('', 'sum');
	resets('', 'multiplication');
	resets('', 'subtraction');
	resets('', 'division');
});





