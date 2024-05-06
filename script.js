function getComputerChoice() {
	let choice = Math.random();
	let computer_choice;
	if (choice < 0.33) {
		computer_choice = "Rock";
	} else if (choice < 0.66) {
		computer_choice = "Scissors";
	} else {
		computer_choice = "Paper";
	}
	return computer_choice.toLowerCase();
}

function getHumanChoice() {
	let human_choice;
	do {
		human_choice = prompt("Please enter rock, paper or scissors");
	} while (
		human_choice.toLowerCase() !== "rock" &&
		human_choice.toLowerCase() !== "scissors" &&
		human_choice.toLowerCase() !== "paper"
	);
	console.log(human_choice.toLowerCase());
	return human_choice.toLowerCase();
}
