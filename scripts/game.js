import Opponent from "./opponent.js";
import { handlePlayerInput, updateCollection } from "./display.js";

// Game Logic Controller Module

export var currentPlayer = false;
export var playerWon = false;
export var currentTurn = 0;
export var collection = [];
var opponent = Opponent;
var gameIsBeingPlayed = false;

export function startGame() {
    randomizeCollection();
    gameIsBeingPlayed = true;
    
    while (gameIsBeingPlayed) {
        if (currentPlayer) {
            // player logic
            gameIsBeingPlayed = false;
        }
        else {
            collection = opponent.opponentSelection(collection);
            alternateTurn();
        }
        updateCollection();
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
    let randomNumber = Math.random() * 4 + 3;

    for (let i = 0; i < randomNumber; i++) {
        let valuesInCollection = Math.random() * 10 + 1;
        let subCollection = [];
        for (let i = 0; i < valuesInCollection; i++) {
            let button = document.createElement('button');
            button.id = `button${i}`;
            button.innerText = "Nim";
            button.addEventListener('click', () => {
                handlePlayerInput(button);
            });
            subCollection.push(button);
        }
        collection.push(subCollection);
    }
    console.log(collection);
};
