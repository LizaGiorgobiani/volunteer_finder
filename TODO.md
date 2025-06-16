## Phase 1: Project Setup & Core Backend

- [x] **Step 1.1: Initialize Project Structure**

  - [x] Create monorepo folders: `client/` and `server/`
  - [x] Initialize Git repo and set up `.gitignore`
  - [x] Create initial `README.md` with project overview
  - [x] Setup Node.js and TypeScript in `server/`
  - [x] Configure `tsconfig.json` and ESLint/Prettier
  - [x] _Commit: "chore: Initialize project structure with TypeScript setup"_

- [x] **Step 1.2: Define Backend Data Models & Sample Data**

  - [x] Create `Opportunity` interface with fields: `id`, `title`, `description`, `date`, `location`, `type`
  - [x] Add `opportunities.json` with 5–10 sample opportunities
  - [x] _Commit: "feat: Define Opportunity model and add sample data"_

- [x] **Step 1.3: Implement Basic Express API**

  - [x] Setup Express server with CORS and JSON parsing
  - [x] Implement `/api/opportunities` route to return sample data
  - [x] Support filtering via `keyword`, `type` query params
  - [x] _Commit: "feat: Implement API route for listing and filtering opportunities"_

- [x] **Step 1.4: Backend Testing**
  - [x] Configure Jest or Supertest for API testing
  - [x] Write tests for endpoint and filtering logic
  - [x] _Commit: "test: Add basic API tests for listing and filtering"_

## Phase 2: Frontend Setup & UI Components

- [x] **Step 2.1: React App Setup**

  - [x] Create Vite-based React + TypeScript project in `client/`
  - [x] Setup ESLint, Prettier, and directory structure
  - [x] Add base routes and page layout (e.g., Header, Footer)
  - [x] _Commit: "chore: Setup React app with TypeScript and base structure"_

- [x] **Step 2.2: Define Opportunity Types & API Service**

  - [x] Create shared `Opportunity` type (sync with backend)
  - [x] Create `api.ts` using Axios for calling backend
  - [x] Add loading/error state handling
  - [x] _Commit: "feat: Create API service for fetching opportunities"_

- [x] **Step 2.3: Build UI Components**

  - [x] Create `OpportunityCard` to display an opportunity
  - [x] Create `SearchBar` and `TypeFilter` components
  - [x] Style components using basic CSS or Tailwind/MUI
  - [x] _Commit: "feat: Build and style UI components for opportunity listing"_

- [x] **Step 2.4: Connect UI to API**
  - [x] Fetch opportunities and render list
  - [x] Wire up `SearchBar` and `TypeFilter` to apply query params
  - [x] Display loading, error, and "no results" messages
  - [x] _Commit: "feat: Integrate opportunity list with API and filters"_
- [x] **Step 2.5: Add Routing & Detail Pages**

  - [x] Setup `react-router-dom`
  - [x] Create pages: `HomePage.tsx`, `OpportunitiesPage.tsx`, `OpportunityDetailPage.tsx`, `AboutPage.tsx`
  - [x] Link each opportunity card to `/opportunities/:id`
  - [x] Show full opportunity info on detail page
  - [x] _Commit: "feat: Add routing and individual opportunity page"_

## Phase 3: Documentation, Testing, and Finalization

- [x] **Step 3.1: Frontend Testing**

  - [x] Write tests for `OpportunityCard` and `SearchBar`
  - [x] Test filtering behavior and API integration
  - [x] _Commit: "test: Add frontend tests for UI and filtering logic"_

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
