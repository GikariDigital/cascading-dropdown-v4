
import React, { useState, useEffect } from "react";
import vehicleData from "./vehicle_dropdown_data.json";

function TaxCalculator() {
  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedModel, setSelectedModel] = useState("");

  useEffect(() => {
    const uniqueMakes = [...new Set(vehicleData.map(car => car.Make))];
    setMakes(uniqueMakes.sort());
  }, []);

  const handleMakeChange = (make) => {
    setSelectedMake(make);
    setSelectedModel("");
    const filteredModels = vehicleData
      .filter(car => car.Make === make)
      .map(car => car.Model);
    setModels([...new Set(filteredModels)].sort());
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Vehicle Tax Calculator</h2>
      <label>Make:</label>
      <select value={selectedMake} onChange={(e) => handleMakeChange(e.target.value)}>
        <option value="">Select Make</option>
        {makes.map((make, idx) => (
          <option key={idx} value={make}>{make}</option>
        ))}
      </select>

      {selectedMake && (
        <>
          <label style={{ marginLeft: "1rem" }}>Model:</label>
          <select value={selectedModel} onChange={(e) => setSelectedModel(e.target.value)}>
            <option value="">Select Model</option>
            {models.map((model, idx) => (
              <option key={idx} value={model}>{model}</option>
            ))}
          </select>
        </>
      )}
    </div>
  );
}

export default TaxCalculator;
