let xTurn = true
const headerEl = document.getElementById('header')
const boardEl = document.getElementById('board')
const startButton = document.createElement('button')
let xsUsed = []
let osUsed = []
let win = false

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

startButton.textContent ='Start Game'
headerEl.appendChild(startButton)


startButton.addEventListener('click', startGame)

function startGame() {
    for (let i = 0; i<9; i++){
        const buttonEl = document.createElement('button')
        buttonEl.classList.add('square')
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
    
    clickedButton.id = "spaceUsed"
    clickedButton.disabled = true

    //add to turns used array
   // turnsUsed.push(clickedButton.dataset.index)
    //console.log(turnsUsed)

    if (xTurn == true) {
        clickedButton.textContent = 'x'
        xsUsed.push(clickedButton.dataset.index)
        console.log(xsUsed)
        win = isWinningCombo(xsUsed)

    } else {
        clickedButton.textContent = 'o'
        osUsed.push(clickedButton.dataset.index)
        console.log(osUsed)
        console.log(isWinningCombo(osUsed))
        win = isWinningCombo(osUsed)
    }


    if (win) {
        gameWon()
    } else if ((xsUsed.length + osUsed.length) == 9) {
        resetStartButton()
    } else {
     xTurn = !xTurn
    }
}
//SOMETHING WRONG WITH THIS
function isWinningCombo(playerMoves) {
  return winners.some(combo =>
    combo.every(index => playerMoves.includes(index))
  );
}

// function checkForWin() {
    
//     //const usedSquaresArr = document.querySelectorAll('spaceUsed')

//     //THIS ISNT CHECKING THE DATA-INDEX, it's just looking at the numbers above?
//     //need to get the data indices, assign them, and then see if the textContent is the same?

//     // winners.forEach(function(array) {
//     //     //if (squaresArr[array[0]] == squaresArr[array[1]] && squaresArr[array[1]] == squaresArr[array[2]]) {
//     //    // if (array[0] == array[1] && array[1] == array[2]) {
//     //         win = true
//     //         console.log('WINNER!!!')
//     //     } else if (turnsUsed.length == 9) {
//     //         resetStartButton()
//     //     } else {
//     //         console.log('no winner')
//     //     }
//     // })

//     if (win == true) {
//         gameWon()
       
//     } else {
//         xTurn = !xTurn
//     }
// }

function gameWon() {
        //display "WINNER"
        const winnerText = document.createElement('h1')
        winnerText.textContent = 'WINNER!'
        //disable all other squares

        //Make winning xs or os Red

        //changeStartButton
        resetStartButton()
}

function resetStartButton() {
    startButton.textContent = 'Restart Game'
    startButton.addEventListener('click', restartGame)
}

function restartGame() {
{
    // const allSquares = document.querySelectorAll('square')
    // allSquares.remove()
    const squaresToRemove = document.querySelectorAll('.square')
    squaresToRemove.forEach(square => {
        square.remove()
    })

    startGame() 
}
}




