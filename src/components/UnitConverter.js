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
    <section className="p-6 bg-white rounded-xl shadow-md my-4">
      <h2 className="text-xl font-bold mb-4">단위 변환기 (cm ↔ inch)</h2>
      <div className="flex items-center gap-4">
        <div className="flex flex-col">
          <label className="text-sm mb-1">cm</label>
          <input
            type="number"
            className="border rounded p-2 w-32"
            value={cm}
            onChange={(e) => {
              setCm(e.target.value);
              setInch(convertToInch(e.target.value));
            }}
          />
        </div>
        <span className="text-gray-600">↔</span>
        <div className="flex flex-col">
          <label className="text-sm mb-1">inch</label>
          <input
            type="number"
            className="border rounded p-2 w-32"
            value={inch}
            onChange={(e) => {
              setInch(e.target.value);
              setCm(convertToCm(e.target.value));
            }}
          />
        </div>
      </div>
    </section>
  );
}