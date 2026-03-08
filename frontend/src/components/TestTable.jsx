import React, { useState } from "react";

const TestTable = ({ tests }) => {
  const [filter, setFilter] = useState("");

  const filteredTests = tests.filter((test) =>
    test.patientName.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h3>Test Records</h3>

      <input
        placeholder="Search patient..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th>Patient</th>
            <th>Test</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {filteredTests.map((test) => (
            <tr key={test.id}>
              <td>{test.patientName}</td>
              <td>{test.testName}</td>
              <td>{test.status}</td>
              <td>{new Date(test.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TestTable;
