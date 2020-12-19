
const renderG = new Renderer()

class GoldRush extends Matrix {
    constructor() {
        super()
        this.players = [{ num: 1, score: 0 }, { num: 2, score: 0 }]
        this.coins = 0
    }

    loadBoard(rowNum, colNum) {
        for (let i = 0; i < rowNum; i++) {
            this.matrix[i] = []
            for (let b = 0; b < colNum; b++) {
                this.matrix[i].push('.')
            }
        }
        this.matrix[0][0] = this.players[0].num
        this.matrix[rowNum - 1][colNum - 1] = this.players[1].num

        for (let c = 0; c < rowNum; c++) {
            let randomRow = Math.floor(Math.random() * Math.floor(rowNum))
            let randomColumn = Math.floor(Math.random() * Math.floor(rowNum))
            if (this.matrix[randomRow][randomColumn] === ".") {
                this.matrix[randomRow][randomColumn] = "c"
                this.coins++
            }
        }
        for (let w = 0; w < rowNum; w++) {
            let randomRow = Math.floor(Math.random() * Math.floor(rowNum))
            let randomColumn = Math.floor(Math.random() * Math.floor(rowNum))
            if (this.matrix[randomRow][randomColumn] === ".") {
                this.matrix[randomRow][randomColumn] = "w"
            }
        }
        return this.matrix
    }

    isCoin(x, y) {
        return this.matrix[x][y] === 'c' ? true : false
    }

    isWall(x, y) {
        return this.matrix[x][y] === 'w' ? true : false
    }

    isOpponent(playerNum, x, y) {
        if (playerNum === 1 && this.matrix[x][y] === 2) { return true }
        if (playerNum === 2 && this.matrix[x][y] === 1) { return true }
    }

    movePlayer(playerNum, direction) {
        let x = this.findCoordinate(playerNum).x
        let y = this.findCoordinate(playerNum).y
        if (direction === 'up') {
            let relPlayer = this.players.find(p => p.num === playerNum)
            if (x - 1 < 0) { return alert('no no no') }
            if (this.isWall(x - 1, y)) { return alert('oops') }
            if (this.isOpponent(playerNum, x - 1, y)) { return alert('don`t touch me!') }
            this.matrix[x][y] = '.'
            if (this.isCoin(x - 1, y)) {
                this.coins--
                relPlayer.score += 10
            }
            this.alter(x - 1, y, playerNum)
        }

        if (direction === 'down') {
            let relPlayer = this.players.find(p => p.num === playerNum)
            if (x + 1 > this.matrix.length - 1) { return alert('no no no') }
            if (this.isWall(x + 1, y)) { return alert('oops') }
            if (this.isOpponent(playerNum, x + 1, y)) { return alert('don`t touch me!') }
            this.matrix[x][y] = '.'
            if (this.isCoin(x + 1, y)) {
                relPlayer.score += 10
                this.coins--
            }
            this.alter(x + 1, y, playerNum)
        }
        if (direction === 'left') {
            let relPlayer = this.players.find(p => p.num === playerNum)
            if (this.isWall(x, y - 1)) { return alert('oops') }
            if (y - 1 < 0) { return alert('no no no') }
            if (this.isOpponent(playerNum, x, y - 1)) { return alert('don`t touch me!') }
            this.matrix[x][y] = '.'
            if (this.isCoin(x, y - 1)) {
                relPlayer.score += 10
                this.coins--
            }
            this.alter(x, y - 1, playerNum)
        }
        if (direction === 'right') {
            let relPlayer = this.players.find(p => p.num === playerNum)
            if (this.isWall(x, y + 1)) { return alert('oops') }
            if (y + 1 >= this.matrix[x].length) { return alert('no no no') }
            if (this.isOpponent(playerNum, x, y + 1)) { return alert('don`t touch me!') }
            this.matrix[x][y] = '.'
            if (this.isCoin(x, y + 1)) {
                relPlayer.score += 10
                this.coins--
            }
            this.alter(x, y + 1, playerNum)
        }
        this.checkGameOver(playerNum)
    }

    checkGameOver(playerNum) {
        if (this.coins === 0) { 
           alert(`The end! Player number ${playerNum} you win!`) 
           let matrix = this.loadBoard(5, 5)
           setTimeout(renderG.renderBoard(matrix), 1000)
            }
    }
}


