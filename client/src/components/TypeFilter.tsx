import React from "react";
import "./TypeFilter.css";

type Props = {
  selectedType: string;
  setSelectedType: (type: string) => void;
  types: string[];
};

const TypeFilter: React.FC<Props> = ({
  selectedType,
  setSelectedType,
  types,
}) => {
  return (
    <select
      value={selectedType}
      onChange={(e) => setSelectedType(e.target.value)}
      className="type-filter"
    >
      <option value="">All Types</option>
      {types.map((type) => (
        <option key={type} value={type}>
          {type}
        </option>
      ))}
    </select>
  );
};

export default TypeFilter;
