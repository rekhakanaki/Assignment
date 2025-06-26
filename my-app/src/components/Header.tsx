// components/Header.tsx
import React from 'react';

interface HeaderProps {
  search: string;
  setSearch: (value: string) => void;
  toggleTheme: () => void;
  darkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ search, setSearch, toggleTheme, darkMode }) => {
  return (
    <header className="header">
      <h1>Product Comparison</h1>
      <input
        type="text"
        placeholder="Search by name or brand..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="theme-toggle" onClick={toggleTheme}>
        {darkMode ? 'Dark Mode' : 'Light Mode'}
      </button>
    </header>
  );
};

export default Header;
