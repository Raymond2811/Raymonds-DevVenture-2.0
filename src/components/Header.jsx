import React from 'react';
import NavTabs from './NavTabs';

export default function Header() {
  return (
    <header className="nav justify-content-between headerContainer">
      <h1> Raymond Bautista </h1>
      <NavTabs />
    </header>
  );
}