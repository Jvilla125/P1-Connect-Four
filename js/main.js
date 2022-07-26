/*----- constants -----*/
let winner;
let score;

/*----- app's state (variables) -----*/
const connectFourBoard =  [
    [1, 2, 3, 4, 5, 6, 7],
    [8, 9, 10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19, 20, 21],
    [22, 23, 24, 25, 26, 27, 28],
    [29, 30, 31, 32, 33, 34, 35],
    [36, 37, 38, 39, 40, 41, 42]
];
const scoreString = {
    playerOne: "Player 1 Score: ",
    playerTwo: "Player 2 Score: ",
    draw: "Draw: "
}

// /*----- cached element references -----*/


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
    playerTracker.playerTwo.playerEl.style.border = "none"
   
    rendor();

}

//this function will update playerones turn to true or false
function updatePlayersTurn(){       
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

    // resetButton.style.display = "block"
    // startButton.style.display = "block" //This is commented out for now. Will need when there is a winner

    playerTracker.playerOne.playerEl.style.border = "5px solid gray";
   
    for (const scoreCount in score){
        scoreTracker[scoreCount].innerText = `${scoreString[scoreCount]} ${score[scoreCount]}`;
    }

    for (const some in playerTracker){
        playerTracker[some].playerEl.innerText = playerTracker[some].turnString;
    }
 
    for (let i = 0; i < columnEl.length; i++){
        columnEl[i].addEventListener('click', e =>{
        if (columnEl[i].classList.contains("Row1") || (columnEl[i+7].classList.contains("hasChip"))){
            if(playerTracker.playerOne.turn === true){
                if(!columnEl[i].classList.contains("blue") && !columnEl[i].classList.contains("red")){
                    columnEl[i].classList.add('hasChip');
                    columnEl[i].classList.add('blue');
                    updatePlayersTurn();
                } else{
                    return
                }
                }else{
                    if(!columnEl[i].classList.contains("red") && !columnEl[i].classList.contains("blue")){
                        columnEl[i].classList.add("hasChip");
                        columnEl[i].classList.add('red');
                        updatePlayersTurn();
                    } else{
                        return;
                    }
                }   
            }      
        });
    }

}

// tableEL.addEventListener('click', e => {//this checks to see who's turn it is
//     e.preventDefault() 
//     if (e.target.id == "table") {
//         return;
//     } 
//     if (playerTracker.playerOne.turn === true){
//         if(!e.target.classList.contains("blue") && !e.target.classList.contains("red") ){
//             e.target.classList.add('blue');
//         }
//         else {
//             return;
//         } 
//     }else{
//         if (!e.target.classList.contains("red") && !e.target.classList.contains("blue")){
//             e.target.classList.add('red');
//             // console.log(e.target)
//         }
//         else {
//             return;
//         }
//     }
