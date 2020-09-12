/* Practice-Multiplication */


let question = document.querySelector(".ques");
let pointsElem = document.querySelector(".points");
let inputBox = document.querySelector("#a-input");
let input;
let num1;
let num2;
let point = 0;
let totalQuestions = 0;


// Checking the answer
function checkAnswer() {
	input = inputBox.value;
	if (Number(input) === (num1*num2)) {
		alert("You are correct!");
		point += 1;
	} else {
		alert(`You are wrong!, the correct answer is ${num1*num2}`);
	}
	totalQuestions += 1;
	pointsElem.innerHTML = `Points: ${point}\\${totalQuestions}`;
}


// Getting random questions
function getRandomQuestion() {
	num1 = Math.floor((Math.random() * 999) + 1);
	num2 = Math.floor((Math.random() * 9) + 2);
	question.innerHTML = `Question: ${num1} x ${num2}`;
}


/*Binding the two functions together.*/
function okButton() {
	checkAnswer();
	getRandomQuestion();
}


/*Calling function to get a question for the
first time later in other functions, this function is called*/
getRandomQuestion();