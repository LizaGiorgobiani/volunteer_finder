import express from "express";
import cors from "cors";
import opportunities from "./data/opportunities.json";
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get("/api/opportunities", (_, res) => {
  res.json(opportunities);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
