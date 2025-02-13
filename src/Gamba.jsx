import {useState} from "react";

function Gamba(){
    const [money, setMoney] = useState(0);
    const [gamba, setGamba] = useState(0);
    const [gambaDisplay, setGambaDisplay] = useState("Spin to Win");

    function gamble() {
        document.getElementById("loseStatus").style.color = "whitesmoke";
        document.getElementById("winStatus").style.color = "whitesmoke";
        document.getElementById("win2Status").style.color = "whitesmoke";
        if (money == 0) {
            setGambaDisplay("You can't gemble without any money")
        }
        else {
            const gambaValue = (Math.random()*10);
            setGamba(gambaValue);

            if (gambaValue > 0 && gambaValue < 4){
                setMoney(0);
                setGambaDisplay("You Lose EVERYTHING")
                document.getElementById("loseStatus").style.color = "yellow";
            }
            else if (gambaValue > 4 && gambaValue < 8) {
                setMoney(m => m * 1.5);
                setGambaDisplay("You Win (x1.5)")
                document.getElementById("winStatus").style.color = "yellow";
            }
            else if (gambaValue > 8 && gambaValue < 10) {
                setMoney(m => m * 3);
                setGambaDisplay("You Win BIG (x3)")
                document.getElementById("win2Status").style.color = "yellow";
            }
        }
    }

    return(
        <div id="gambaDiv">
            <div id="gambaHeader">
            <h1>Gamba</h1>
            <p>Money: €{money.toFixed(1)}</p>
            </div>
            <button className="earnButton" onClick={() => setMoney(m => m +0.1)}>EARN MONEY</button>
            <button className="gambaButton" onClick={gamble}>ROLL DICE</button>
            <p><span id="loseStatus">0 - 4 Lose</span>,<span id="winStatus"> 4 - 8 Win</span>,<span id="win2Status"> 8 - 10 Win Big</span></p>
            <p>Last Rolled Number: {Math.round(gamba)}</p>
            <p>{gambaDisplay}</p>
        </div>
    );
}

export default Gamba