"use client";
import { useState } from "react";

export default function CurrencyConverter() {
  const [krw, setKrw] = useState("");
  const [usd, setUsd] = useState("");

  const rate = 1300; // 환율 (예: 1 USD = 1300 KRW)

  return (
    <section>
      <h2>환율 변환기 (원 ↔ USD)</h2>
      <div>
        <label>KRW</label>
        <input
          type="number"
          value={krw}
          onChange={(e) => {
            setKrw(e.target.value);
            setUsd((parseFloat(e.target.value) / rate).toFixed(2));
          }}
        />
        <label>USD</label>
        <input
          type="number"
          value={usd}
          onChange={(e) => {
            setUsd(e.target.value);
            setKrw((parseFloat(e.target.value) * rate).toFixed(0));
          }}
        />
      </div>
    </section>
  );
}