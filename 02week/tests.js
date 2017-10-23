'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function rockPaperScissors(hand1, hand2) {
  let first = hand1.toLowerCase().trim();
  let second = hand2.toLowerCase().trim();

  if(first === 'rock' && second === 'scissors'){
      return 'Hand one wins!';
    }
  if(first === 'rock' && second === 'paper'){
      return 'Hand two wins!';
    }
  if(first === 'rock' && second === 'rock'){
      return "It's a tie!";
    }
  if(first === 'paper' && second === 'rock'){
      return 'Hand one wins!';
    }
  if(first === 'paper' && second === 'scissors'){
      return 'Hand two wins!';
    }
  if(first === 'paper' && second === 'paper'){
      return "It's a tie!";
    }
  if(first === 'scissors' && second === 'rock'){
      return 'Hand two wins!';
    }
  if(first === 'scissors' && second === 'paper'){
      return 'Hand one wins!';
    }
  if(first === 'scissors' && second === 'scissors'){
      return "It's a tie!";
    }
}

function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'r ock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
    it('should detect if you are not using the wrong string', () => {
      assert.notStrictEqual(rockPaperScissors('rock', 'paper'), "Invalid entry, please use 'rock', 'paper' or 'scissors'");
      assert.notStrictEqual(rockPaperScissors('paper', 'rock'), "Invalid entry, please use 'rock', 'paper' or 'scissors'");
      assert.notStrictEqual(rockPaperScissors('scissors', 'rock'), "Invalid entry, please use 'rock', 'paper' or 'scissors'");
      assert.notStrictEqual(rockPaperScissors('rock', 'rock'), "Invalid entry, please use 'rock', 'paper' or 'scissors'");
      assert.notStrictEqual(rockPaperScissors('paper', 'paper'), "Invalid entry, please use 'rock', 'paper' or 'scissors'");
      assert.notStrictEqual(rockPaperScissors('scissors', 'scissors'), "Invalid entry, please use 'rock', 'paper' or 'scissors'");
    });
    it('should detect if both users are using a number', () => {
      assert.deepEqual(rockPaperScissors(6, '6'), "Invalid entry, please use 'rock', 'paper' or 'scissors'");
      assert.deepEqual(rockPaperScissors(4, 4), "Invalid entry, please use 'rock', 'paper' or 'scissors'");
      assert.deepEqual(rockPaperScissors('9', 9), "Invalid entry, please use 'rock', 'paper' or 'scissors'");
    });
  });
} else {

  getPrompt();

}
