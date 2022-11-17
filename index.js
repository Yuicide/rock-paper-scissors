const choices = ["rock", "paper", "scissors"];

function getComputerChoice(){
    return choices[Math.floor(Math.random() * choices.length)];
}

function getPlayerChoice(){
    let input = prompt("Do you choose Rock, Paper or Scissors?");
    while(input == null){
        input = prompt("Do you choose Rock ,Paper or Scissors?");
    }
    input = input.toLowerCase();
    console.log(input);
}

getComputerChoice();
getPlayerChoice();