import React from 'react';
import { Link } from 'react-router-dom';

export default function MainPage() {
  return (
    <div>
      <h1>메인 페이지</h1>
      <p>여기는 메인 콘텐츠 영역입니다.</p>
      <Link to="/detail">디테일 페이지로 이동</Link>
    </div>
  );
}
