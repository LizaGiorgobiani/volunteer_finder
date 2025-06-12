import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import SearchBar from "./SearchBar";
import TypeFilter from "./TypeFilter";

type Props = {
  keyword: string;
  setKeyword: (value: string) => void;
  selectedType: string;
  setSelectedType: (value: string) => void;
  types: string[];
};

const Header: React.FC<Props> = ({
  keyword,
  setKeyword,
  selectedType,
  setSelectedType,
  types,
}) => {
  const location = useLocation();
  const showFilters = location.pathname === "/opportunities";

  return (
    <header className="header">
      <div className="header-top">
        <h1 className="header-title">🌍 Volunteer Connect</h1>
        <nav className="header-nav">
          <Link to="/">Home</Link>
          <Link to="/opportunities">Opportunities</Link>
          <Link to="/about">About</Link>
        </nav>
      </div>

      {showFilters && (
        <div className="header-filters">
          <SearchBar keyword={keyword} setKeyword={setKeyword} />
          <TypeFilter
            selectedType={selectedType}
            setSelectedType={setSelectedType}
            types={types}
          />
        </div>
      )}
    </header>
  );
};

export default Header;
