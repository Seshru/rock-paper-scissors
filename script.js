const playerImg = document.getElementById("p-img");
const computerImg = document.getElementById("c-img");
const rockBtn = document.getElementById("rock");
const scissorsBtn = document.getElementById("scissors");
const paperBtn = document.getElementById("paper");
const playerScore = document.getElementById("p-score");
const compScore = document.getElementById("c-score");
const infoMsg = document.getElementById("info");

function getComputerChoice() {
	let choice = Math.random();
	let computerChoice;
	if (choice < 0.33) {
		computerChoice = "Rock";
	} else if (choice < 0.66) {
		computerChoice = "Scissors";
	} else {
		computerChoice = "Paper";
	}
	return computerChoice.toLowerCase();
}

function getHumanChoice() {
	let humanChoice;
	do {
		humanChoice = prompt("Please enter rock, paper or scissors");
	} while (
		humanChoice.toLowerCase() !== "rock" &&
		humanChoice.toLowerCase() !== "scissors" &&
		humanChoice.toLowerCase() !== "paper"
	);
	console.log(humanChoice.toLowerCase());
	return humanChoice.toLowerCase();
}

let humanSelection;
let computerSelection;
let humanScore = 0;
let computerScore = 0;
function playRound(humanSelection, computerSelection) {
	let msg;
	switch (humanSelection) {
		case "rock":
			playerImg.src = "./images/rock.png";
			break;
		case "scissors":
			playerImg.src = "./images/scissors.png";
			break;
		case "paper":
			playerImg.src = "./images/paper.png";
			break;
	}
	switch (computerSelection) {
		case "rock":
			computerImg.src = "./images/rock.png";
			break;
		case "scissors":
			computerImg.src = "./images/scissors.png";
			break;
		case "paper":
			computerImg.src = "./images/paper.png";
			break;
	}
	if (humanSelection == computerSelection) {
		msg = `It's a draw!`;
	} else if (
		(humanSelection === "rock" && computerSelection === "scissors") ||
		(humanSelection === "paper" && computerSelection === "rock") ||
		(humanSelection === "scissors" && computerSelection === "paper")
	) {
		humanScore += 1;
		switch (humanSelection) {
			case "rock":
				msg = "You smashed the computer's scissors!";
				break;
			case "paper":
				msg = "You wrapped the computer's rock in paper!";
				break;
			case "scissors":
				msg = "You cut the computer's paper in to pieces!";
				break;
		}
	} else {
		computerScore += 1;
		switch (computerSelection) {
			case "rock":
				msg = "The computer obliterated your scissors in to dust!";
				break;
			case "paper":
				msg = "The computer protected itself with some paper!";
				break;
			case "scissors":
				msg = "The computer cut your homework!";
				break;
		}
	}
	compScore.innerHTML = computerScore;
	playerScore.innerHTML = humanScore;
	infoMsg.innerHTML = msg;
}
rockBtn.addEventListener("click", function () {
	computerSelection = getComputerChoice();
	playRound("rock", computerSelection);
});
scissorsBtn.addEventListener("click", function () {
	computerSelection = getComputerChoice();
	playRound("scissors", computerSelection);
});
paperBtn.addEventListener("click", function () {
	computerSelection = getComputerChoice();
	playRound("paper", computerSelection);
});
