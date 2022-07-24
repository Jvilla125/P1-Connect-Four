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

/*----- cached element references -----*/
const allButtonsEl = {
    startButton: document.getElementById("Start-Button").addEventListener('click',init),
    resetButton: document.getElementById("Reset-Button").addEventListener('click',init),
    playAgainButton: document.getElementById("Play-Again").addEventListener('click',init)
};

const turnTracker = {
    playerOne: {
        playerOne: document.querySelector("#PlayerOne"),
        playerOneImg: document.querySelector("#PlayerOne > img")
    },
    playerTwo: {
        playerTwo: document.querySelector("#PlayerTwo"),
        playerTwoImg: document.querySelector("#PlayerTwo > img")
    }
};

function test(){
for (let i = 0; i <= connectFourBoard.length;i++){
    let some = document.getElementById(`#${connectFourBoard[i]}`);
    console.log(some)
}
}

// const allRows = {
//     Row1: {
//         col1: document.getElementById("#1").addEventListener('click', turnBlue),
//         col2: document.getElementById("#2"),
//         col3: document.getElementById("#3"),
//         col4: document.getElementById("#4"),
//         col5: document.getElementById("#5"),
//         col6: document.getElementById("#6"),
//         col7: document.getElementById("#7")
//     },
//     Row2:{
//         col1: document.getElementById("#9"),
//         col2: document.getElementById("#10"),
//         col3: document.getElementById("#11"),
//         col4: document.getElementById("#12"),
//         col5: document.getElementById("#13"),
//         col6: document.getElementById("#14"),
//         col7: document.getElementById("#15")
//     }, 
// };

const playerOne = document.querySelector("#Playerturntracker > p");

/*----- event listeners -----*/



// Row1.addEventListener('click',function turnBlue(){
//     Row1.style.background = "blue";
// });


/*----- functions -----*/



function init(){
    score = {
        playerOne: 0,
        playerTwo: 0,
        draw: 0
    }
    winner = null;
     
    rendor();
}

function turnBlue(){
    for (let row in Row1){
        if (!row.classList.contains("")){
            Row1.col1.setAttribute("class","blue");
        }
    };
}

function turnRed(){
    for (let row in Row1){
    if (!row.classList.contains("")){
        row.setAttribute("class","red");
        }
    }
};



// const exa = document.querySelector("#One")
// exa.setAttribute("class", "blue")

// Row1.col1.addEventListener('click',turnBlue);
// Row1.col2.addEventListener('click',turnRed);


function rendor(){

    turnTracker.playerOne.playerOneImg.src = "imgs/blue-circle.jpg";
    turnTracker.playerTwo.playerTwoImg.src = "imgs/red-circle.png";


    turnTracker.playerOne.playerOne.style.border = "5px solid gray";
    turnTracker.playerTwo.playerTwo.style.border = "5px solid gray";
}

