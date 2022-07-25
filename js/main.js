/*----- constants -----*/
let winner;
let score;

/*----- app's state (variables) -----*/
const connectFourBoard =  [
    1, 2, 3, 4, 5, 6, 7, 
    8, 9, 10, 11, 12, 13, 14,
    15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28,
    29, 30, 31, 32, 33, 34, 35,
    36, 37, 38, 39, 40, 41, 42
];

let totalChipCount = 42;

// /*----- cached element references -----*/
// const allButtonsEl = {
//     startButton: ),
//     resetButton: document.getElementById("Reset-Button").addEventListener('click',init),
//     playAgainButton: document.getElementById("Play-Again").addEventListener('click',init)
// };

const startButton = document.getElementById("Start-Button")
startButton.addEventListener('click', init)

const resetButton = document.getElementById("Reset-Button");
resetButton.addEventListener('click', init)

const playAgainButton = document.getElementById("Play-Again");
playAgainButton.addEventListener('click', init)

const scoreString = {
    playerOne: "Player 1 Score: ",
    playerTwo: "Player 2 Score: ",
    draw: "Draw: "
}
const playerTracker = {
    playerOne: {
        playerEl: document.querySelector("#PlayerOne"),
        playerElImg: document.querySelector("#PlayerOne > img"),
        turnString: "Player 1's turn",
        turn: true
    },
    playerTwo: {
        playerEl: document.querySelector("#PlayerTwo"),
        playerElImg: document.querySelector("#PlayerTwo > img"),
        turnString: "Player 2's turn"
    }
};

const scoreTracker = {
    playerOne: document.querySelector("#P1Score"),
    playerTwo: document.querySelector("#P2Score"),
    draw: document.querySelector("#Draw")
}

const tableEL = document.querySelector("#table");

const playerOne = document.querySelector("#Playerturntracker > p");

/*----- event listeners -----*/


/*----- functions -----*/



function init(){
    score = {
        playerOne: 0,
        playerTwo: 0,
        draw: 0
    }
    winner = null;
    startButton.style.display = "none";

    rendor();

}




function updatePlayersTurn(){       //this function will update playerones turn to true or false
    if (playerTracker.playerOne.turn === true){
        playerTracker.playerOne.playerEl.style.border = "none"
        playerTracker.playerTwo.playerEl.style.border = "5px solid gray";
        playerTracker.playerOne.turn = false;
    }else{
        playerTracker.playerOne.playerEl.style.border = "5px solid gray";
        playerTracker.playerTwo.playerEl.style.border = "none";
        playerTracker.playerOne.turn = true;
    }

}


function rendor(){
    // playerTracker.playerOne.playerOneImg.src = "imgs/blue-circle.jpg";
    // // playerTracker.playerTwo.playerTwoImg.src = "imgs/red-circle.png";
    
    resetButton.style.display = "block"
    // startButton.style.display = "block" //This is commented out for now. Will need when there is a winner

    playerTracker.playerOne.playerEl.style.border = "5px solid gray";
   
    for (const scoreCount in score){
        scoreTracker[scoreCount].innerText = `${scoreString[scoreCount]} ${score[scoreCount]}`;
    }

    for (const some in playerTracker){
        playerTracker[some].playerEl.innerText = playerTracker[some].turnString;
    }

    
    tableEL.addEventListener('click', e => {//this checks to see who's turn it is
        e.preventDefault() 
        if (playerTracker.playerOne.turn === true){
            if (!e.target.classList.contains("")){
                e.target.setAttribute('class', 'blue');  
            } 
        }else{
            if (!e.target.classList.contains("")){
                e.target.setAttribute('class', 'red');
            }
        }
        updatePlayersTurn();
    });

}



