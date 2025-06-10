import React from "react";
import OpportunityCard from "../components/OpportunityCard";
import type { Opportunity } from "../types/Opportunity";

type Props = {
  data: Opportunity[];
  loading: boolean;
  error: string | null;
};

const OpportunitiesPage: React.FC<Props> = ({ data, loading, error }) => {
  return (
    <div className="card-list">
      {loading && <p>Loading opportunities...</p>}
      {error && <p className="error-text">{error}</p>}

      {data.length > 0 ? (
        data.map((opp) => <OpportunityCard key={opp.id} opportunity={opp} />)
      ) : (
        <p>No matching opportunities found.</p>
      )}
    </div>
  );
};

export default OpportunitiesPage;
