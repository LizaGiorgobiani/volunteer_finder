## Phase 1: Project Setup & Core Backend

- [ ] **Step 1.1: Initialize Project Structure**

  - [ ] Create monorepo folders: `client/` and `server/`
  - [ ] Initialize Git repo and set up `.gitignore`
  - [ ] Create initial `README.md` with project overview
  - [ ] Setup Node.js and TypeScript in `server/`
  - [ ] Configure `tsconfig.json` and ESLint/Prettier
  - [ ] _Commit: "chore: Initialize project structure with TypeScript setup"_

- [ ] **Step 1.2: Define Backend Data Models & Sample Data**

  - [ ] Create `Opportunity` interface with fields: `id`, `title`, `description`, `date`, `location`, `type`
  - [ ] Add `opportunities.json` with 5–10 sample opportunities
  - [ ] _Commit: "feat: Define Opportunity model and add sample data"_

- [ ] **Step 1.3: Implement Basic Express API**

  - [ ] Setup Express server with CORS and JSON parsing
  - [ ] Implement `/api/opportunities` route to return sample data
  - [ ] Support filtering via `keyword`, `type` query params
  - [ ] _Commit: "feat: Implement API route for listing and filtering opportunities"_

- [ ] **Step 1.4: Backend Testing**
  - [ ] Configure Jest or Supertest for API testing
  - [ ] Write tests for endpoint and filtering logic
  - [ ] _Commit: "test: Add basic API tests for listing and filtering"_

## Phase 2: Frontend Setup & UI Components

- [ ] **Step 2.1: React App Setup**

  - [ ] Create Vite-based React + TypeScript project in `client/`
  - [ ] Setup ESLint, Prettier, and directory structure
  - [ ] Add base routes and page layout (e.g., Header, Footer)
  - [ ] _Commit: "chore: Setup React app with TypeScript and base structure"_

- [ ] **Step 2.2: Define Opportunity Types & API Service**

  - [ ] Create shared `Opportunity` type (sync with backend)
  - [ ] Create `api.ts` using Axios for calling backend
  - [ ] Add loading/error state handling
  - [ ] _Commit: "feat: Create API service for fetching opportunities"_

- [ ] **Step 2.3: Build UI Components**

  - [ ] Create `OpportunityCard` to display an opportunity
  - [ ] Create `SearchBar` and `TypeFilter` components
  - [ ] Style components using basic CSS or Tailwind/MUI
  - [ ] _Commit: "feat: Build and style UI components for opportunity listing"_

- [ ] **Step 2.4: Connect UI to API**
  - [ ] Fetch opportunities and render list
  - [ ] Wire up `SearchBar` and `TypeFilter` to apply query params
  - [ ] Display loading, error, and "no results" messages
  - [ ] _Commit: "feat: Integrate opportunity list with API and filters"_

## Phase 3: Documentation, Testing, and Finalization

- [ ] **Step 3.1: Frontend Testing**

  - [ ] Write tests for `OpportunityCard` and `SearchBar`
  - [ ] Test filtering behavior and API integration
  - [ ] _Commit: "test: Add frontend tests for UI and filtering logic"_

- [ ] **Step 3.2: Documentation & Specs**

  - [ ] Complete `README.md` with setup, usage, screenshots
  - [ ] Write `architecture.md` explaining data flow and structure
  - [ ] Document Opportunity schema in `opportunity-schema.md`
  - [ ] _Commit: "docs: Add full documentation and architecture details"_

- [ ] **Step 3.3: Final Cleanup and Deployment (Optional)**
  - [ ] Ensure consistent formatting and file organization
  - [ ] Optional: Deploy frontend (e.g., Vercel) and backend (e.g., Render/Heroku)
  - [ ] Add links to deployed project in `README.md`
  - [ ] _Commit: "chore: Final cleanup and optional deployment"_
