"use client";
import { useState } from "react";

export default function UnitConverter() {
  const [cm, setCm] = useState("");
  const [inch, setInch] = useState("");

  const convertToInch = (value) => {
    const result = parseFloat(value) / 2.54;
    return isNaN(result) ? "" : result.toFixed(2);
  };

  const convertToCm = (value) => {
    const result = parseFloat(value) * 2.54;
    return isNaN(result) ? "" : result.toFixed(2);
  };

  return (
    <section>
      <h2>단위 변환기 (cm ↔ inch)</h2>
      <div>
        <label>cm</label>
        <input
          type="number"
          value={cm}
          onChange={(e) => {
            setCm(e.target.value);
            setInch(convertToInch(e.target.value));
          }}
        />
        <label>inch</label>
        <input
          type="number"
          value={inch}
          onChange={(e) => {
            setInch(e.target.value);
            setCm(convertToCm(e.target.value));
          }}
        />
      </div>
    </section>
  );
}