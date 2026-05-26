import React, { useEffect, useState } from "react";

function App() {
  const [patients, setPatients] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [disease, setDisease] = useState("");

  useEffect(() => {
    fetch("http://localhost:8082/patients")
        .then((res) => res.json())
        .then((data) => setPatients(data));
  }, []);

  const addPatient = async () => {
    const response = await fetch("http://localhost:8082/patients", {
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
  };

  return (
      <div style={{ padding: "30px" }}>
        <h1>Hospital Management System</h1>

        <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />

        <input
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
        />

        <input
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