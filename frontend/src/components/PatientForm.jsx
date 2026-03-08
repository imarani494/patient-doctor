import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../../api";

const PatientForm = ({ onPatientAdded }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    age: "",
    gender: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post(`${API_URL}/patients`, formData);

    onPatientAdded(res.data);

    setFormData({
      name: "",
      phone: "",
      age: "",
      gender: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Register Patient</h3>

      <input
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <input
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
        required
      />

      <input
        name="age"
        type="number"
        placeholder="Age"
        value={formData.age}
        onChange={handleChange}
        required
      />

      <select
        name="gender"
        value={formData.gender}
        onChange={handleChange}
        required
      >
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>

      <button type="submit">Register</button>
    </form>
  );
};

export default PatientForm;
