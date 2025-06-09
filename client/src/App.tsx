import { useState } from "react";
import { useOpportunities } from "./hooks/useOpportunities";
import type { Opportunity } from "./types/Opportunity";

import Header from "./components/Header";
import OpportunityCard from "./components/OpportunityCard";

import "./App.css";
import "./components/Header.css";
import "./components/SearchBar.css";
import "./components/TypeFilter.css";
import "./components/OpportunityCard.css";

function App() {
  const { data, loading, error } = useOpportunities();

  const [keyword, setKeyword] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("");

  const filteredData = data.filter((opp) => {
    const lower = keyword.toLowerCase();
    const matchesKeyword =
      opp.title.toLowerCase().includes(lower) ||
      opp.location.toLowerCase().includes(lower);
    const matchesType = selectedType === "" || opp.type === selectedType;

    return matchesKeyword && matchesType;
  });

  const allTypes = Array.from(new Set(data.map((opp) => opp.type)));

  return (
    <div className="app-container">
      <Header
        keyword={keyword}
        setKeyword={setKeyword}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        types={allTypes}
      />

      {loading && <p className="status-text">Loading opportunities...</p>}
      {error && <p className="status-text error-text">{error}</p>}

      {!loading && !error && (
        <div className="card-list">
          {filteredData.length > 0 ? (
            filteredData.map((opp) => (
              <OpportunityCard key={opp.id} opportunity={opp} />
            ))
          ) : (
            <p>No matching opportunities found.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
