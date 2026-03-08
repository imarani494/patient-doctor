const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

let patients = [];
let tests = [];
let patientIdCounter = 1;
let testIdCounter = 1;

const getCurrentDate = () => new Date().toISOString();

app.get("/patients", (req, res) => {
  res.json(patients);
});

app.post("/patients", (req, res) => {
  const { name, phone, age, gender } = req.body;

  if (!name || !phone || !age || !gender) {
    return res.status(400).json({
      error: "All fields are required"
    });
  }

  const newPatient = {
    id: patientIdCounter++,
    name,
    phone,
    age,
    gender,
    createdAt: getCurrentDate()
  };

  patients.push(newPatient);

  res.status(201).json(newPatient);
});

app.post("/tests", (req, res) => {
  let { patientId, testName, status } = req.body;

  patientId = Number(patientId);

  if (!patientId || !testName || !status) {
    return res.status(400).json({
      error: "patientId, testName and status required"
    });
  }

  const patient = patients.find((p) => p.id === patientId);

  if (!patient) {
    return res.status(404).json({
      error: "Patient not found"
    });
  }

  const newTest = {
    id: testIdCounter++,
    patientId,
    testName,
    status,
    createdAt: getCurrentDate()
  };

  tests.push(newTest);

  res.status(201).json({
    ...newTest,
    patientName: patient.name
  });
});

app.get("/tests", (req, res) => {
  const records = tests.map((test) => {
    const patient = patients.find((p) => p.id === test.patientId);

    return {
      ...test,
      patientName: patient ? patient.name : "Unknown"
    };
  });

  res.json(records);
});

app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});
