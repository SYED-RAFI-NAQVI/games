document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.app')
    const width = 10
    const squares = []


    const candyColors = ['red', 'green', 'blue', 'yellow']


    function createBoard() {
        for (let i = 0; i < width * width; i++) {
            const square = document.createElement('div')
            let randomColor = Math.floor(Math.random() * candyColors.length)
            console.log(randomColor)
            console.log(candyColors[randomColor])
            square.style.backgroundColor = candyColors[randomColor]
            square.setAttribute('draggable', true)
            square.setAttribute('id', i)
            grid.appendChild(square)
            squares.push(square)
        }
    }

    createBoard()
})


