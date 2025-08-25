"use client";
import { useState } from "react";

export default function CurrencyConverter() {
  const [won, setWon] = useState("");
  const [usd, setUsd] = useState("");
  const rate = 1400; // 환율 (예시)

  const handleWonChange = (e) => {
    const value = e.target.value;
    setWon(value);
    setUsd((value / rate).toFixed(2));
  };

  const handleUsdChange = (e) => {
    const value = e.target.value;
    setUsd(value);
    setWon((value * rate).toFixed(0));
  };

  return (
    <div>
      <h2>환율 변환기 (원 ↔ USD)</h2>
      <input
        type="number"
        placeholder="KRW"
        value={won}
        onChange={handleWonChange}
      />
      <input
        type="number"
        placeholder="USD"
        value={usd}
        onChange={handleUsdChange}
      />
    </div>
  );
}