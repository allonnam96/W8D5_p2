// DON'T TOUCH THIS CODE
if (typeof window === 'undefined'){
  var Piece = require("./piece");
}
// DON'T TOUCH THIS CODE


/**
 * Returns a 2D array (8 by 8) with two black pieces at [3, 4] and [4, 3]
 * and two white pieces at [3, 3] and [4, 4].
 */
function _makeGrid() {
  // const Board = []
  // for (let i = 0; i <= 8; i++){
  //   Board.push([]);
  // }
  // return Board;

let grid = new Array(8).fill(null).map(() => new Array(8).fill(undefined));
grid[3][3] = new Piece("white");
grid[3][4] = new Piece("black");
grid[4][3] = new Piece("black");
grid[4][4] = new Piece("white");

return grid
}

/**
 * Constructs a Board with a starting grid set up.
 */
function Board () {
  this.grid = _makeGrid();
}

Board.DIRS = [
  [ 0,  1], [ 1,  1], [ 1,  0],
  [ 1, -1], [ 0, -1], [-1, -1],
  [-1,  0], [-1,  1]
];

/**
 * Checks if a given position is on the Board.
 */
Board.prototype.isValidPos = function (pos) {
  for (let i = 0; i < pos.length; i++){
    if (pos[i] > 7 || pos[i] < 0) {
      return false
    }
  }
  return true
};

/**
 * Returns the piece at a given [x, y] position,
 * throwing an Error if the position is invalid.
 */
Board.prototype.getPiece = function (pos) {
  if(!this.isValidPos(pos)){
    throw new Error ('Not valid pos!');
  }
  let row = pos[0];
  let col = pos[1];
  return this.grid[row][col];
};

/**
 * Checks if the piece at a given position
 * matches a given color.
 */
Board.prototype.isMine = function (pos, color) {
  let piece = this.getPiece(pos)

  if (piece === undefined) {
    return false
  } else {
    return piece.color === color
  }
};

/**
 * Checks if a given position has a piece on it.
 */
Board.prototype.isOccupied = function (pos) {
  let piece = this.getPiece(pos)

  if (piece === undefined) {
    return false
  } else {
    return true
  }
};

/**
 * Recursively follows a direction away from a starting position, adding each
 * piece of the opposite color until hitting another piece of the current color.
 * It then returns an array of all pieces between the starting position and
 * ending position.
 *
 * Returns an empty array if it reaches the end of the board before finding 
 * another piece of the same color.
 *
 * Returns empty array if it hits an empty position.
 *
 * Returns empty array if no pieces of the opposite color are found.
 */
Board.prototype._positionsToFlip = function (pos, color, dir, piecesToFlip = []) {

  let x = dir[0];
  let y = dir[1];
  pos[0] += x;
  pos[1] += y;
  
  if (!this.isValidPos(pos) || !this.isOccupied(pos) || this.getPiece(pos).color === color){
    return piecesToFlip
  } else {
    piecesToFlip.push(pos)
    return this._positionsToFlip(pos, color, dir, piecesToFlip)
  }

}

/**
 * Checks that a position is not already occupied and that the color
 * taking the position will result in some pieces of the opposite
 * color being flipped.
 */
Board.prototype.validMove = function (pos, color) {
};

/**
 * Adds a new piece of the given color to the given position, flipping the
 * color of any pieces that are eligible for flipping.
 *
 * Throws an error if the position represents an invalid move.
 */
Board.prototype.placePiece = function (pos, color) {
};

/**
 * Produces an array of all valid positions on
 * the Board for a given color.
 */
Board.prototype.validMoves = function (color) {
};

/**
 * Checks if there are any valid moves for the given color.
 */
Board.prototype.hasMove = function (color) {
};

/**
 * Checks if both the white player and
 * the black player are out of moves.
 */
Board.prototype.isOver = function () {
};

/**
 * Prints a string representation of the Board to the console.
 */
Board.prototype.print = function () {
};

// DON'T TOUCH THIS CODE
if (typeof window === 'undefined'){
  module.exports = Board;
}
// DON'T TOUCH THIS CODE
