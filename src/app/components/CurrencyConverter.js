"use client";
import { useState } from "react";

export default function CurrencyConverter() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("KRW");
  const [result, setResult] = useState("");

  // 임시 환율 (실제로는 API 연결 필요)
  const rates = {
    USD: 1,
    KRW: 1320,
    JPY: 145,
    EUR: 0.9,
  };

  const convert = () => {
    if (!amount) return;
    const usdValue = parseFloat(amount) / rates[from];
    const converted = usdValue * rates[to];
    setResult(`${converted.toFixed(2)} ${to}`);
  };

  return (
    <div style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "8px", maxWidth: "400px" }}>
      <h2>환율 변환기</h2>
      <input
        type="number"
        placeholder="금액"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{ padding: "5px", marginRight: "10px" }}
      />
      <select value={from} onChange={(e) => setFrom(e.target.value)}>
        {Object.keys(rates).map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
      →
      <select value={to} onChange={(e) => setTo(e.target.value)}>
        {Object.keys(rates).map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
      <button onClick={convert} style={{ marginLeft: "10px", padding: "5px 10px" }}>
        변환
      </button>
      {result && <p style={{ marginTop: "10px" }}>결과: {result}</p>}
    </div>
  );
}