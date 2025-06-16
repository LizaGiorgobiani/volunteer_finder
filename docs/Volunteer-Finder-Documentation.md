# Volunteer Finder Documentation

## Overview

Volunteer Finder is a browser-based volunteer opportunity platform that enables users to search and browse community events using a user-friendly React interface. It fetches mock data from a backend API built with Node.js and Express. This documentation explains how to run, understand, and extend the application.

---

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm (v9 or later)

### Backend Setup

```bash
cd server
npm install
npm run dev
```

Runs on: [http://localhost:3001](http://localhost:3001)

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

Runs on: [http://localhost:5173](http://localhost:5173)

---

## Features

- List view of volunteer opportunities
- Filtering by keyword (title or location)
- Filtering by type (education, environment, etc.)
- Dedicated detail view for each opportunity
- Email-based registration form (local simulation)
- Fully typed components using TypeScript
- React Router navigation across multiple pages

---

## Folder Structure

```
VOLUNTEER_FINDER/
├── client/
│   └── src/
│       ├── components/      # Reusable UI elements (cards, header, filters)
│       ├── hooks/           # Custom hook: useOpportunities
│       ├── pages/           # Home, About, Opportunities, Detail
│       ├── services/        # API call logic
│       ├── styles/          # CSS files
│       └── types/           # Shared interfaces
├── server/
│   └── src/
│       ├── data/            # opportunities.json (mock data)
│       ├── models/          # Opportunity interface
│       ├── test/            # API tests with Supertest
│       └── server.ts        # Main Express app
```

---

## Data Model

### Type Definition

```ts
export interface Opportunity {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  type: string;
}
```

### Sample Entry

```json
{
  "id": "1",
  "title": "Community Garden Help",
  "description": "Assist in planting and maintaining a local community garden.",
  "date": "2024-07-10",
  "location": "Brooklyn, NY",
  "type": "environment"
}
```

---

## Key Components

### `Header.tsx`

- Contains site navigation and filter section
- Filters only shown on `/opportunities`

### `SearchBar.tsx`

- Input field that updates the `keyword` state in `App.tsx`

### `TypeFilter.tsx`

- Dropdown populated dynamically with opportunity types

### `OpportunityCard.tsx`

- Reusable UI card with brief opportunity info

### `OpportunityDetailPage.tsx`

- Displays full opportunity details
- Includes a mock email registration form

---

## Pages

### `/` – HomePage

- Welcome message
- CTA to explore
- Event preview and testimonials

### `/about` – AboutPage

- App mission, purpose, and community values

### `/opportunities` – OpportunitiesPage

- Lists all filtered opportunities using `OpportunityCard`

### `/opportunities/:id` – DetailPage

- Shows full info and registration form for selected opportunity

---

## Filtering Logic

Filtering is done client-side using React state:

```ts
const filteredData = data.filter((opp) => {
  const matchesKeyword =
    opp.title.toLowerCase().includes(keyword.toLowerCase()) ||
    opp.location.toLowerCase().includes(keyword.toLowerCase());
  const matchesType = selectedType === "" || opp.type === selectedType;
  return matchesKeyword && matchesType;
});
```

---

## Testing Summary

### Backend

- Tested with Supertest
- Tests `/api/opportunities` for correct response format

### Frontend

- Unit tested using Vitest
- Validates rendering, props, and filtering behavior

---

## Deployment Notes

- Backend is designed for local development only
- Frontend is deployable to Vercel/Netlify
- Consider replacing JSON with a database for scalability

---

## Known Limitations

- Static mock data (no real database)
- No persistent user registration or authentication
- Filtering limited to two fields (keyword and type)
- No pagination or sorting

---

## License

MIT License
