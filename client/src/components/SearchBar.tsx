import React from "react";
import "./SearchBar.css";

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
      className="w-full p-2 border rounded"
    />
  );
};

export default SearchBar;
