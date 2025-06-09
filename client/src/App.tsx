import { useEffect, useState } from "react";
import { getOpportunities } from "./services/api";
import type { Opportunity } from "./types/Opportunity";

import Header from "./components/Header";
import OpportunityCard from "./components/OpportunityCard";

import "./App.css";
import "./components/Header.css";
import "./components/SearchBar.css";
import "./components/TypeFilter.css";
import "./components/OpportunityCard.css";

function App() {
  const [data, setData] = useState<Opportunity[]>([]);
  const [filteredData, setFilteredData] = useState<Opportunity[]>([]);
  const [keyword, setKeyword] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("");

  useEffect(() => {
    getOpportunities()
      .then((res) => {
        setData(res);
        setFilteredData(res);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    const lower = keyword.toLowerCase();

    const filtered = data.filter((opp) => {
      const matchesKeyword =
        opp.title.toLowerCase().includes(lower) ||
        opp.location.toLowerCase().includes(lower);

      const matchesType = selectedType === "" || opp.type === selectedType;

      return matchesKeyword && matchesType;
    });

    setFilteredData(filtered);
  }, [keyword, selectedType, data]);

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

      <div className="card-list">
        {filteredData.length > 0 ? (
          filteredData.map((opp) => (
            <OpportunityCard key={opp.id} opportunity={opp} />
          ))
        ) : (
          <p>No matching opportunities found.</p>
        )}
      </div>
    </div>
  );
}

export default App;
