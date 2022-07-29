let pWin = 0;
let pLose = 0;
const btnr = document.querySelector("#btn-r");
const btnp = document.querySelector("#btn-p");
const btns = document.querySelector("#btn-s");
const buttons = document.querySelectorAll("button");

function getComputerChoice() {
    let choice = Math.round(Math.random()*3);
    if(choice == 1) {
        return("Rock");
    } else if (choice == 2) {
        return("Paper");
    }
    return("Scissors");
}

function playRound(playerSelection) {
    let p = playerSelection.toLowerCase();
    let c = getComputerChoice().toLowerCase();

    if(p == "rock" && c == "paper") {
        print("You lost! Paper beats rock!");
    } else if (p == "paper" && c == "scissors") {
        print("You lost! Scissors beats paper!");
    } else if(p == "scissors" && c == "rock") {
        print("You lost! Rock beats scissors!");
    } else if(p == c) {
        print("It's a tie!");
    } else { 
        print("You won! Congratulations!");
    }
}

function statsMessage(win, loss) {
    const display = document.querySelector('#score');
    const score = document.createElement("p");
    score.classList.add('score');
    score.textContent = ("You have " + win + " wins, and " + loss + " losses.");
    display.appendChild(score);
}

function print(mssg) {
    if(mssg.includes("lost")) {
        pLose++;
    } else if(mssg.includes("won")) {
        pWin++;
    }

    if(pWin >= 5 || pLose >= 5) {
        statsMessage(pWin, pLose);
        pWin = 0;
        pLose = 0;
    }

    const display = document.querySelector('#display');
    const message = document.createElement("p");
    message.classList.add("message");
    message.textContent = mssg;
    display.appendChild(message);
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.textContent); //get the text within the button
    });
});


