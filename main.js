const scripts = require("./scripts");


// uses strict mode so strings are not coerced, variables are not hoisted, etc... 
'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
function getPrompt() {
  rl.question("Choose 1 or 2 players: ", (players) => {
    switch (players) {
      case '1' || 'one':
        rl.question('hand1: ', (hand1) => {
          console.log( scripts.onePlayerGame(hand1) );
          getPrompt();
        });
      case '2' || 'two':
        rl.question('hand1: ', (hand1) => {
          rl.question('hand2: ', (hand2) => {
            console.log( scripts.twoPlayerGame(hand1, hand2) );
            getPrompt();
          });
        });
    }
  });
}

// Unit Tests
// to use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  // most are notes for human eyes to read, but essentially passes in inputs then compares if the function you built returns the expected output.
  describe('#twoPlayerGame()', () => {
    it('should detect a tie', () => {
      assert.equal(twoPlayerGame('rock', 'rock'), "It's a tie!");
      assert.equal(twoPlayerGame('paper', 'paper'), "It's a tie!");
      assert.equal(twoPlayerGame('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(twoPlayerGame('rock', 'paper'), "Hand two wins!");
      assert.equal(twoPlayerGame('paper', 'scissors'), "Hand two wins!");
      assert.equal(twoPlayerGame('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(twoPlayerGame('rOcK', ' paper '), "Hand two wins!");
      assert.equal(twoPlayerGame('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(twoPlayerGame('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  // always returns ask the user for another input
  getPrompt();

}
