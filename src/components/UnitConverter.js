"use client";
import { useState } from "react";

export default function UnitConverter() {
  const [cm, setCm] = useState("");
  const [inch, setInch] = useState("");

  const handleCmChange = (e) => {
    const value = e.target.value;
    setCm(value);
    setInch((value / 2.54).toFixed(2));
  };

  const handleInchChange = (e) => {
    const value = e.target.value;
    setInch(value);
    setCm((value * 2.54).toFixed(2));
  };

  return (
    <div>
      <h2>단위 변환기 (cm ↔ inch)</h2>
      <input
        type="number"
        placeholder="cm"
        value={cm}
        onChange={handleCmChange}
      />
      <input
        type="number"
        placeholder="inch"
        value={inch}
        onChange={handleInchChange}
      />
    </div>
  );
}