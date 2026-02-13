import { useEffect, useState } from "react";
import axios from "axios";

export default function Admin() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch();
    }, []);

    const fetch = async () => {
        const res = await axios.get("http://localhost:4000/audit");
        setData(res.data);
    }

    return (
        <div className="container">
            <h2>Admin Dashboard</h2>

            {data.map((d, i) => (
                <div className="card" key={i}>
                    <h4>{d.department}</h4>
                    <p>{d.subject}</p>
                    <p>{d.remarks}</p>
                </div>
            ))}

        </div>
    )
}