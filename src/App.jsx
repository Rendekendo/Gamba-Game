import Header from './Header.jsx';
import Gamba from './Gamba.jsx';
import { useState } from 'react';
import Login from './Login.jsx'

function App() {
    const [balance, setBalance] = useState(0); // Balance
    const [income, setIncome] = useState(0); // Income
    const [loginWindow, setLoginWindow] = useState(false) // login window visibility 

    return (
        <div id="appDiv">
            <Header blc={balance} inc={income} getLoginWindow={setLoginWindow} />
            {loginWindow && <Login loginWindowVisibility={loginWindow} setLoginWindow={setLoginWindow} />}
            <Gamba getBalance={setBalance} getIncome={setIncome} />
        </div>
    );
}

export default App;
