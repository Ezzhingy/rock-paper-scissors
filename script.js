function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    let choose = Math.floor(Math.random() * choices.length);
    return choices[choose];
}

function playRound(e) {
    playerSelection = e.target.id;
    computerSelection = computerPlay();

    const result = document.querySelector(".result");
    const oneRound = document.createElement("h4");
    const player = document.querySelector('#player');
    const cpu = document.querySelector('#cpu');

    let playerValue = player.innerText;
    let cpuValue = parseInt(cpu.innerText);
   
    if ((playerSelection === 'rock') && (computerSelection === 'paper')) {
        oneRound.innerText = "You Lose! Paper beats Rock";
        cpuValue++;
        cpu.innerText = cpuValue;
    } else if ((playerSelection === 'rock') && (computerSelection === 'scissors')) {
        oneRound.innerText = "You Win! Rock beats Scissors";
        playerValue++;
        player.innerText = playerValue;
    } else if ((playerSelection === 'rock') && (computerSelection === 'rock')) {
        oneRound.innerText = "It's a tie! Rock is evenly matched with Rock";
    } else if ((playerSelection === 'paper') && (computerSelection === 'paper')) {
        oneRound.innerText = "It's a tie! Paper is evenly matched with Paper";
    } else if ((playerSelection === 'paper') && (computerSelection === 'rock')) {
        oneRound.innerText = "You Win! Paper beats Rock";
        playerValue++;
        player.innerText = playerValue;
    } else if ((playerSelection === 'paper') && (computerSelection === 'scissors')) {
        oneRound.innerText = "You Lose! Scissors beats Paper";
        cpuValue++;
        cpu.innerText = cpuValue;
    } else if ((playerSelection === 'scissors') && (computerSelection === 'paper')) {
        oneRound.innerText = "You Win! Scissors beats Paper";
        playerValue++;
        player.innerText = playerValue;
    } else if ((playerSelection === 'scissors') && (computerSelection === 'rock')) {
        oneRound.innerText = "You Lose! Rock beats Scissors";
        cpuValue++;
        cpu.innerText = cpuValue;
    } else if ((playerSelection === 'scissors') && (computerSelection === 'scissors')) {
        oneRound.innerText = "It's a tie! Scissors is evenly matched with Scissors";
    }
    
    oneRound.style.textAlign = 'center';
    oneRound.style.color = '#2ea623';
    result.appendChild(oneRound);        

    checkGame(playerValue, cpuValue)
}

function checkGame(player, cpu) {
    const allBtn = document.querySelectorAll('.btn');

    if (player === 5) {
        alert("Player Wins!");        
        allBtn.forEach(btn => btn.disabled = true);

        makeReset();

    } else if (cpu === 5) {
        alert("Final Decision: Computer Wins!");
        allBtn.forEach(btn => btn.disabled = true);

        makeReset();
    }
}

function makeReset() {
    const reset = document.querySelector(".reset");
    const resetBtn = document.createElement("button");

    resetBtn.type = "button";
    resetBtn.innerText = "Reset";
    resetBtn.classList.add("reset-btn");

    reset.appendChild(resetBtn);
}

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

rockBtn.addEventListener('click', playRound);
paperBtn.addEventListener('click', playRound);
scissorsBtn.addEventListener('click', playRound);
