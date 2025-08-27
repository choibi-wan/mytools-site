import React, { useState } from "react";

export default function UnitConverter() {
  const [cm, setCm] = useState("");
  const [inch, setInch] = useState("");

  const convertCmToInch = (cm) => (cm ? (cm * 0.3937).toFixed(2) : "");
  const convertInchToCm = (inch) => (inch ? (inch / 0.3937).toFixed(2) : "");

  const onChangeCm = (e) => {
    setCm(e.target.value);
    setInch(convertCmToInch(e.target.value));
  };

  const onChangeInch = (e) => {
    setInch(e.target.value);
    setCm(convertInchToCm(e.target.value));
  };

  return (
    <div>
      <h2>단위 변환기 (cm ↔ inch)</h2>
      <div>
        센티미터(cm)<br />
        <input type="number" value={cm} onChange={onChangeCm} />
      </div>
      <div>
        인치(inch)<br />
        <input type="number" value={inch} onChange={onChangeInch} />
      </div>
    </div>
  );
}
