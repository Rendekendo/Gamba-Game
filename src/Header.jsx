function Header({blc, inc, getLoginWindow}){
    function handleLogin(){
        getLoginWindow(true);
    }
    
    return(
        <div id="header">
            <h1>Bank 'o Cock</h1>
            <button onClick={handleLogin} id="loginWindowButton">Login</button>
            <div id="balanceDisplay" className="right">
                <p>Balance: €{blc.toFixed(2)}</p>   
                <p>Income: €{inc.toFixed(2)}</p>
            </div>
        </div>
    );
}

export default Header