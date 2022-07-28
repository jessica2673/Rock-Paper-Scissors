let pWin = 0;
let pLose = 0;
let rounds = 0;

function getComputerChoice() {
    let choice = Math.round(Math.random()*3);
    if(choice == 1) {
        print("Rock");
    } else if (choice == 2) {
        print("Paper");
    }
    print("Scissors");
}

function playRound(playerSelection, computerSelection) {
    let p = playerSelection.toLowerCase();
    let c = computerSelection.toLowerCase();
    if(p == "rock" && c == "paper") {
        print("You lost! Paper beats rock!");
    } else if (p == "paper" && c == "scissors") {
        print("You lost! Scissors beats paper!");
    } else if(p == "scissors" && c == "rock") {
        print("You lost! Rock beats scissors!");
    } else if(p == c) {
        print("It's a tie!");
    }
    print("You won! Congratulations!");
}

function game(){
    
    let message = playRound(prompt("Enter a choice: "), getComputerChoice());

    if(message.includes("lost")) {
        pLose++;
    } else if(message.includes("won")) {
        pWin++;
    }

    rounds++;

    if(rounds >= 5) {
        statsMessage(pWin, pLose);
    }
}

function statsMessage(win, loss) {
    const score = document.querySelector('#score');
    score.classList.add('score');
    score.textContent = ("You have " + win + " wins and " + loss + " losses.");
}

function print(mssg) {
    const display = document.querySelector("#display");
    display.classList.add("display");
    display.textContent = mssg;
}

console.log(playRound(prompt("Enter a choice: "), getComputerChoice()));

