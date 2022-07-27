/*----- constants -----*/
let winner;
let score;

/*----- app's state (variables) -----*/
const connectFourBoard =  [
    [42, 41, 40, 39, 38, 37, 36],
    [35, 34, 33, 32, 31, 30, 29],
    [28, 27, 26, 25, 24, 23, 21],
    [20, 19, 18, 17, 16, 15, 14],
    [13, 12, 11, 10, 9, 8],
    [7, 6, 5, 4, 3, 2, 1]
];
const scoreString = {
    playerOne: "Player 1 Score: ",
    playerTwo: "Player 2 Score: ",
    draw: "Draw: "
}

// /*----- cached element references -----*/

const winnerMsg = document.querySelector("h2");
const tableEL = document.querySelector("#table");
const playerOne = document.querySelector("#Playerturntracker > p");
const square = document.querySelectorAll("#table td");
const startButton = document.getElementById("Start-Button")
startButton.addEventListener('click', init)
const playAgainButton = document.getElementById("Play-Again");
playAgainButton.addEventListener('click', init)
const columnEl = document.querySelectorAll("td");
const rowEl = document.querySelectorAll("tr")


const playerTracker = {
    playerOne: {
        playerEl: document.querySelector("#PlayerOne"),
        playerElImg: document.querySelector("#PlayerOne > img"),
        turnString: "Player 1's turn",
        turn: true,
        winner: false
    },
    playerTwo: {
        playerEl: document.querySelector("#PlayerTwo"),
        playerElImg: document.querySelector("#PlayerTwo > img"),
        turnString: "Player 2's turn",
        winner: false
    }
};

const scoreTracker = {
    playerOne: document.querySelector("#P1Score"),
    playerTwo: document.querySelector("#P2Score"),
    draw: document.querySelector("#Draw")
}

/*----- event listeners -----*/


/*----- functions -----*/

function init(){
    score = {
        playerOne: 0,
        playerTwo: 0,
        draw: 0
    }
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
    playAgainButton.addEventListener('click', e =>{
        columnEl.forEach(item =>{
            item.classList.remove("red", "hasChip", "blue");
        });
        init();
    });
    
}

//this function will update playerones turn to true or false
function updatePlayersTurn(){        
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
    diagonalWinnerCheck();
}

function horizontalWinnerCheck(){
    for (let i = 0; i < columnEl.length; i++){
        if (columnEl[i].classList.contains("blue") && columnEl[i+1].classList.contains("blue")
        && columnEl[i+2].classList.contains("blue") && columnEl[i+3].classList.contains("blue")){
            playerTracker.playerOne.winner = true;
            avengersEndGame();
        } 
        else{
         if(columnEl[i].classList.contains("red") && columnEl[i+1].classList.contains("red")
         && columnEl[i+2].classList.contains("red") && columnEl[i+3].classList.contains("red")){
            playerTracker.playerTwo.winner = true;
            avengersEndGame();
            }
        } 
    }
}

function verticalWinnerCheck(){
    for(let i = 0; i < columnEl.length; i++){
        if (columnEl[i].classList.contains("blue") && columnEl[i+7].classList.contains("blue")
        && columnEl[i+14].classList.contains("blue") && columnEl[i+21].classList.contains("blue")){
            playerTracker.playerOne.winner = true;
            avengersEndGame();
        }else{
            if (columnEl[i].classList.contains("red") && columnEl[i+7].classList.contains("red")
            && columnEl[i+14].classList.contains("red") && columnEl[i+21].classList.contains("red")){
            playerTracker.playerTwo.winner = true;
            avengersEndGame();
            }
        }
    }
}

// function diagonalWinnerCheck(){
//     for(let i = 0; i < columnEl.length; i++){
//         if (columnEl[i].classList.contains("blue") && columnEl[i+6].classList.contains("blue")
//         && columnEl[i+12].classList.contains("blue") && columnEl[i+18].classList.contains("blue")){
//             playerTracker.playerOne.winner = true;
//             avengersEndGame();
//         }else{
//             if (columnEl[i].classList.contains("red") && columnEl[i+6].classList.contains("red")
//             && columnEl[i+12].classList.contains("red") && columnEl[i+18].classList.contains("red")){
//             playerTracker.playerTwo.winner = true;
//             avengersEndGame();
//             }
//         }
//     }

// }

    //horizontal check 
    // for (let i = 0; i < columnEl.length; i++){
    //     //horizontal check 
    //     if (columnEl[i].classList.contains("blue") &&(columnEl[i+1].classList.contains("blue")) 
    //     && columnEl[i+2].classList.contains("blue") && columnEl[i+3].classList.contains("blue")){
    //         playerTracker.playerOne.winner = true;
    //         avengersEndGame();
    //     } else if (columnEl[i].classList.contains("red") &&(columnEl[i+1].classList.contains("red")) 
    //     && columnEl[i+2].classList.contains("red") && columnEl[i+3].classList.contains("red")){
    //         playerTracker.playerTwo.winner = true;

    //         avengersEndGame();
    //     }      
    //     else{
    //         console.log("No winner")
    //     }
    //     //vertical check
    // }
    
    

function avengersEndGame(){
    if (playerTracker.playerOne.winner == true){
        winnerMsg.style.display = "block"
        winnerMsg.style.border ="8px solid black"
        winnerMsg.innerText = "Player 1 Wins!"
        playAgain();
    }else if(playerTracker.playerTwo.winner == true){
        winnerMsg.style.display = "block"
        winnerMsg.style.border ="8px solid black"
        winnerMsg.innerText = "Player 2 Wins!"
        playAgain();
        }
        else{ 
            console.log("No winner")
        }
    }



function rendor(){

    // resetButton.style.display = "block"
    // startButton.style.display = "block" //This is commented out for now. Will need when there is a winner

    playerTracker.playerOne.playerEl.style.border = "8px solid black";
    playerTracker.playerOne.playerEl.classList.add("blue");
    playerTracker.playerTwo.playerEl.classList.add("red");
   
    for (const scoreCount in score){
        scoreTracker[scoreCount].innerText = `${scoreString[scoreCount]} ${score[scoreCount]} `;
    }

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
                    // checkWinner();
                } else{
                    return
                }
            }else{
                if(!columnEl[i].classList.contains("red") && !columnEl[i].classList.contains("blue")){
                    columnEl[i].classList.add("hasChip");
                    columnEl[i].classList.add('red');
                    updatePlayersTurn();
                    checkWinner();  
                    // checkWinner();
                } else{
                    return;
                }
            }   
            
        }   
         
    });
    
    };

}

