let xTurn = true
const headerEl = document.getElementById('header')
const boardEl = document.getElementById('board')
const startButton = document.createElement('button')
let turnsUsed = []

startButton.textContent ='Start Game'
headerEl.appendChild(startButton)


startButton.addEventListener('click', startGame)

function startGame() {
    for (let i = 0; i<9; i++){
        const buttonEl = document.createElement('button')
        buttonEl.id = 'square'
        let spaceFree = true
        boardEl.appendChild(buttonEl)
        buttonEl.dataset.index = i
        //console.log(buttonEl)
        buttonEl.addEventListener('click', () => {
            playerTurn(buttonEl)
        })
        
    }
    
    startButton.removeEventListener('click', startGame)
}

function playerTurn(clickedButton) {
    spaceFree = false
    clickedButton.id = "spaceUsed"
    turnsUsed.push(clickedButton.dataset.index)
    console.log(turnsUsed)

    if (xTurn == true) {
        clickedButton.textContent = 'x'
        clickedButton.disabled = true
        checkForWin()
        
    } else {
        clickedButton.textContent = 'o'
        clickedButton.disabled = true
        checkForWin()
    }
}

function checkForWin() {
    let win = false
    //array of arrays with winning combos.
    const winners = [
        [0, 1, 2],
        [0, 4, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 4, 6],
        [2, 5, 8],
        [3, 4, 5],
        [6, 7, 8] 
    ]

const usedSquaresArr = document.querySelectorAll('spaceUsed')





    //THIS ISNT CHECKING THE DATA-INDEX, it's just looking at the numbers above?
    //need to get the data indices, assign them, and then see if the textContent is the same?

    winners.forEach(function(array) {

    
        //if (squaresArr[array[0]] == squaresArr[array[1]] && squaresArr[array[1]] == squaresArr[array[2]]) {
        if (array[0] == array[1] && array[1] == array[2]) {
            win = true
            console.log('WINNER!!!')
        } else {
            console.log('no winner')
        }
    })


    
    if (win == true) {
        //display "WINNER"
        const winnerText = document.createElement('h1')
        winnerText.textContent = 'WINNER!'
        //Make winning xs or os Red
        restartGame()
    } else {
        xTurn = !xTurn
    }
}

function restartGame() {
{
    startButton.textContent = 'Restart Game'
    startButton.addEventListener('click', startGame)
}
}




