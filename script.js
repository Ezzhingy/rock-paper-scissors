function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    let choose = Math.floor(Math.random() * choices.length);
    return choices[choose];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if ((playerSelection === 'rock') && (computerSelection === 'paper')) {
        console.log("You Lose! Paper beats Rock");
        return false;
    } else if ((playerSelection === 'rock') && (computerSelection === 'scissors')) {
        console.log("You Win! Rock beats Scissors");
        return true;
    } else if ((playerSelection === 'rock') && (computerSelection === 'rock')) {
        console.log("It's a tie! Rock is evenly matched with Rock");
        return 0;
    } else if ((playerSelection === 'paper') && (computerSelection === 'paper')) {
        console.log("It's a tie! Paper is evenly matched with Paper");
        return 0;
    } else if ((playerSelection === 'paper') && (computerSelection === 'rock')) {
        console.log("You Win! Paper beats Rock");
        return true;
    } else if ((playerSelection === 'paper') && (computerSelection === 'scissors')) {
        console.log("You Lose! Scissors beats Paper");
        return false;
    } else if ((playerSelection === 'scissors') && (computerSelection === 'paper')) {
        console.log("You Win! Scissors beats Paper");
        return true;
    } else if ((playerSelection === 'scissors') && (computerSelection === 'rock')) {
        console.log("You Lose! Rock beats Scissors");
        return false;
    } else if ((playerSelection === 'scissors') && (computerSelection === 'scissors')) {
        console.log("It's a tie! Scissors is evenly matched with Scissors");
        return 0;
    } else {
        console.log("Invalid input");
        return 0;
    }
}

function game() {
    let playerWins = 0, computerWins = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, Paper, or Scissors?", "");
        const computerSelection = computerPlay();

        let result = playRound(playerSelection, computerSelection);

        if (result === 0) {
            continue;
        } else if (result === true) {
            playerWins++;
        } else {
            computerWins++;
        }
    }

    if (playerWins > computerWins) {
        console.log("Final Decision: Player Wins!");
    } else if (computerWins > playerWins) {
        console.log("Final Decision: Computer Wins!");
    } else {
        console.log("Final Decision: It's a tie!");
    }
}

game();