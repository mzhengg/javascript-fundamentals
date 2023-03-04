// make global variables that keep track of the computer and player's score
let computerScore = 0, playerScore = 0;

// select the buttons (either rock, paper, or scissors)
const buttons = document.querySelectorAll('button');

// for each button, add an event listener that checks if the user clicked any of them
buttons.forEach((button) => {
    button.addEventListener('click', event => {
        // when button is clicked, we have to create an event response

        // first, check if anybody reached 5 points. If this is the case, that means the game has already ended
        // you should do NOTHING
        if (computerScore == 5 || playerScore == 5) {
            return;
        }

        // otherwise, get the button id to determine the user's choice
        let playerSelection = event.target.id;
        // get the computer's choice 
        let computerSelection = getComputerChoice();

        // play the round to determine who won
        playRound(playerSelection, computerSelection);

        // checks if we have reached the end of the game. If we did, we will determine a winner!
        determineWinner();
    });
});

// randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    let action;

    switch (choice) {
        case 0:
            action = 'rock'
            break;
        case 1:
            action = 'paper'
            break;
        case 2:
            action = 'scissor'
            break;
    }

    // display the computer's choice in the HTML
    document.getElementById("computer-choice").innerHTML = "The computer chose: " + action;

    return action;
}

// simulate one round
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection) {
        // display the round's result as "tied game!" in HTML
        document.getElementById("result").innerHTML = 'Tied game!';
    }
    else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper') {
        computerScore++;
        // display round's result in HTML
        document.getElementById("result").innerHTML = 'You lose! Rock loses to Paper.';
}
    else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissor') {
        playerScore++;
        // display round's result in HTML
        document.getElementById("result").innerHTML = 'You win! Rock beats Scissors.';
    }
    else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock') {
        playerScore++;
        // display round's result in HTML
        document.getElementById("result").innerHTML = 'You win! Paper beats Rock.';
    }
    else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissor') {
        computerScore++;
        // display round's result in HTML
        document.getElementById("result").innerHTML = 'You lose! Paper loses to Scissors.';
    }
    else if (playerSelection.toLowerCase() == 'scissor' && computerSelection == 'rock') {
        computerScore++;
        // display round's result in HTML
        document.getElementById("result").innerHTML = 'You lose! Scissors loses to Rock.';
    }
    else if (playerSelection.toLowerCase() == 'scissor' && computerSelection == 'paper') {
        playerScore++;
        // display round's result in HTML
        document.getElementById("result").innerHTML = 'You win! Scissors beat Paper.';
    }

    // now that a round has been played, update the scoreboard
    updateScoreboard();
}

// function that updates the scoreboard in HTML
function updateScoreboard() {
    // concatenate the player's score and the computer's score to the scoreboard
    document.getElementById("scoreboard").innerHTML = playerScore + "     -     " + computerScore;
}

// function that determines the winner 
function determineWinner() {
    // first, go to the element with the weapon-choice id
    const element = document.getElementById("weapon-choices-text");

    // create a div with id "winner"
    const winnerDiv = document.createElement('div');
    winnerDiv.id = 'winner';

    // if the player won, set the proper winnerDiv text
    if (playerScore == 5) {
        winnerDiv.textContent = 'Congratulations! You win!';
    }

    // if the computer won, set the proper winnerDiv text
    else if (computerScore == 5) {
        winnerDiv.textContent = 'Boooo! The computer wins!';
    }

    // place the winnerDiv after the weapon-choices-text element
    element.after(winnerDiv);
}