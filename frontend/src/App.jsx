import React, { useState, useEffect } from "react";
import axios from "axios";
import PatientForm from "./components/PatientForm";
import TestForm from "./components/TestForm";
import TestTable from "./components/TestTable";
import { API_URL } from "../api";
import "./styles.css";

function App() {
  const [patients, setPatients] = useState([]);
  const [tests, setTests] = useState([]);

  const fetchPatients = async () => {
    const res = await axios.get(`${API_URL}/patients`);
    setPatients(res.data);
  };

  const fetchTests = async () => {
    const res = await axios.get(`${API_URL}/tests`);
    setTests(res.data);
  };

  useEffect(() => {
    fetchPatients();
    fetchTests();
  }, []);

  const handlePatientAdded = (patient) => {
    setPatients([...patients, patient]);
  };

  const handleTestAdded = (test) => {
    setTests([...tests, test]);
  };

  return (
    <div className="App">
      <h1>Patient Management Dashboard</h1>

      <div className="forms">
        <PatientForm onPatientAdded={handlePatientAdded} />
        <TestForm patients={patients} onTestAdded={handleTestAdded} />
      </div>

      <TestTable tests={tests} />
    </div>
  );
}

export default App;
