const inputOne = document.getElementById('input1');
const inputTwo = document.getElementById('input2');
const button = document.getElementById('button');

function operators1(inputSumResult) {
	document.getElementById('sum').innerHTML = inputSumResult;
}

button.addEventListener('click', function () {
	const inputOneText = inputOne.value;
	const inputTwoText = inputTwo.value;
	const inputSum = +inputOneText + +inputTwoText;
	operators1(inputSum);
});

const inputThree = document.getElementById('input3');
const inputFour = document.getElementById('input4');

function operators2(inputSubtractionResult) {
	document.getElementById('subtraction').innerHTML = inputSubtractionResult;
}

button.addEventListener('click', function () {
	const inputThreeText = inputThree.value;
	const inputFourText = inputFour.value;
	const inputSubtraction = inputThreeText - inputFourText;
	operators2(inputSubtraction);
});

const inputFive = document.getElementById('input5');
const inputSix = document.getElementById('input6');

function operators3(inputMultiplicationResult) {
	document.getElementById('multiplication').innerHTML = inputMultiplicationResult;
}

button.addEventListener('click', function () {
	const inputFiveText = inputFive.value;
	const inputSixText = inputSix.value;
	const inputMultiplication = inputFiveText * inputSixText;
	operators3(inputMultiplication);
});

const inputSeven = document.getElementById('input7');
const inputEight = document.getElementById('input8');

function operators4(inputDivisionResult) {
	document.getElementById('division').innerHTML = inputDivisionResult;
}

button.addEventListener('click', function () {
	const inputSevenText = inputSeven.value;
	const inputEightText = inputEight.value;
	const inputDivision = inputSevenText / inputEightText;
	operators4(inputDivision);
});
