class LuckySevens {
    constructor(startingCash) {
        this._cash = startingCash;
        this._bet = 0;
    }

    RollDice = () => {
        return Math.ceil(Math.random() * 6);
    }

    Play = () => {
        // our gameplay program
    }

}