import React from "react";
import "./Header.css";
import SearchBar from "./SearchBar";
import TypeFilter from "./TypeFilter";
import type { Opportunity } from "../types/Opportunity";

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
  return (
    <header className="header">
      <div className="header-top">
        <h1 className="header-title">🌍 Volunteer Connect</h1>
        <nav className="header-nav">
          <a href="#">Home</a>
          <a href="#">Opportunities</a>
          <a href="#">About</a>
        </nav>
      </div>
      <div className="header-filters">
        <SearchBar keyword={keyword} setKeyword={setKeyword} />
        <TypeFilter
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          types={types}
        />
      </div>
    </header>
  );
};

export default Header;
