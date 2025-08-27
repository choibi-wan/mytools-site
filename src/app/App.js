import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UnitConverter from './components/UnitConverter';
import BMICalculator from './components/BMICalculator';
import CurrencyConverter from './components/CurrencyConverter';

export default function App() {
  return (
    <Router>
      <div style={{ padding: 20 }}>
        <h1>메인 페이지</h1>
        <nav>
          <ul>
            <li><Link to="/unit-converter">단위 변환기</Link></li>
            <li><Link to="/bmi-calculator">BMI 계산기</Link></li>
            <li><Link to="/currency-converter">환율 변환기</Link></li>
          </ul>
        </nav>

        <hr />

        <Routes>
          <Route path="/unit-converter" element={<UnitConverter />} />
          <Route path="/bmi-calculator" element={<BMICalculator />} />
          <Route path="/currency-converter" element={<CurrencyConverter />} />
          <Route path="/" element={<div>홈으로 오신 걸 환영합니다! 위 메뉴에서 기능을 선택하세요.</div>} />
        </Routes>
      </div>
    </Router>
  );
}
