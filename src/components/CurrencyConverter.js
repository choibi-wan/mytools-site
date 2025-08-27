"use client";
import { useState } from "react";

export default function CurrencyConverter() {
  const [krw, setKrw] = useState("");
  const [usd, setUsd] = useState("");
  const rate = 1300; // 환율 (1 USD = 1300 KRW)

  return (
    <section className="p-6 bg-white rounded-xl shadow-md my-4">
      <h2 className="text-xl font-bold mb-4">환율 변환기 (원 ↔ USD)</h2>
      <div className="flex items-center gap-4">
        <div className="flex flex-col">
          <label className="text-sm mb-1">KRW</label>
          <input
            type="number"
            className="border rounded p-2 w-32"
            value={krw}
            onChange={(e) => {
              setKrw(e.target.value);
              setUsd((parseFloat(e.target.value) / rate).toFixed(2));
            }}
          />
        </div>
        <span className="text-gray-600">↔</span>
        <div className="flex flex-col">
          <label className="text-sm mb-1">USD</label>
          <input
            type="number"
            className="border rounded p-2 w-32"
            value={usd}
            onChange={(e) => {
              setUsd(e.target.value);
              setKrw((parseFloat(e.target.value) * rate).toFixed(0));
            }}
          />
        </div>
      </div>
    </section>
  );
}