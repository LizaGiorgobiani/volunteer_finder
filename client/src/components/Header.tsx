import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Header.css";
import SearchBar from "./SearchBar";
import TypeFilter from "./TypeFilter";
import { useAuth } from "../context/AuthContext";

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

  const { user, logout } = useAuth();

  return (
    <header className="header">
      <div className="header-top">
        <h1 className="header-title">🌍 Volunteer Connect</h1>
        <nav className="header-nav">
          <Link to="/">Home</Link>
          <Link to="/opportunities">Opportunities</Link>
          <Link to="/calendar">Calendar</Link> {/* ✅ Added */}
          <Link to="/about">About</Link>
          {user ? (
            <>
              <span className="header-user">👋 {user}</span>
              <button className="auth-button" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="auth-button">Sign In</button>
              </Link>
              <Link to="/signup">
                <button className="auth-button secondary">Sign Up</button>
              </Link>
            </>
          )}
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
