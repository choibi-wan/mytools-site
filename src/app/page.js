import UnitConverter from "../components/UnitConverter";
import BMICalculator from "../components/BMICalculator";
import CurrencyConverter from "../components/CurrencyConverter";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">My Tools</h1>
      <UnitConverter />
      <BMICalculator />
      <CurrencyConverter />
    </main>
  );
}