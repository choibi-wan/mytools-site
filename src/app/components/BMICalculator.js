"use client";
import { useState } from "react";

export default function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");

  const calculateBMI = () => {
    if (!weight || !height) return;
    const h = parseFloat(height) / 100; // cm → m
    const result = (parseFloat(weight) / (h * h)).toFixed(2);
    setBmi(result);
  };

  return (
    <div style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "8px", maxWidth: "400px" }}>
      <h2>BMI 계산기</h2>
      <input
        type="number"
        placeholder="체중(kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        style={{ padding: "5px", margin: "5px" }}
      />
      <input
        type="number"
        placeholder="신장(cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        style={{ padding: "5px", margin: "5px" }}
      />
      <button onClick={calculateBMI} style={{ marginTop: "10px", padding: "5px 10px" }}>
        계산
      </button>
      {bmi && <p style={{ marginTop: "10px" }}>당신의 BMI: {bmi}</p>}
    </div>
  );
}