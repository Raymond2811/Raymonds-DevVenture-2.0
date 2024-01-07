import React from 'react';
import NavTabs from './NavTabs';

export default function Header() {
  return (
    <header className="nav justify-content-between">
      <h1> Raymond B </h1>
      <NavTabs />
    </header>
  );
}