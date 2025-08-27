import React, { useState } from "react";

export default function CurrencyConverter() {
  const [usd, setUsd] = useState("");
  const [krw, setKrw] = useState("");

  const EXCHANGE_RATE = 1300; // 1 USD = 1300 KRW

  const onChangeUsd = (e) => {
    const val = e.target.value;
    setUsd(val);
    setKrw(val ? (val * EXCHANGE_RATE).toFixed(0) : "");
  };

  const onChangeKrw = (e) => {
    const val = e.target.value;
    setKrw(val);
    setUsd(val ? (val / EXCHANGE_RATE).toFixed(2) : "");
  };

  return (
    <div>
      <h2>환율 변환기 (USD ↔ KRW)</h2>
      <div>
        미국 달러(USD)<br />
        <input type="number" value={usd} onChange={onChangeUsd} />
      </div>
      <div>
        한국 원화(KRW)<br />
        <input type="number" value={krw} onChange={onChangeKrw} />
      </div>
    </div>
  );
}
