import { useState } from "react";
import axios from "axios";

export default function Staff() {

    const [department, setDepartment] = useState("");
    const [subject, setSubject] = useState("");
    const [remarks, setRemarks] = useState("");

    const submit = async () => {
        await axios.post("http://localhost:4000/audit/add", { department, subject, remarks });
        alert("Audit Added");
    }

    return (
        <div className="container">
            <h2>Staff Dashboard</h2>

            <input placeholder="Department" onChange={e => setDepartment(e.target.value)} />
            <input placeholder="Subject" onChange={e => setSubject(e.target.value)} />
            <textarea placeholder="Remarks" onChange={e => setRemarks(e.target.value)} />
            <button onClick={submit}>Submit Audit</button>

        </div>
    )
}
