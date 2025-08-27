"use client";

import { useState } from "react";

export default function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    if (!weight || !height) return;
    const h = parseFloat(height) / 100; // cm → m
    const result = parseFloat(weight) / (h * h);
    setBmi(result.toFixed(2));
  };

  return (
    <div>
      <h2>BMI 계산기</h2>
      <div>
        체중 (kg)<br />
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div>
        신장 (cm)<br />
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <button onClick={calculateBMI}>계산</button>

      {bmi && <p>BMI: {bmi}</p>}
    </div>
  );
}
