import { useState } from "react";

function Login({loginWindowVisibility, setLoginWindow}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin(e){
        e.preventDefault();
        console.log("Username:", username, "Pass:", password);
        e.target.reset();
    }
    function handleCloseLogin(){
        setLoginWindow(false);
    }

    return (
        <div id="loginContainer">
            <div id="loginHeader">
            <h1>Sign in</h1>
            <button id="closeLoginButton" onClick={handleCloseLogin}>X</button>
            </div>
            <form onSubmit={handleLogin}>
                <input placeholder="Username" name="username" type="text" required onChange={(e) => setUsername(e.target.value)}/>
                <input placeholder="Password" name="password" type="password" onChange={(e) => setPassword(e.target.value)} required/>
                <input type="submit" value="Submit"></input>
            </form>

            <p>{username}:{password}</p>
        </div>
    );
}
export default Login