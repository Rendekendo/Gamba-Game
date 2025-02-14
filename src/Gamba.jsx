import {useState} from "react";

function Gamba(){
    const [money, setMoney] = useState(0);
    const [gamba, setGamba] = useState(0);
    const [gambaDisplay, setGambaDisplay] = useState("Spin to Win");
    const [bet, setBet] = useState(0);
    const [income, setIncome] = useState(0);

    function gamble() {
        document.getElementById("loseStatus").style.background = "#403040";
        document.getElementById("winStatus").style.background = "#403040";
        document.getElementById("win2Status").style.background = "#403040";
        if (money < bet) {
            setGambaDisplay("Not Enough Money")
            return
        }
        if (bet < 0.5) {
            setGambaDisplay("Minimum Bet is €0.5")
            return
        }
        else {
            const gambaValue = (Math.random()*10);
            setGamba(gambaValue);

            if (gambaValue > 0 && gambaValue < 4){
                setMoney(m => Math.max(0, m - bet));
                setGambaDisplay("You Lose")
                setIncome(`- €${bet.toFixed(2)}`)
                document.getElementById("loseStatus").style.background = "green";
            }
            else if (gambaValue > 4 && gambaValue < 8) {
                setMoney(m => m - bet + Math.round((bet * 1.5) * 10) / 10);
                setGambaDisplay(`You Win`)
                setIncome(`+ €${((Math.round((bet * 1.5) * 10) / 10) - bet).toFixed(2)}`)
                document.getElementById("winStatus").style.background = "green";
            }
            else if (gambaValue > 8 && gambaValue < 10) {
                setMoney(m => m - bet + Math.round((bet * 3) * 10) / 10);
                setGambaDisplay(`You Win BIG`)
                setIncome(`+ €${((Math.round((bet * 3) * 10) / 10)- bet).toFixed(2)}`)
                document.getElementById("win2Status").style.background = "green";
            }
        }
    }

    return(
        <div id="gambaDiv">
            <div id="gambaHeader">
            <h1>Gamba</h1>
            <p id="balanceDisplay">Balance: €{money.toFixed(2)}<br></br><p id="incomeDisplay">{income}</p></p>
            </div>
            <button className="earnButton" onClick={() => { setMoney(m => m + 0.1); setIncome("+ €0.10")}}>EARN MONEY</button>
            <button className="gambaButton" onClick={gamble}>ROLL DICE</button>
            <p id="gameStatus"><span id="loseStatus">0 - 4 Lose</span><span id="winStatus"> 4 - 8 Win 1.5x</span><span id="win2Status"> 8 - 10 Win 3x</span></p>
            <p>Last Rolled Number: {Math.round(gamba)}</p>
            <p>{gambaDisplay}</p>
            <p>Current Bet: {bet.toFixed(1)}</p>
            <div id="betDiv">
                <div>
                    <button className="betButton" onClick={() => setBet(m => m +0.5)}>+</button>
                    <button className="betButton" onClick={() => setBet(m => m -0.5)}>-</button>
                </div>
                <div>
                    <button className="betButton" onClick={() => setBet(0.5)}>Min bet</button>
                    <button className="betButton" id="allInButton" onClick={() => setBet(money)}>ALL IN</button>
                </div>
            </div>
        </div>
    );
}

export default Gamba