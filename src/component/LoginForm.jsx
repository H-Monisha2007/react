import { useState } from "react";

function LoginForm() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    function handleLogin() {

        if (username !== "" && password !== "") {
            setMessage("Login Successful");
        } else {
            setMessage("Please enter username and password");
        }

    }

    return (
        <div>
            <h2>Login</h2>

            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={handleLogin}>
                Login
            </button>

            <p>{message}</p>
        </div>
    );
}

export default LoginForm;