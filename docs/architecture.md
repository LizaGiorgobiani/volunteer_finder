# Architecture Overview

## System Overview

Volunteer Finder is a full-stack application designed to help users discover community volunteer opportunities. It is built with:

- A **React + TypeScript frontend**
- A **Node.js + Express backend**
- Static JSON-based mock data

## Key Functional Additions

- ✅ **Calendar View**: Interactive date selector to explore opportunities by day
- ✅ **Login & Signup with Password**: New authentication flow for user simulation
- ✅ **Styling Enhancements**: Improved visual polish using CSS modules
- ✅ **Test Coverage**: Added tests for Login, Signup, and Calendar

## Data Flow

1. Frontend requests opportunity data via `/api/opportunities`
2. Backend serves `opportunities.json` from static storage
3. Client filters & renders based on keyword, type, or calendar selection

## API

```http
GET /api/opportunities
```

Returns:

```ts
Opportunity[]
```

## Folder Structure (Simplified)

```
VOLUNTEER_FINDER/
├── client/
│   └── src/
│       ├── components/      # UI elements like Header, SearchBar, Cards
│       ├── context/         # Authentication logic (Login/Logout)
│       ├── hooks/           # useOpportunities custom hook
│       ├── pages/           # Home, About, Opportunities, Calendar, Auth pages
│       ├── services/        # API logic
│       ├── styles/          # Page and component styles
│       └── types/           # TypeScript interfaces
├── server/
│   └── src/
│       ├── data/            # opportunities.json
│       └── server.ts        # Express backend entry
```

## Tech Stack

| Layer    | Technology                                   |
| -------- | -------------------------------------------- |
| Frontend | React, TypeScript, Vite                      |
| Backend  | Node.js, Express                             |
| Styling  | CSS Modules                                  |
| Testing  | Vitest, React Testing Library, Supertest     |
| Routing  | React Router DOM                             |
| Auth Sim | Context-based mock auth with password fields |
