const inputOperandSumOne = document.getElementById('input1');
const inputOperandSumTwo = document.getElementById('input2');
const inputOperandSubtractionOne = document.getElementById('input3');
const inputOperandSubtractionTwo = document.getElementById('input4');
const inputOperandMultiplicationOne = document.getElementById('input5');
const inputOperandMultiplicationTwo = document.getElementById('input6');
const inputOperandDivisionOne = document.getElementById('input7');
const inputOperandDivisionTwo = document.getElementById('input8');
const button = document.getElementById('button');
const reset = document.getElementById('reset');
const inputOperatos = document.getElementById('input-operators');
const buttonTranslation = document.getElementById('button-translation');

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

	if (inputOperandSumOneValue && inputOperandSumTwoValue) {
		const inputSum = parseFloat(inputOperandSumOneValue, 10) + parseFloat(inputOperandSumTwoValue, 10);
		operators1(inputSum);
	}

	const inputOperandSubtractionOneValue = inputOperandSubtractionOne.value;
	const inputOperandSubtractionTwoValue = inputOperandSubtractionTwo.value;

	if (inputOperandSubtractionOneValue && inputOperandSubtractionTwoValue) {
		const inputSubtraction = parseFloat(inputOperandSubtractionOneValue, 10) - parseFloat(inputOperandSubtractionTwoValue, 10);
		operators2(inputSubtraction);
	}

	const inputOperandMultiplicationOneValue = inputOperandMultiplicationOne.value;
	const inputOperandMultiplicationTwoValue = inputOperandMultiplicationTwo.value;

	if (inputOperandMultiplicationOneValue && inputOperandMultiplicationTwoValue) {
		const inputMultiplication = parseFloat(inputOperandMultiplicationOneValue, 10) * parseFloat(inputOperandMultiplicationTwoValue, 10);
		operators3(inputMultiplication);
	}

	const inputOperandDivisionOneValue = inputOperandDivisionOne.value;
	const inputOperandDivisionTwoValue = inputOperandDivisionTwo.value;

	if (inputOperandDivisionOneValue && inputOperandDivisionTwoValue) {
		const inputDivision = parseFloat(inputOperandDivisionOneValue, 10) / parseFloat(inputOperandDivisionTwoValue, 10);
		operators4(inputDivision);
	}
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



function translationOperatorsInDiv(translationOperators) {
	document.getElementById('translation').innerHTML = translationOperators;
}

buttonTranslation.addEventListener('click', function () {
	let inputOperatosValue = inputOperatos.value;
	switch (inputOperatosValue) {
		case '+':
			translationOperatorsInDiv('Сложение')
			break;
		case '-':
			translationOperatorsInDiv('Вычитание');
			break;
		case '*':
			translationOperatorsInDiv('Умножение');
			break;
		case '/':
			translationOperatorsInDiv('Деление ');
			break;
		case '%':
			translationOperatorsInDiv('Взятие остатка от деления');
			break;
		case '÷':
			translationOperatorsInDiv('Деление ');
			break;
		default:
			translationOperatorsInDiv('Не коректный ввод элемента!');
			break;
	}
});

