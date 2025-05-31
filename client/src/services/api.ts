import axios from "axios";
import type { Opportunity } from "../types/Opportunity";

const BASE_URL = "http://localhost:3001";

export const getOpportunities = async (): Promise<Opportunity[]> => {
  const response = await axios.get<Opportunity[]>(
    `${BASE_URL}/api/opportunities`
  );
  return response.data;
};
