// NOTE: this example uses the chess.js library:
// https://github.com/jhlywa/chess.js

const socket = io();

var board = null
var game = new Chess()
var whiteSquareGrey = '#a9a9a9'
var blackSquareGrey = '#696969'

const hash= window.location.hash.substring(1).split('&');
const room = hash[0].split('=')[1];
socket.emit('join_room', room);

socket.on('update_move', (fenData) =>{
  game = new Chess(fenData);
  board.position(game.fen())
})


function removeGreySquares () {
  $('#myBoard .square-55d63').css('background', '')
}

function greySquare (square) {
  var $square = $('#myBoard .square-' + square)

  var background = whiteSquareGrey
  if ($square.hasClass('black-3c85d')) {
    background = blackSquareGrey
  }

  $square.css('background', background)
}

function onDragStart (source, piece) {
  // do not pick up pieces if the game is over
  if (game.game_over()){
    return false;
  }

  // or if it's not that side's turn
  if ((game.turn() === 'w' && piece.search(/^b/) !== -1) ||
      (game.turn() === 'b' && piece.search(/^w/) !== -1)) {
    return false
  }
}

function onDrop (source, target) {
  removeGreySquares();

  // see if the move is legal
  var move = game.move({
    from: source,
    to: target,
    promotion: 'q' // NOTE: always promote to a queen for example simplicity
  });

  // illegal move
  if (move === null) return 'snapback';

  // Проверяем на мат после хода
  if (game.in_checkmate()) {
    console.log('Игра окончена!');
    if (game.in_checkmate()) {
        console.log('Мат!');
    } else if (game.in_stalemate()) {
        console.log('Пат!');
    } else if (game.in_draw()) {
        console.log('Ничья!');
    }
  }

  // Отправляем ход на сервер
  socket.emit('move', game.fen());
}

function onMouseoverSquare (square, piece) {

  // get list of possible moves for this square
  var moves = game.moves({
    square: square,
    verbose: true
  })
 
  // exit if there are no moves available for this square
  if (moves.length === 0) return

  // highlight the square they moused over
  greySquare(square)

  // highlight the possible squares for this piece
  for (var i = 0; i < moves.length; i++) {
    greySquare(moves[i].to)
  }

}

function onMouseoutSquare (square, piece) {
  removeGreySquares()
}

function onSnapEnd () {
  board.position(game.fen())
}

var config = {
  draggable: true,
  position: 'start',
  onDragStart: onDragStart,
  onDrop: onDrop,
  onMouseoutSquare: onMouseoutSquare,
  onMouseoverSquare: onMouseoverSquare,
  onSnapEnd: onSnapEnd
}
board = Chessboard('myBoard', config)

