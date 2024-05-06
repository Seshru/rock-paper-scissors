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

let humanScore = 0;
let computerScore = 0;

function playGame() {
	let humanSelection;
	let computerSelection;
	function playRound(humanSelection, computerSelection) {
		if (humanSelection == computerSelection) {
			console.log(`DRAAAAAAAAAAAAW!`);
		} else if (
			(humanSelection === "rock" && computerSelection === "scissors") ||
			(humanSelection === "paper" && computerSelection === "rock") ||
			(humanSelection === "scissors" && computerSelection === "paper")
		) {
			humanScore += 1;
			console.log(`You win - ${humanSelection} beats ${computerSelection}`);
		} else {
			computerScore += 1;
			console.log(`You lose - ${computerSelection} beats ${humanSelection}`);
		}
	}
	for (let i = 0; i < 6; i++) {
		humanSelection = getHumanChoice();
		computerSelection = getComputerChoice();
		playRound(humanSelection, computerSelection);
	}
}
