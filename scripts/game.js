// Game Logic Controller Module
import Opponent from "./opponent";

var currentPlayer;
var playerWon;
var currentTurn = 0;
var collection;
var opponent = new Opponent;
var gameIsBeingPlayed = false;

function startGame() {
    gameIsBeingPlayed = true;
    while (gameIsBeingPlayed) {
        updateCurrentTurn();
    }
};

function alternateTurn() {

};

function updateCurrentTurn() {
    currentTurn++;
};

function randomizeCollection() {

};