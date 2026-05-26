import React, { useEffect, useState } from "react";

function App() {
    const [patients, setPatients] = useState([]);
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [disease, setDisease] = useState("");

    const API_URL = "https://hospital-backend-nx1z.onrender.com/patients";

    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => setPatients(data))
            .catch((err) => console.log(err));
    }, []);

    const addPatient = async () => {
        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    age: parseInt(age),
                    disease,
                }),
            });

            const newPatient = await response.json();
            setPatients([...patients, newPatient]);

            setName("");
            setAge("");
            setDisease("");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div style={{ padding: "30px" }}>
            <h1>Hospital Management System</h1>

            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                type="number"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />

            <input
                type="text"
                placeholder="Disease"
                value={disease}
                onChange={(e) => setDisease(e.target.value)}
            />

            <button onClick={addPatient}>Add Patient</button>

            <h2>Patients</h2>

            <ul>
                {patients.map((patient) => (
                    <li key={patient.id}>
                        {patient.name} - {patient.age} - {patient.disease}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;