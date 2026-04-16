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
    displayCollection.append(collection);
};

function updateHistory() { // not needed

};

function updateCurrentTurn() {
    displayCurrentTurn.innerText = currentTurn;
    displayCurrentPlayer.innerText = (currentPlayer) ? "Player" : "Opponent";
};

function showWinner() {
    displayCurrentPlayer.innerText = (playerWon) ? "You Win!" : "You Lose!";
};

function promptStartNewGame() {
    displayCollection.hidden = true;
    displayCurrentTurn.hidden = true;
    displayCurrentPlayer.hidden = true;
    endTurnButton.hidden = true;

    gameHistory.hidden = false;
    firstPlayerRadio.hidden = false;
    startButton.hidden = false;
};

function promptContinueToMainMenu() {

};

function showGameUI() {

};

function changePlayerButton() {

};

function handlePlayerInput() {
    
};
