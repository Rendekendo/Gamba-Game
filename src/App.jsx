import Header from './Header.jsx';
import Gamba from './Gamba.jsx';
import { useState } from 'react';

function App() {
    const [balance, setBalance] = useState(0); // Balance
    const [income, setIncome] = useState(0); // Income

    return (
        <div id="appDiv">
            <Header blc={balance} inc={income} />
            <Gamba getBalance={setBalance} getIncome={setIncome} />
        </div>
    );
}

export default App;
