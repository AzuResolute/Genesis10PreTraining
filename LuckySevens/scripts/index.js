// class

class LuckySevens {
    constructor(startingCash) {
        this._start = this._peak = this._cash = startingCash;
        this._rollCount = this._peakPosition = 0;
    }

    RollDice = () => {
        return Math.ceil(Math.random() * 6);
    }

    Bet = () => {
        let Roll1 = this.RollDice();
        let Roll2 = this.RollDice();
        this._cash += (Roll1 + Roll2) === 7 ? 4 : -1;
    }
    
    UpdateRecord = () => {
        this._rollCount++;
        if(this._cash > this._peak){
            this._peak = this._cash;
            this._peakPosition = this._rollCount;
        }
    }

    Play = () => {
        // our gameplay program
    }

    RenderResults = () => {
        // render table showing results
        let results = document.querySelector("#results");
        results.innerHTML = 
        `<tbody>
            <tr>
                <td>Starting Bet</td>
                <td>${this._start}</td>
            </tr>
            <tr>
                <td>Total Rolls Before Going Broke</td>
                <td>${this._rollCount}</td>
            </tr>
            <tr>
                <td>Highest Amount Won</td>
                <td>${this._peak}</td>
            </tr>
            <tr>
                <td>Roll Count at Highest Amount Won</td>
                <td>${this._peakPosition}</td>
            </tr>
        </tbody>`
    }

    ConsoleBet = () => {
        let Roll1 = this.RollDice();
        let Roll2 = this.RollDice();
        console.log(`----------------------------`)
        console.log(`Bet #${this._rollCount + 1}`)
        console.log(`Old Cash ===> ${this._cash}`)
        console.log(`curr peak ==> ${this._peak}`)
        console.log(`curr pp ====> ${this._peakPosition}`)
        console.log(`Roll #1 ====> ${Roll1}`)
        console.log(`Roll #2 ====> ${Roll2}`)
        this._cash += (Roll1 + Roll2) === 7 ? 4 : -1;
        console.log(`New Cash ===> ${this._cash}`)
    }
    
    ConsoleResults = () => {
        console.log(`------------RESULTS----------------`)
        console.log(`starting cash ===> ${this._start}`);
        console.log(`roll count ======> ${this._rollCount}`);
        console.log(`peak ============> ${this._peak}`);
        console.log(`peak position ===> ${this._peakPosition}`);
        console.log(`-----------------------------------`)
    }

}

// program

// test play

let testgame = new LuckySevens(10);
while(testgame._cash > 0){
    testgame.ConsoleBet();
    testgame.UpdateRecord();
}
testgame.ConsoleResults();
