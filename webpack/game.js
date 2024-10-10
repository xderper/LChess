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

eval("// NOTE: this example uses the chess.js library:\r\n// https://github.com/jhlywa/chess.js\r\n\r\nconst socket = io();\r\n\r\nvar board = null\r\nvar game = new Chess()\r\nvar whiteSquareGrey = '#a9a9a9'\r\nvar blackSquareGrey = '#696969'\r\n\r\nconst hash= window.location.hash.substring(1).split('&');\r\nconst room = hash[0].split('=')[1];\r\nsocket.emit('join_room', room);\r\n\r\nsocket.on('update_move', (fenData) =>{\r\n  game = new Chess(fenData);\r\n  board.position(game.fen())\r\n})\r\n\r\n\r\nfunction removeGreySquares () {\r\n  $('#myBoard .square-55d63').css('background', '')\r\n}\r\n\r\nfunction greySquare (square) {\r\n  var $square = $('#myBoard .square-' + square)\r\n\r\n  var background = whiteSquareGrey\r\n  if ($square.hasClass('black-3c85d')) {\r\n    background = blackSquareGrey\r\n  }\r\n\r\n  $square.css('background', background)\r\n}\r\n\r\nfunction onDragStart (source, piece) {\r\n  // do not pick up pieces if the game is over\r\n  if (game.game_over()){\r\n    return false;\r\n  }\r\n\r\n  // or if it's not that side's turn\r\n  if ((game.turn() === 'w' && piece.search(/^b/) !== -1) ||\r\n      (game.turn() === 'b' && piece.search(/^w/) !== -1)) {\r\n    return false\r\n  }\r\n}\r\n\r\nfunction onDrop (source, target) {\r\n  removeGreySquares();\r\n\r\n  // see if the move is legal\r\n  var move = game.move({\r\n    from: source,\r\n    to: target,\r\n    promotion: 'q' // NOTE: always promote to a queen for example simplicity\r\n  });\r\n\r\n  // illegal move\r\n  if (move === null) return 'snapback';\r\n\r\n  // Проверяем на мат после хода\r\n  if (game.in_checkmate()) {\r\n    console.log('Игра окончена!');\r\n    if (game.in_checkmate()) {\r\n        console.log('Мат!');\r\n    } else if (game.in_stalemate()) {\r\n        console.log('Пат!');\r\n    } else if (game.in_draw()) {\r\n        console.log('Ничья!');\r\n    }\r\n  }\r\n\r\n  // Отправляем ход на сервер\r\n  socket.emit('move', game.fen());\r\n}\r\n\r\nfunction onMouseoverSquare (square, piece) {\r\n\r\n  // get list of possible moves for this square\r\n  var moves = game.moves({\r\n    square: square,\r\n    verbose: true\r\n  })\r\n \r\n  // exit if there are no moves available for this square\r\n  if (moves.length === 0) return\r\n\r\n  // highlight the square they moused over\r\n  greySquare(square)\r\n\r\n  // highlight the possible squares for this piece\r\n  for (var i = 0; i < moves.length; i++) {\r\n    greySquare(moves[i].to)\r\n  }\r\n\r\n}\r\n\r\nfunction onMouseoutSquare (square, piece) {\r\n  removeGreySquares()\r\n}\r\n\r\nfunction onSnapEnd () {\r\n  board.position(game.fen())\r\n}\r\n\r\nvar config = {\r\n  draggable: true,\r\n  position: 'start',\r\n  onDragStart: onDragStart,\r\n  onDrop: onDrop,\r\n  onMouseoutSquare: onMouseoutSquare,\r\n  onMouseoverSquare: onMouseoverSquare,\r\n  onSnapEnd: onSnapEnd\r\n}\r\nboard = Chessboard('myBoard', config)\r\n\r\n\n\n//# sourceURL=webpack:///./src/game.js?");

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