import { useState } from "react";

function Gamba({ getBalance, getIncome }) {
    const [money, setMoney] = useState(0);
    const [gamba, setGamba] = useState(0);
    const [gambaDisplay, setGambaDisplay] = useState("Spin to Win");
    const [bet, setBet] = useState(0.5); // Default minimum bet
    const [income, setIncome] = useState(0);

    function gamble() {
        if (money < bet) {
            setGambaDisplay("Not Enough Money");
            return;
        }

        const gambaValue = Math.random() * 10;
        setGamba(gambaValue);

        let newMoney = money;
        let newIncome = 0;

        if (gambaValue >= 0 && gambaValue < 4) {
            newMoney = Math.max(0, money - bet);
            setGambaDisplay("You Lose");
            newIncome = -bet;
        } else if (gambaValue >= 4 && gambaValue < 8) {
            const winAmount = Math.round(bet * 1.5 * 10) / 10;
            newMoney = money - bet + winAmount;
            setGambaDisplay("You Win");
            newIncome = winAmount - bet;
        } else if (gambaValue >= 8 && gambaValue < 10) {
            const bigWinAmount = Math.round(bet * 3 * 10) / 10;
            newMoney = money - bet + bigWinAmount;
            setGambaDisplay("You Win BIG");
            newIncome = bigWinAmount - bet;
        }

        setMoney(newMoney);
        setIncome(newIncome);

        getBalance(newMoney);
        getIncome(newIncome);
    }

    return (
        <div id="gambaDiv">
            <button className="earnButton" onClick={() => { 
                const newMoney = money + 0.1;
                setMoney(newMoney);
                setIncome(0.1);

                // Send updated balance to parent
                getBalance(newMoney);
                getIncome(0.1);
            }}>
                EARN MONEY
            </button>
            <button className="gambaButton" onClick={gamble}>ROLL DICE</button>
            <p>Last Rolled Number: {Math.round(gamba)}</p>
            <p>{gambaDisplay}</p>
            <p>Current Bet: €{bet.toFixed(2)}</p>
            <div id="betDiv">
                <div>
                    <button className="betButton" onClick={() => setBet(m => Math.max(0.5, m + 0.5))}>+</button>
                    <button className="betButton" onClick={() => setBet(m => Math.max(0.5, m - 0.5))}>-</button>
                </div>
                <div>
                    <button className="betButton" onClick={() => setBet(0.5)}>Min bet</button>
                    <button className="betButton" id="allInButton" onClick={() => setBet(money)}>ALL IN</button>
                </div>
            </div>
        </div>
    );
}

export default Gamba;
