let tie = "It's a tie!";
let hand1Win = "Hand one wins!";
let hand2Win = "Hand two wins!";

let choices = [{
    "choice": "rock",
    "beats": "scissors",
    },{
    "choice": "paper",
    "beats": "rock",
    },{
    "choice": "scissors",
    "beats": "paper",
    }];

//gets random number to assign AI value and removes deicmal
function assignHand() {
    let num = Math.floor(Math.random() * 3);
    let wholeNumber = Math.trunc(num);
    return wholeNumber;
}

//one player game
function onePlayerGame(playerHand) {
    // assign hand to AI
    let aiHandIndex = assignHand();
    let aiHand = choices[aiHandIndex];
    console.log("hand2:", aiHand.choice);
    // check which hand wins
    if (playerHand == aiHand.choice) {
        // it's a tie
        return tie;
    } else if (aiHand.beats == playerHand) {
        // AI wins
        return hand2Win;
    } else {
        // player wins
        return hand1Win;
    }
}

// two player game
const twoPlayerGame = (var1, var2) => {
    let hand1 = var1.toLowerCase().trim();
    let hand2 = var2.toLowerCase().trim();
  
    if (hand1 === "rock" && hand2 === "scissors") {
      return hand1Win;
    }else if (hand1 === "rock" && hand2 === "paper") {
      return hand2Win;
    }else if (hand1 === "rock" && hand2 === "rock") {
      return tie;
    }else if (hand1 === "paper" && hand2 === "rock") {
      return hand1Win;
    }else if (hand1 === "paper" && hand2 === "scissors") {
      return hand2Win;
    }else if (hand1 === "paper" && hand2 === "paper") {
      return tie;
    }else if (hand1 === "scissors" && hand2 === "paper") {
      return hand1Win;
    }else if (hand1 === "scissors" && hand2 === "rock") {
      return hand2Win;
    }else if (hand1 === "scissors" && hand2 === "scissors") {
      return tie;
    }else{
      console.log("error")
    }
  }


module.exports = {onePlayerGame, twoPlayerGame};
