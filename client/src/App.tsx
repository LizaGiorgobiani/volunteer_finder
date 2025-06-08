import { useEffect, useState } from "react";
import { getOpportunities } from "./services/api";
import type { Opportunity } from "./types/Opportunity";
import OpportunityCard from "./components/OpportunityCard";

function App() {
  const [data, setData] = useState<Opportunity[]>([]);

  useEffect(() => {
    getOpportunities().then(setData).catch(console.error);
  }, []);

  return (
    <div className="app-container">
      <h1 className="page-title">Volunteer Opportunities</h1>
      <div className="card-list">
        {data.map((opp) => (
          <OpportunityCard key={opp.id} opportunity={opp} />
        ))}
      </div>
    </div>
  );
}

export default App;
