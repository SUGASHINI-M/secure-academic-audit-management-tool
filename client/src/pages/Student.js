import { useEffect, useState } from "react";
import axios from "axios";

export default function Student() {

    const dept = localStorage.getItem("department");
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch();
    }, []);

    const fetch = async () => {
        const res = await axios.get(`http://localhost:4000/audit/student/${dept}`);
        setData(res.data);
    }

    return (
        <div className="container">
            <h2>Student Dashboard ({dept})</h2>

            {data.map((d, i) => (
                <div className="card" key={i}>
                    <h4>{d.subject}</h4>
                    <p>{d.remarks}</p>
                </div>
            ))}

        </div>
    )
}
