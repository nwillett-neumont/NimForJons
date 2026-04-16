import Opponent from "./opponent.js";

// Game Logic Controller Module

export var currentPlayer = false;
export var playerWon = false;
export var currentTurn = 0;
export var collection = [];
var opponent = Opponent;
var gameIsBeingPlayed = false;

function startGame() {
    randomizeCollection();
    gameIsBeingPlayed = true;
    
    while (gameIsBeingPlayed) {
        if (currentPlayer) {
            // player logic
        }
        else {
            collection = opponent.opponentSelection(collection);
        }
    }
};

function alternateTurn() {
    updateCurrentTurn();
    currentPlayer = !currentPlayer;
};

function updateCurrentTurn() {
    currentTurn++;
};

function randomizeCollection() {
    let randomNumber = Math.random() * 6 + 1;

    for (let i = 0; i < randomNumber; i++) {
        let valuesInCollection = Math.random() * 10 + 1;
        let subCollection = [];
        for (let i = 0; i < valuesInCollection; i++) {
            subCollection.push(document.createElement('button'));
        }
        collection.push(subCollection);
    }
};