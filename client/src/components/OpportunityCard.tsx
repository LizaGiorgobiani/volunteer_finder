import React from "react";
import type { Opportunity } from "../types/Opportunity";
import "./OpportunityCard.css";

type Props = {
  opportunity: Opportunity;
};

const OpportunityCard: React.FC<Props> = ({ opportunity }) => {
  return (
    <div className="opportunity-card border rounded p-4 shadow-sm">
      <h2 className="text-xl font-semibold">{opportunity.title}</h2>
      <p className="text-gray-600">{opportunity.description}</p>
      <div className="mt-2 text-sm text-gray-500">
        <p>
          <strong>Date:</strong> {opportunity.date}
        </p>
        <p>
          <strong>Location:</strong> {opportunity.location}
        </p>
        <p>
          <strong>Type:</strong> {opportunity.type}
        </p>
      </div>
    </div>
  );
};

export default OpportunityCard;
