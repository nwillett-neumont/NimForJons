// Display and User Input Module
import {currentPlayer, playerWon, currentTurn, collection, startGame} from './game.js'

var displayCollection = document.getElementById("collection");
const startButton = document.getElementById("startButton");
const gameHistory = document.getElementById("winLossHistory");
const displayCurrentTurn = document.getElementById("currentTurn");
const displayCurrentPlayer = document.getElementById("currentPlayer");
const endTurnButton = document.getElementById("endTurnButton");
const firstPlayerRadio = document.getElementsByName("first_turn");

startButton.addEventListener('click', startGame);

export function updateCollection() {
    for (let i of collection) {
        let div = document.createElement('div');
        displayCollection.appendChild(div);
        for (let j of i) {
            div.appendChild(j);
        }
    }
};

function updateHistory() { // not needed

};

function updateCurrentTurn() {
    displayCurrentTurn.innerText = currentTurn;
    displayCurrentPlayer.innerText = (currentPlayer) ? "Player" : "Opponent";
    collection.forEach(sub => {
        sub.forEach(element => {
            element.disable = false;
        });
    });
};

function showWinner() {
    displayCurrentPlayer.innerText = (playerWon) ? "You Win!" : "You Lose!";
};

function promptStartNewGame() {

    displayCollection = document.getElementById("collection");

    displayCollection.hidden = true;
    displayCurrentTurn.hidden = true;
    displayCurrentPlayer.hidden = true;
    endTurnButton.hidden = true;

    gameHistory.hidden = false;
    firstPlayerRadio.hidden = false;
    startButton.hidden = false;
};

// Not Needed
// function promptContinueToMainMenu() {

// };

function showGameUI(collection,playerBool) {
    displayCollection.innerHTML = collection;
    displayCollection.hidden = false;
    displayCurrentTurn.hidden = false;
    displayCurrentPlayer.hidden = false;
    endTurnButton.hidden = false;
    startButton.hidden = true;
    document.getElementById("playerStart").hidden = true;
    document.getElementById("computerStart").hidden = true;
    if (!playerBool){
        document.getElementById("currentPlayer").innerHTML = "Computer's Turn";
    };
};

// Not Needed
// function changePlayerButton() {

// };

export function handlePlayerInput(btn) {
    console.log(collection);
    for (let sub of collection) {
        for (let subsub of sub) {
            subsub.disabled = true;
        }
    };
    let index;
    let indexToRemove;
    for (let i = 0; i < collection.length; i++) {
        for (let j = 0; j < collection[i].length; j++) {
            if (collection[i][j].id === btn.id) {
                index = i;
                break;
            }
        };
        
    };

    collection[index].pop();
    btn.parentElement.removeChild(btn);

    for (let element of (collection[index])) {
        element.disabled = false;
    };
};
