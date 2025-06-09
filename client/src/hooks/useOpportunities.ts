// src/hooks/useOpportunities.ts
import { useEffect, useState } from "react";
import { getOpportunities } from "../services/api";
import type { Opportunity } from "../types/Opportunity";

export function useOpportunities() {
  const [data, setData] = useState<Opportunity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getOpportunities()
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch opportunities");
        console.error(err);
        setLoading(false);
      });
  }, []);

  return { data, loading, error };
}
