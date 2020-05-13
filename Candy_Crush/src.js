const grid = document.getElementsByClassName('.app')
const width = 10
const squares = []


function createBoard() {
    for (let i = 0; i < width * width; i++) {
        const square = document.createElement('div')
        grid.appendChild(square)
        squares.push(square)
    }
}

setTimeout(() => {
    createBoard()
}, 5000);