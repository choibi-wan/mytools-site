import UnitConverter from "../components/UnitConverter";
import BMICalculator from "../components/BMICalculator";
import CurrencyConverter from "../components/CurrencyConverter";

export default function Home() {
  return (
    <main style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "30px", padding: "50px" }}>
      <h1>나의 도구 모음</h1>
      <BMICalculator />
      <CurrencyConverter />
      <UnitConverter />
    </main>
  );
}