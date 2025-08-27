import React from 'react';
import { Link } from 'react-router-dom';

export default function DetailPage() {
  return (
    <div>
      <h1>디테일 페이지</h1>
      <p>여기는 디테일 기능이 동작하는 영역입니다.</p>
      <Link to="/">메인 페이지로 돌아가기</Link>
    </div>
  );
}
