'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let turn = 0;

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

function horizontalWin() {
  if (board[0][0]==board[0][1] && board[0][1]==board[0][2] && board[0][0]!=(' ')){
    return true;
  }
  if (board[1][0]==board[1][1] && board[1][1]==board[1][2] && board[1][0]!=(' ')){
    return true;
  }
  if (board[2][0]==board[2][1] && board[2][1]==board[2][2] && board[2][0]!=(' ')){
    return true;
  }
}

function verticalWin() {
  if (board[0][0]==board[1][0] && board[1][0]==board[2][0] && board[0][0]!=(' ')){
    return true;
  }
  if (board[0][1]==board[1][1] && board[1][1]==board[2][1] && board[0][1]!=(' ')){
    return true;
  }
  if (board[0][2]==board[1][2] && board[1][2]==board[2][2] && board[0][2]!=(' ')){
    return true;
  }
}

function diagonalWin() {
  if (board[0][0]==board[1][1] && board[1][1]==board[2][2] && board[0][0]!=(' ')){
    return true;
  }
  if (board[0][2]==board[1][1] && board[1][1]==board[2][0] && board[0][2]!=(' ')){
    return true;
  }
}

function checkForWin() {
  if (horizontalWin() === true){
    return true;
  }
  if (verticalWin() === true){
    return true;
  }
  if (diagonalWin() === true){
    return true;
  }
}


function ticTacToe(row, column) {
let rowGood = row.trim();
let columnGood = column.trim();

if (board[rowGood][columnGood]==' '){
  if ((turn===0) || (turn%2===0)){
    board[rowGood][columnGood]='X';
    turn++;
  } else {
    board[rowGood][columnGood]='O'
    turn++;
  }
  let WHY = checkForWin()

  if (WHY == true) {
    if ((turn===0) || (turn%2===0)){
      console.log("Player O Wins!");
    } else {
      console.log("Player X Wins!");
    }
    board = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' ']
    ];
    turn=0;
  }
} else {
  console.log("INVALID ENTRY! Please choose an empty row & column...")
}
}

function getPrompt() {
  printBoard();
  if ((turn==0) || (turn%2==0)){
    console.log("It's Player X's turn.");
  } else {
    console.log("It's Player O's turn.");
    }
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
  if ((row=='0' || row=='1' || row=='2') && (column=='0' || column=='1' || column=='2')){
      ticTacToe(row, column);
    } else {
      console.log("INVALID ENTRY! Please enter a number from 0 to 2, with no spaces...")
    }
      getPrompt();
    });
  });

}

// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
