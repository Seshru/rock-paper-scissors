

function getComputerChoice() {
    let choice = Math.random();
    let final_choice;
    if (choice < 0.33) {
        final_choice = "Rock"
    } else if (choice < 0.66) {
        final_choice = "Scissors"
    } else {
        final_choice = "Paper"
    }
    return final_choice;
}