import UnitConverter from "../components/UnitConverter";
import BMICalculator from "../components/BMICalculator";
import CurrencyConverter from "../components/CurrencyConverter";

export default function Home() {
  return (
    <main style={{ padding: "20px" }}>
      <h1>My Tools</h1>
      <UnitConverter />
      <BMICalculator />
      <CurrencyConverter />
    </main>
  );
}