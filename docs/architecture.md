# Architecture Overview

## System Overview

Volunteer Finder is a full-stack app with:

- A **React + TypeScript frontend**
- A **Node.js + Express backend**
- Mock data served from a static JSON file

## Data Flow

1. Frontend fetches data from `/api/opportunities`
2. Backend serves JSON from `opportunities.json`
3. Frontend filters and renders the list

## API

GET /api/opportunities
→ returns: Opportunity[]

## Folder Structure (Simplified)

VOLUNTEER_FINDER/
├── client/
│ └── src/
│ ├── components/
│ ├── pages/
│ ├── hooks/
│ └── types/
├── server/
│ └── src/
│ ├── data/
│ └── server.ts

## Tech Stack

- Frontend: React, TypeScript, Vite
- Backend: Node.js, Express, TypeScript
- Styling: CSS
- Testing: Vitest, Supertest
