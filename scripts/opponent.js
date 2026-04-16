// Opponent Logic Module
let Opponent = {
    opponentSelection: function(collection) {
        let selectedGroup = Math.floor(Math.random() * collection.length);

        let poppedItemCount = Math.floor(Math.random() * collection[selectedGroup].length) + 1;
        if (poppedItemCount > 4) poppedItemCount = 4;

        for (let i = 0; i < poppedItemCount; i++) {
            if (collection[selectedGroup].length > 0) {
                collection[selectedGroup].pop();
            }
        }

        return collection;
    }
};

export default Opponent;