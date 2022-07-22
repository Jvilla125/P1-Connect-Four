/*----- constants -----*/
let winner;
let score;

/*----- app's state (variables) -----*/


let totalChipCount = 42;

/*----- cached element references -----*/
const allButtonsEl = {
    startButton: document.getElementById("Start-Button"),
    resetButton: document.getElementById("Reset-Button"),
    playAgainButton: document.getElementById("Play-Again")
};

const playerOneEl = {
    playerOne: document.querySelector("#PlayerOne"),
    playerOneImg: document.querySelector("#PlayerOne > img")
}
const playerTwoEl = {
    playerTwo: document.querySelector("#PlayerTwo"),
    playerTwoImg: document.querySelector("#PlayerTwo > img")
}

const playerOne = document.querySelector("#Playerturntracker > p")

/*----- event listeners -----*/

document.querySelector("#Reset-Button").addEventListener('click', init);
document.querySelector("#Start-Button").addEventListener('click', init);
document.querySelector("#Play-Again").addEventListener('click', init);

/*----- functions -----*/


init()
function init(){
    score = {
        playerOne: 0,
        playerTwo: 0,
        draw: 0
    }
    winner = null;
     
    rendor();
}

function rendor(){

    playerOneEl.playerOneImg.src = "imgs/blue-circle.jpg";
    playerTwoEl.playerTwoImg.src = "imgs/red-circle.png";

}

