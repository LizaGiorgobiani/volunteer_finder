import { useEffect, useState } from "react";
import { getOpportunities } from "./services/api";
import type { Opportunity } from "./types/Opportunity";

function App() {
  const [data, setData] = useState<Opportunity[]>([]);

  useEffect(() => {
    getOpportunities().then(setData).catch(console.error);
  }, []);

  return (
    <div>
      <h1>Volunteer Opportunities</h1>
      <ul>
        {data.map((opp) => (
          <li key={opp.id}>
            {opp.title} - {opp.location}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
