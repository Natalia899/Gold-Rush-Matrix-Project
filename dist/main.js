const render = new Renderer()
const board = new GoldRush()

const data = board.loadBoard(5, 5)
render.renderBoard(data)
render.renderScore1(board.players[0])
render.renderScore2(board.players[1])

$('#start').on('click', () => {
    const rowNum = $('#rowNum').val()
    const colNum = $('#colNum').val()
    const data = board.loadBoard(rowNum, colNum)
    render.renderBoard(data)
    render.renderScore1(board.players[0])
    render.renderScore2(board.players[1])

})

$(document).keypress(function (e) {
    switch (e.which) {
        case 119:
            board.limitBounds(1, "up")
            render.renderBoard(data)
            //console.log(scores);
            render.renderScore1(board.players[0])
            break;
        case 115:
            board.limitBounds(1, "down")
            render.renderBoard(data)
            //  console.log(scores);
            render.renderScore1(board.players[0])
            break;
        case 97:
            board.limitBounds(1, "left")
            render.renderBoard(data)
            render.renderScore1(board.players[0])
            break;
        case 100:
            board.limitBounds(1, "right")
            render.renderBoard(data)
            render.renderScore1(board.players[0])
            break;
        case 105:
            board.limitBounds(2, "up")
            render.renderBoard(data)
            render.renderScore2(board.players[1])
            break;
        case 107:
            board.limitBounds(2, "down")
            render.renderBoard(data)
            render.renderScore2(board.players[1])
            break;
        case 106:
            board.limitBounds(2, "left")
            render.renderBoard(data)
            render.renderScore2(board.players[1])
            break;
        case 108:
            board.limitBounds(2, "right")
            render.renderBoard(data)
            render.renderScore2(board.players[1])
            break;
    }

})