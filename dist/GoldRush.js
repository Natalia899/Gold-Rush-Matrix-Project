
class GoldRush extends Matrix {
    constructor() {
        super()
        this.players = [{ num: 1, score: 0 }, { num: 2, score: 0 }]
        // this.player1= {num:1, score:0}
        // this.player2= {num:2, score:0}

    }
    loadBoard() {
        for (let i = 0; i < 5; i++) {
            this.matrix[i] = []
            for (let b = 0; b < 5; b++) {
                this.matrix[i].push('.')
            }
        } this.matrix[0][0] = this.players[0].num
        this.matrix[4][4] = this.players[1].num
        for (let c = 0; c < 10; c++) {
            let randomRow = Math.floor(Math.random() * Math.floor(5))
            let randomColumn = Math.floor(Math.random() * Math.floor(5))
            if (this.matrix[randomRow][randomColumn] === ".") {
                this.matrix[randomRow][randomColumn] = "c"
            }
        }
        return this.matrix
    }

    isCoin(x, y) {
        return this.matrix[x][y] === 'c' ? true : false
    }

    movePlayer(playerNum, direction) {
        // console.log(this.findCoordinate(playerNum))
        // console.log(this.findCoordinate(playerNum).x)
        let x = this.findCoordinate(playerNum).x
        let y = this.findCoordinate(playerNum).y
        this.matrix[x][y] = '.'
        if (direction === 'up') {
            let relPlayer = this.players.find(p => p.num === playerNum)
            if (this.isCoin(x - 1, y)) { relPlayer.score += 10 }
            this.alter(x - 1, y, playerNum)

        }
        if (direction === 'down') {
            let relPlayer = this.players.find(p => p.num === playerNum)
            if (this.isCoin(x + 1, y)) { relPlayer.score += 10 }
            this.alter(x + 1, y, playerNum)

        }
        if (direction === 'left') {
            let relPlayer = this.players.find(p => p.num === playerNum)
            if (this.isCoin(x, y - 1)) { relPlayer.score += 10 }
            this.alter(x, y - 1, playerNum)

        }
        if (direction === 'right') {
            let relPlayer = this.players.find(p => p.num === playerNum)
            if (this.isCoin(x, y + 1)) { relPlayer.score += 10 }
            this.alter(x, y + 1, playerNum)

        }

        // for (let i = 0; i < this.matrix.length; i++) {
        //     for (let j = 0; j < this.matrix[i].length; j++) {
        //         if (playerNum === this.matrix[i][j]) {
        //             this.matrix[i][j] = '.'
        //             if (direction === 'up') {

        //                 this.matrix[i - 1][j] = playerNum
        //                 return
        //             }
        //             if (direction === 'down') {
        //                 this.matrix[i + 1][j] = playerNum
        //                 return
        //             }
        //             if (direction === 'left') {
        //                 this.matrix[i][j - 1] = playerNum
        //                 return
        //             }
        //             if (direction === 'right') {
        //                 this.matrix[i][j + 1] = playerNum
        //                 return
        //             }

        //         }

        //     }
        // }
    }
}

const board = new GoldRush()
board.loadBoard()
// //board.print()
board.movePlayer(1, "down") //this method should be defined inside of GoldRush
// board.print()

board.movePlayer(2, "left")
board.print()
board.movePlayer(2, "up")
board.print()
console.log(board.players[1].score)
// const board = new GoldRush()
console.log(board.players[0].score) //prints 0
// board.print()
// // 1       .       .       c       .
// // .       .       .       .       c
// // c       .       .       c       .
// // .       c       .       .       .
// // c       .       .       .       2

// board.movePlayer(1, "down")
// console.log(board.players[0].score) //prints 0
// board.print()
// // .       .       .       c       .
// // 1       .       .       .       c
// // c       .       .       c       .
// // .       c       .       .       .
// // c       .       .       .       2

// board.movePlayer(1, "down")
// console.log(board.players[0].score) //prints 10
// board.print()
// // .       .       .       c       .
// // .       .       .       .       c
// // 1       .       .       c       .
// // .       c       .       .       .
// // c       .       .       .       2

// board.movePlayer(1, "down")
// console.log(board.players[0].score) //prints 10
// board.print()
// // .       .       .       c       .
// // .       .       .       .       c
// // .       .       .       c       .
// // 1       c       .       .       .
// // c       .       .       .       2﻿