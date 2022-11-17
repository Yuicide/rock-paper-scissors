const choices = ["rock", "paper", "scissors"];

function getComputerChoice(){
    console.log(choices[Math.floor(Math.random() * choices.length)]);
}

getComputerChoice();