function getComputerChoice() {
    let choice = Math.round(Math.random()*3);
    if(choice == 1) {
        return "Rock";
    } else if (choice == 2) {
        return "Paper";
    }
    return "Scissors";
}

console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
    let p = playerSelection.toLowerCase();
    let c = computerSelection.toLowerCase();
    if(p == "rock" && c == "paper") {
        return "You lost! Paper beats rock!";
    } else if (p == "paper" && c == "scissors") {
        return "You lost! Scissors beats paper!";
    } else if(p == "scissors" && c == "rock") {
        return "You lost! Rock beats scissors!";
    } else if(p == c) {
        return "It's a tie!";
    }
    return "You won! Congratulations!";
}

function game(){
    let pWin = 0;
    let pLose = 0;

    for(let i = 0; i < 5; i++) {
        let message = playRound(prompt("Enter a choice: "), getComputerChoice());

        if(message.includes("lost")) {
            pLose++;
        } else if(message.includes("won")) {
            pWin++;
        }
        statsMessage(pWin, pLose);
    }
}

function statsMessage(win, loss) {
    console.log("You have " + win + " wins and " + loss + " losses.");
}

console.log(playRound(prompt("Enter a choice: "), getComputerChoice()));
console.log(game());

