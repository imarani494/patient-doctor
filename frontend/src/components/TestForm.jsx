import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../../api";

const TestForm = ({ patients, onTestAdded }) => {
  const [formData, setFormData] = useState({
    patientId: "",
    testName: "",
    status: "pending"
  });

  const handleChange = (e) => {
    let value = e.target.value;

    if (e.target.name === "patientId") {
      value = Number(value);
    }

    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post(`${API_URL}/tests`, formData);

    onTestAdded(res.data);

    setFormData({
      patientId: "",
      testName: "",
      status: "pending"
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Diagnostic Test</h3>

      <select
        name="patientId"
        value={formData.patientId}
        onChange={handleChange}
        required
      >
        <option value="">Select Patient</option>

        {patients.map((p) => (
          <option key={p.id} value={p.id}>
            {p.name}
          </option>
        ))}
      </select>

      <input
        name="testName"
        placeholder="Test Name"
        value={formData.testName}
        onChange={handleChange}
        required
      />

      <select name="status" value={formData.status} onChange={handleChange}>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>

      <button type="submit">Add Test</button>
    </form>
  );
};

export default TestForm;
