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
    <section className="p-6 bg-white rounded-xl shadow-md my-4">
      <h2 className="text-xl font-bold mb-4">BMI 계산기</h2>
      <div className="flex items-center gap-4">
        <div className="flex flex-col">
          <label className="text-sm mb-1">체중 (kg)</label>
          <input
            type="number"
            className="border rounded p-2 w-32"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm mb-1">신장 (cm)</label>
          <input
            type="number"
            className="border rounded p-2 w-32"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <button
          onClick={calculateBMI}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          계산
        </button>
      </div>
      {bmi && (
        <p className="mt-4 text-lg font-semibold">BMI: {bmi}</p>
      )}
    </section>
  );
}