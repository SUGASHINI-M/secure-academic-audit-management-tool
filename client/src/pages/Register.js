import axios from "axios";
import { useState } from "react";

export default function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("student");
    const [department, setDepartment] = useState("");

    const register = async () => {
        await axios.post("http://localhost:4000/auth/register",
            { name, email, password, role, department });
        window.location = "/";
    }

    return (
        <div className="box">

            <h2>Register</h2>

            <input placeholder="Name" onChange={e => setName(e.target.value)} />
            <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />

            <select onChange={e => setRole(e.target.value)}>
                <option value="student">Student</option>
                <option value="staff">Staff</option>
                <option value="admin">Admin</option>
            </select>

            <input placeholder="Department" onChange={e => setDepartment(e.target.value)} />

            <button onClick={register}>Register</button>

        </div>
    )
}
