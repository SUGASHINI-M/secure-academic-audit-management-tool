import axios from "axios";
import { useState } from "react";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = async () => {

        if (!email || !password) {
            alert("Please enter email and password");
            return;
        }

        const res = await axios.post("http://localhost:4000/auth/login", { email, password });

        if (typeof res.data === "string") {
            alert(res.data);
            return;
        }

        localStorage.setItem("token", res.data.token);
        localStorage.setItem("role", res.data.role);
        localStorage.setItem("department", res.data.department);

        if (res.data.role === "admin") window.location = "/admin";
        else if (res.data.role === "staff") window.location = "/staff";
        else window.location = "/student";
    }

    return (
        <div className="box">

            <h2>Login</h2>

            <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />

            <button onClick={login}>Login</button>

            <p onClick={() => window.location = "/register"}>Register</p>

        </div>
    )
}
