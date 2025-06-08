import { useEffect, useState } from "react";
import { getOpportunities } from "./services/api";
import type { Opportunity } from "./types/Opportunity";
import OpportunityCard from "./components/OpportunityCard";
import SearchBar from "./components/SearchBar";
import "./components/SearchBar.css";
import "./components/OpportunityCard.css";

function App() {
  const [data, setData] = useState<Opportunity[]>([]);
  const [filteredData, setFilteredData] = useState<Opportunity[]>([]);
  const [keyword, setKeyword] = useState<string>("");

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
    const filtered = data.filter(
      (opp) =>
        opp.title.toLowerCase().includes(lower) ||
        opp.location.toLowerCase().includes(lower)
    );
    setFilteredData(filtered);
  }, [keyword, data]);

  return (
    <div className="app-container">
      <h1 className="page-title">Volunteer Opportunities</h1>
      <SearchBar keyword={keyword} setKeyword={setKeyword} />
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
