// Display and User Input Module
import {currentPlayer, playerWon, currentTurn, collection} from './game.js'

const displayCollection = document.getElementById("collection");
const startButton = document.getElementById("startButton");
const gameHistory = document.getElementById("winLossHistory");
const displayCurrentTurn = document.getElementById("currentTurn");
const displayCurrentPlayer = document.getElementById("currentPlayer");
const endTurnButton = document.getElementById("endTurnButton");
const firstPlayerRadio = document.getElementsByName("first_turn");

function updateCollection() {

};

function updateHistory() {
    
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

};

function promptStartNewGame() {

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

function handlePlayerInput(btn) {
    subCollection;
    collection.forEach(sub => {
        sub.forEach(element => {
            if (element === btn){
                subCollection = sub;
            };
        });
        if (!(subCollection === sub)){
            sub.forEach(element => {
                element.disable = true;
            });
        } ;
    });
    btn.remove();
};
