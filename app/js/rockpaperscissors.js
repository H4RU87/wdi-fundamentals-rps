////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {

    var winner;

    if(playerMove === computerMove){
        winner = "tie";
    }
    else if((playerMove == "rock" && computerMove == "scissors") ||
       (playerMove == "paper" && computerMove == "rock") ||
       (playerMove == "scissors" && computerMove == "paper")){
        winner = "player";
    }
    else
        winner = "computer";
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var rounds = 1;

    while (playerWins < 5 && computerWins < 5){
      console.log('\nRound ' + rounds);
      var playerMove = getPlayerMove();
      var computerMove = getComputerMove();
      var winner = getWinner(playerMove,computerMove);

	    console.log('Player chose ' + playerMove + ' and computer chose ' + computerMove + "."  );

      if (winner == "player"){
        console.log("Player Wins!");
        playerWins += 1;
        rounds += 1;
      }
      else if (winner == "computer"){
        console.log("Computer Wins!");
        computerWins += 1;
        rounds += 1;
      }
      else{
        console.log("It's a tie!");
        rounds += 1;
      }

      console.log("Current Score is [Player : "+ playerWins + ", Computer : " + computerWins + "]");
    }

    return [playerWins, computerWins];
}

function playTo(x){
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var rounds = 1;
    var limit = x;

    while (playerWins < limit && computerWins < limit){
      console.log('\nRound ' + rounds);
      var playerMove = getPlayerMove();
      var computerMove = getComputerMove();
      var winner = getWinner(playerMove,computerMove);

	    console.log('Player chose ' + playerMove + ' and computer chose ' + computerMove + "."  );

      if (winner == "player"){
        console.log("Player Wins!");
        playerWins += 1;
        rounds += 1;
      }
      else if (winner == "computer"){
        console.log("Computer Wins!");
        computerWins += 1;
        rounds += 1;
      }
      else{
        console.log("It's a tie!");
        rounds += 1;
      }

      console.log("Current Score is [Player : "+ playerWins + ", Computer : " + computerWins + "]");
    }

    return [playerWins, computerWins];
}
