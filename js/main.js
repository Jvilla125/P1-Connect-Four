/*----- constants -----*/
let winner;
let chipCount;
/*----- app's state (variables) -----*/
const playerTracker = {
    playerOne: {
        playerEl: document.querySelector("#PlayerOne"),
        turnString: "Player 1's turn",
        turn: true,
        winner: false
    },
    playerTwo: {
        playerEl: document.querySelector("#PlayerTwo"),
        turnString: "Player 2's turn",
        winner: false
    }
};
// /*----- cached element references -----*/

const winnerMsg = document.querySelector("h2");
const playerOne = document.querySelector("#Playerturntracker > p");
const startButton = document.getElementById("Start-Button")
const playAgainButton = document.getElementById("Play-Again");
const columnEl = document.querySelectorAll("td");
const rowEl = document.querySelectorAll("tr")

/*----- event listeners -----*/

startButton.addEventListener('click', init)
playAgainButton.addEventListener('click', init)
/*----- functions -----*/

function init(){
    chipCount = 42;
    winner = null;
    winnerMsg.style.display = "none";
    startButton.style.display = "none";
    playAgainButton.style.display = "none";
    playerTracker.playerTwo.playerEl.style.border = "none"
    playerTracker.playerOne.turn = true;
    rendor();
}

function playAgain(){
    playAgainButton.style.display = "block"
    playerTracker.playerOne.playerEl.style.border = "none";
    playerTracker.playerOne.playerEl.classList.remove("blue");
    playerTracker.playerTwo.playerEl.classList.remove("red");
    playerTracker.playerTwo.playerEl.style.border = "none";
    playerTracker.playerOne.playerEl.style.display = "none";
    playerTracker.playerTwo.playerEl.style.display = "none";
    playAgainButton.addEventListener('click', e =>{
        columnEl.forEach(item =>{
            item.classList.remove("red", "hasChip", "blue", "yellow");
        });
        init();
    });
}

function updatePlayersTurn(){        
    chipCount--;
    if (chipCount == 0){
        endGame();
    }
    if (playerTracker.playerOne.turn === true){
        playerTracker.playerOne.playerEl.style.border = "none"
        playerTracker.playerTwo.playerEl.style.border = "8px solid black";
        playerTracker.playerOne.turn = false;
    }else{
        playerTracker.playerOne.playerEl.style.border = "8px solid black";
        playerTracker.playerTwo.playerEl.style.border = "none";
        playerTracker.playerOne.turn = true;
    }
}

function checkWinner(){
    horizontalWinnerCheck();
    verticalWinnerCheck();
    diagonalUpWinnerCheck();
    diagonalDownWinnerCheck();
}

function horizontalWinnerCheck(){
     for (let i = 0; i < columnEl.length; i++){
        if(i+3 <= columnEl.length){  
            if (columnEl[i].classList.contains('blue') && columnEl[i+1].classList.contains('blue') && columnEl[i+2].classList.contains('blue') && columnEl[i+3].classList.contains('blue')){
                columnEl[i].classList.add("yellow");
                columnEl[i+1].classList.add("yellow");
                columnEl[i+2].classList.add("yellow");
                columnEl[i+3].classList.add("yellow");
                // let columns = [columnEl[i],columnEl[i+1],columnEl[i+2],columnEl[i+3]]
                playerTracker.playerOne.winner = true;
                endGame();
            }else{
                if(columnEl[i].classList.contains('red') && columnEl[i+1].classList.contains('red') && columnEl[i+2].classList.contains('red') && columnEl[i+3].classList.contains('red')){
                    columnEl[i].classList.add("yellow");
                    columnEl[i+1].classList.add("yellow");
                    columnEl[i+2].classList.add("yellow");
                    columnEl[i+3].classList.add("yellow");
                    // let columns = [columnEl[i],columnEl[i+1],columnEl[i+2],columnEl[i+3]]
                    playerTracker.playerOne.winner = false;
                    endGame();
                }
            } 
        }
    }
}

// function checkRows(columns){
//     for (let i = 0; i < columns.length;i++){
//         console.log(columns.parent);
//         if (columns[i].parent(`Row-${i}`) 
//         && columns[i+1].parentElement.classList.contains(`Row-${i}`)
//         && columns[i+2].parentElement.classList.contains(`Row-${i}`) 
//         && columns[i+3].parentElement.classList.contains(`Row-${i}`)){
//         return true;
//         }
//     else{
//         return false;
//     }
//     }
// }

function verticalWinnerCheck(){
    for (let i = 0; i < columnEl.length; i++){
        if(i+21 <=columnEl.length){
            if ((columnEl[i].classList.contains('blue')) && (columnEl[i+7].classList.contains('blue')) && (columnEl[i+14].classList.contains('blue')) && (columnEl[i+21].classList.contains('blue'))){
                columnEl[i].classList.add("yellow");
                columnEl[i+7].classList.add("yellow");
                columnEl[i+14].classList.add("yellow");
                columnEl[i+21].classList.add("yellow");
                playerTracker.playerOne.winner = true;
                endGame();
            }else{
                if((columnEl[i].classList.contains('red')) && (columnEl[i+7].classList.contains('red')) && (columnEl[i+14].classList.contains('red')) && (columnEl[i+21].classList.contains('red'))){
                    columnEl[i].classList.add("yellow");
                    columnEl[i+7].classList.add("yellow");
                    columnEl[i+14].classList.add("yellow");
                    columnEl[i+21].classList.add("yellow");
                    playerTracker.playerOne.winner = false;
                    endGame();
                }   
            }
        }
    }
}

function diagonalUpWinnerCheck(){
    for (let i = 0; i <= columnEl.length; i++){
        if(i+18 <=columnEl.length){
            if (columnEl[i].classList.contains('blue') && columnEl[i+6].classList.contains('blue') && columnEl[i+12].classList.contains('blue') && columnEl[i+18].classList.contains('blue')){
                columnEl[i].classList.add("yellow");
                columnEl[i+6].classList.add("yellow");
                columnEl[i+12].classList.add("yellow");
                columnEl[i+18].classList.add("yellow");
                playerTracker.playerOne.winner = true;
                endGame();
            }else{
                if(columnEl[i].classList.contains('red') && columnEl[i+6].classList.contains('red') && columnEl[i+12].classList.contains('red') && columnEl[i+18].classList.contains('red')){
                    columnEl[i].classList.add("yellow");
                    columnEl[i+6].classList.add("yellow");
                    columnEl[i+12].classList.add("yellow");
                    columnEl[i+18].classList.add("yellow");
                    playerTracker.playerOne.winner = false;
                    endGame();
                }
            } 
        }  
    }
}
function diagonalDownWinnerCheck(){
    for (let i = 0; i <= columnEl.length; i++){
        if(i+24 <= columnEl.length){
            if (columnEl[i].classList.contains('blue') && columnEl[i+8].classList.contains('blue') && columnEl[i+16].classList.contains('blue') && columnEl[i+24].classList.contains('blue')){
                columnEl[i].classList.add("yellow");
                columnEl[i+8].classList.add("yellow");
                columnEl[i+16].classList.add("yellow");
                columnEl[i+24].classList.add("yellow");
                playerTracker.playerOne.winner = true;
                endGame();
            }else{
                if(columnEl[i].classList.contains('red') && columnEl[i+8].classList.contains('red') && columnEl[i+16].classList.contains('red') && columnEl[i+24].classList.contains('red')){
                    columnEl[i].classList.add("yellow");
                    columnEl[i+8].classList.add("yellow");
                    columnEl[i+16].classList.add("yellow");
                    columnEl[i+24].classList.add("yellow");
                    playerTracker.playerOne.winner = false;
                    endGame();
                }
            } 
        }
    }
}
 
function endGame(){
    if(chipCount == 0){
        winnerMsg.style.display = "block"
        winnerMsg.style.border ="8px solid black"
        winnerMsg.innerText = "Draw!"
        playAgain();
    }
    else if (playerTracker.playerOne.winner == true){
        winnerMsg.style.display = "block"
        winnerMsg.style.border ="8px solid black"
        winnerMsg.innerText = "Player 1 Wins!"
        
        playAgain();
    }else {
        winnerMsg.style.display = "block"
        winnerMsg.style.border ="8px solid black"
        winnerMsg.innerText = "Player 2 Wins!"
        playAgain();
    }
}

function rendor(){
    playerTracker.playerOne.playerEl.style.border = "8px solid black";
    playerTracker.playerOne.playerEl.classList.add("blue");
    playerTracker.playerTwo.playerEl.classList.add("red");
    playerTracker.playerOne.playerEl.style.display = "block";
    playerTracker.playerTwo.playerEl.style.display = "block";
    for (const track in playerTracker){
        playerTracker[track].playerEl.innerText = playerTracker[track].turnString;
    }

    for (let i = 0; i < columnEl.length; i++){     
        columnEl[i].addEventListener('click', e =>{   
        if (columnEl[i].classList.contains("Row1") || (columnEl[i+7].classList.contains("hasChip"))){
                if(playerTracker.playerOne.turn === true){
                    if(!columnEl[i].classList.contains("blue") && !columnEl[i].classList.contains("red")){
                        columnEl[i].classList.add('hasChip');
                        columnEl[i].classList.add('blue');
                        updatePlayersTurn(); 
                        checkWinner();
                    } 
                }else{
                    if(!columnEl[i].classList.contains("red") && !columnEl[i].classList.contains("blue")){
                        columnEl[i].classList.add("hasChip");
                        columnEl[i].classList.add('red');
                        updatePlayersTurn();
                        checkWinner();
                    }      
                }      
            }   
        });
    }
}

