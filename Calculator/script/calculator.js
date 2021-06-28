const inputOperandSumOne = document.getElementById('input1');
const inputOperandSumTwo = document.getElementById('input2');
const inputOperandSubtractionOne = document.getElementById('input3');
const inputOperandSubtractionTwo = document.getElementById('input4');
const inputOperandMultiplicationOne = document.getElementById('input5');
const inputOperandMultiplicationTwo = document.getElementById('input6');
const inputOperandDivisionOne = document.getElementById('input7');
const inputOperandDivisionTwo = document.getElementById('input8');
const button = document.getElementById('button');


function operators1(inputSumResult) {
	document.getElementById('sum').innerHTML = inputSumResult;
}

function operators2(inputSubtractionResult) {
	document.getElementById('subtraction').innerHTML = inputSubtractionResult;
}

function operators3(inputMultiplicationResult) {
	document.getElementById('multiplication').innerHTML = inputMultiplicationResult;
}

function operators4(inputDivisionResult) {
	document.getElementById('division').innerHTML = inputDivisionResult;
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

	operators1(inputSum);
	operators2(inputSubtraction);
	operators3(inputMultiplication);
	operators4(inputDivision);
});

function resets() {
	document.getElementById('input1').value = "";
	document.getElementById('input2').value = "";
	document.getElementById('input3').value = "";
	document.getElementById('input4').value = "";
	document.getElementById('input5').value = "";
	document.getElementById('input6').value = "";
	document.getElementById('input7').value = "";
	document.getElementById('input8').value = "";
	document.getElementById('sum').innerHTML = "";
	document.getElementById('subtraction').innerHTML = "";
	document.getElementById('multiplication').innerHTML = "";
	document.getElementById('division').innerHTML = "";
}

reset.addEventListener('click', function () {
	resets();
});





