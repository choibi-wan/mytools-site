"use client";
import { useState } from "react";

export default function UnitConverter() {
  const [inputValue, setInputValue] = useState("");
  const [fromUnit, setFromUnit] = useState("cm");
  const [toUnit, setToUnit] = useState("m");
  const [result, setResult] = useState("");

  const units = {
    cm: 0.01, // 1cm = 0.01m
    m: 1,
    km: 1000,
    inch: 0.0254,
    ft: 0.3048,
  };

  const convert = () => {
    if (!inputValue) return;
    const meters = parseFloat(inputValue) * units[fromUnit];
    const converted = meters / units[toUnit];
    setResult(`${converted} ${toUnit}`);
  };

  return (
    <div style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "8px", maxWidth: "400px" }}>
      <h2>단위 변환기</h2>
      <input
        type="number"
        placeholder="값 입력"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={{ padding: "5px", marginRight: "10px" }}
      />
      <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
        {Object.keys(units).map((u) => (
          <option key={u} value={u}>{u}</option>
        ))}
      </select>
      →
      <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
        {Object.keys(units).map((u) => (
          <option key={u} value={u}>{u}</option>
        ))}
      </select>
      <button onClick={convert} style={{ marginLeft: "10px", padding: "5px 10px" }}>
        변환
      </button>
      {result && <p style={{ marginTop: "10px" }}>결과: {result}</p>}
    </div>
  );
}