import OpportunityCard from "../components/OpportunityCard";
import type { Opportunity } from "../types/Opportunity";

type Props = {
  data: Opportunity[];
  loading: boolean;
  error: any;
};

const OpportunitiesPage: React.FC<Props> = ({ data, loading, error }) => {
  if (loading) return <p>Loading opportunities...</p>;
  if (error) return <p>Error loading opportunities.</p>;

  return (
    <div className="grid gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
      {data.map((opp) => (
        <OpportunityCard key={opp.id} opportunity={opp} />
      ))}
    </div>
  );
};

export default OpportunitiesPage;
