const render = new Renderer()
const board = new GoldRush()

const data = board.loadBoard()
console.log(data);
render.renderBoard(data)
render.renderScore1(board.players[0])
render.renderScore2(board.players[1])

// let scores = {player1Score: board.players[0].score,
//              player2Score: board.players[1].score}

 //render.renderScores(render.renderScores(board.players[0]))



$(document).keypress(function (e){
    switch(e.which) {
        case 119:
            board.movePlayer(1, "up")
            render.renderBoard(data)
            //console.log(scores);
            render.renderScore1(board.players[0])
          break;
        case 115:
            board.movePlayer(1, "down")
            render.renderBoard(data)
          //  console.log(scores);
          render.renderScore1(board.players[0])
          break;
          case 97:
            board.movePlayer(1, "left")
            render.renderBoard(data)
            render.renderScore1(board.players[0])
          break;
          case 100:
            board.movePlayer(1, "right")
            render.renderBoard(data)
            render.renderScore1(board.players[0])
          break;
          case 105:
            board.movePlayer(2, "up")
            render.renderBoard(data)
            render.renderScore2(board.players[1])
          break;
        case 107:
            board.movePlayer(2, "down")
            render.renderBoard(data)
            render.renderScore2(board.players[1])
          break;
          case 106:
            board.movePlayer(2, "left")
            render.renderBoard(data)
            render.renderScore2(board.players[1])
          break;
          case 108:
            board.movePlayer(2, "right")
            render.renderBoard(data)
            render.renderScore2(board.players[1])
          break;
     }

})