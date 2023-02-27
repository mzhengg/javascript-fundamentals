// randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    switch (choice) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissor';
            break;
    }
}

// simulate one round
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection) {
        return 'You tied!'
    }
    else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper') {
        return "You lose!"
    }
    else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissor') {
        return "You win!"
    }
    else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock') {
        return "You win!"
    }
    else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissor') {
        return "You lose!"
    }
    else if (playerSelection.toLowerCase() == 'scissor' && computerSelection == 'rock') {
        return "You lose!"
    }
    else if (playerSelection.toLowerCase() == 'scissor' && computerSelection == 'paper') {
        return "You win!"
    }
}

// perform 5 iterations of playRound
function game() {
    let score = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Enter rock, paper, or scissor');
        const computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection)
        
        if (result == "You win!") {
            score += 1;
        }
    }

    console.log("You won " + score + " out of 5 rounds");
}

// initiate the game
game()