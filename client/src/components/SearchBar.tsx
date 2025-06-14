import React from "react";
import "../styles/SearchBar.css"; // Adjust the path as necessary

type Props = {
  keyword: string;
  setKeyword: (value: string) => void;
};

const SearchBar: React.FC<Props> = ({ keyword, setKeyword }) => {
  return (
    <input
      type="text"
      placeholder="Search opportunities..."
      value={keyword}
      onChange={(e) => setKeyword(e.target.value)}
      className="search-bar"
    />
  );
};

export default SearchBar;
