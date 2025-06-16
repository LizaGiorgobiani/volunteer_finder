# Volunteer Finder – Project Specifications

## 📋 1. General Information

| Category     | Detail                                                        |
| ------------ | ------------------------------------------------------------- |
| Project Name | Volunteer Finder                                              |
| Goal         | Help users find and register for local volunteer events       |
| Type         | Full-stack web application (client + server)                  |
| Stack        | React + TypeScript (Frontend), Express + TypeScript (Backend) |
| Status       | Completed                                                     |

---

## ✅ 2. Functional Requirements

| #   | Requirement Description                                                        |
| --- | ------------------------------------------------------------------------------ |
| 1   | Display a list of volunteer opportunities                                      |
| 2   | Filter opportunities by keyword (in title or location)                         |
| 3   | Filter opportunities by type (e.g., environment, education)                    |
| 4   | Navigate to a detail page for each opportunity                                 |
| 5   | Register for an opportunity by entering an email address (stored only locally) |
| 6   | Display informational pages like Home and About                                |

---

## ⚙️ 3. Non-Functional Requirements

| #   | Requirement Description                                   |
| --- | --------------------------------------------------------- |
| 1   | The app must be fully typed using TypeScript              |
| 2   | The frontend should be responsive and styled consistently |
| 3   | Code should follow clean, modular design                  |
| 4   | Data should be mocked (stored in a local `.json` file)    |
| 5   | The system should include automated tests                 |

---

## 🔧 4. Backend Specification

- **Language**: TypeScript
- **Runtime**: Node.js
- **Framework**: Express
- **API Route**:
  - `GET /api/opportunities`: returns JSON list of opportunities
- **Data Source**: Static file `opportunities.json`
- **Port**: `3001`

---

## 💻 5. Frontend Specification

- **Framework**: React (with Vite)
- **Language**: TypeScript
- **Routing**: `react-router-dom`
- **Main Pages**:
  - `/` → HomePage
  - `/about` → AboutPage
  - `/opportunities` → OpportunitiesPage
  - `/opportunities/:id` → OpportunityDetailPage
- **Components**:
  - `Header` (with SearchBar and TypeFilter)
  - `OpportunityCard` (summary card)
  - `OpportunityDetailPage` (detail + registration)

---

## 🗃️ 6. Data Model

```ts
interface Opportunity {
  id: string;
  title: string;
  description: string;
  date: string; // ISO format
  location: string;
  type: string; // e.g., 'environment', 'education'
}
```

---

## 🔎 7. Filtering Logic (Frontend)

- **Keyword Filter**: Matches title or location (case-insensitive)
- **Type Filter**: Matches selected category or 'All Types'

---

## 🧪 8. Testing

| Layer    | Tool      | Description                                   |
| -------- | --------- | --------------------------------------------- |
| Backend  | Supertest | Tests `/api/opportunities` response           |
| Frontend | Vitest    | Unit tests for components and API integration |

---

## 📁 9. Folder Structure (Simplified)

```
VOLUNTEER_FINDER/
├── client/
│   ├── src/components
│   ├── src/pages
│   ├── src/hooks
│   ├── src/types
│   └── src/styles
├── server/
│   ├── src/data
│   ├── src/models
│   ├── src/test
│   └── src/server.ts
```

---

## ⚠️ 10. Limitations

- Static data only (no real-time backend or database)
- No login/authentication or user roles
- Registration does not persist
- No pagination or advanced filters
