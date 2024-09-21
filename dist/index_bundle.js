/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ (() => {

eval("// NOTE: this example uses the chess.js library:\r\n// https://github.com/jhlywa/chess.js\r\n\r\nvar board = null\r\nvar game = new Chess()\r\nvar whiteSquareGrey = '#a9a9a9'\r\nvar blackSquareGrey = '#696969'\r\n\r\nfunction removeGreySquares () {\r\n  $('#myBoard .square-55d63').css('background', '')\r\n}\r\n\r\nfunction greySquare (square) {\r\n  var $square = $('#myBoard .square-' + square)\r\n\r\n  var background = whiteSquareGrey\r\n  if ($square.hasClass('black-3c85d')) {\r\n    background = blackSquareGrey\r\n  }\r\n\r\n  $square.css('background', background)\r\n}\r\n\r\nfunction onDragStart (source, piece) {\r\n  // do not pick up pieces if the game is over\r\n  if (game.game_over()){\r\n    console.log('over')\r\n  }\r\n\r\n  // or if it's not that side's turn\r\n  if ((game.turn() === 'w' && piece.search(/^b/) !== -1) ||\r\n      (game.turn() === 'b' && piece.search(/^w/) !== -1)) {\r\n    return false\r\n  }\r\n}\r\n\r\nfunction onDrop (source, target) {\r\n  removeGreySquares()\r\n\r\n  // see if the move is legal\r\n  var move = game.move({\r\n    from: source,\r\n    to: target,\r\n    promotion: 'q' // NOTE: always promote to a queen for example simplicity\r\n  })\r\n\r\n  // illegal move\r\n  if (move === null) return 'snapback'\r\n}\r\n\r\nfunction onMouseoverSquare (square, piece) {\r\n  // get list of possible moves for this square\r\n  var moves = game.moves({\r\n    square: square,\r\n    verbose: true\r\n  })\r\n\r\n  // exit if there are no moves available for this square\r\n  if (moves.length === 0) return\r\n\r\n  // highlight the square they moused over\r\n  greySquare(square)\r\n\r\n  // highlight the possible squares for this piece\r\n  for (var i = 0; i < moves.length; i++) {\r\n    greySquare(moves[i].to)\r\n  }\r\n}\r\n\r\nfunction onMouseoutSquare (square, piece) {\r\n  removeGreySquares()\r\n}\r\n\r\nfunction onSnapEnd () {\r\n  board.position(game.fen())\r\n}\r\n\r\nvar config = {\r\n  draggable: true,\r\n  position: 'start',\r\n  onDragStart: onDragStart,\r\n  onDrop: onDrop,\r\n  onMouseoutSquare: onMouseoutSquare,\r\n  onMouseoverSquare: onMouseoverSquare,\r\n  onSnapEnd: onSnapEnd\r\n}\r\nboard = Chessboard('myBoard', config)\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/game.js"]();
/******/ 	
/******/ })()
;