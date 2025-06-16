# Volunteer Finder Documentation

## 1. Project Overview

**Volunteer Finder** is a full-stack web application that helps users discover and register for local volunteer opportunities. It is intended to demonstrate key web development concepts including client-server architecture, TypeScript modeling, and React state management.

---

## 2. Project Objectives

- Build a fully typed full-stack application using React (frontend) and Node.js with Express (backend)
- Store sample volunteer data in a JSON file served via an API
- Implement client-side filtering by keyword and category (type)
- Create user-friendly components for navigation, searching, and displaying results
- Apply React Router for multi-page support

---

## 3. Tech Stack

| Layer     | Technology             |
|-----------|------------------------|
| Frontend  | React, Vite, TypeScript|
| Backend   | Node.js, Express, TypeScript |
| Styling   | CSS                    |
| Testing   | Vitest, Supertest      |

---

## 4. Backend Specification

### API Endpoint

```
GET /api/opportunities
```
- Returns a list of opportunities stored in `opportunities.json`
- No authentication required

### Data Model (Opportunity)
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

### Sample Data
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

## 5. Frontend Specification

### Data Fetching
- `useOpportunities.ts` uses `fetch` to retrieve opportunities from the Express API
- Results are stored in local state and used throughout the app

### Components

#### `Header.tsx`
- Displays site title and nav links
- Conditionally renders `SearchBar` and `TypeFilter` on `/opportunities`

#### `SearchBar.tsx`
- Text input for keyword filtering (title or location)

#### `TypeFilter.tsx`
- Dropdown to select opportunity type

#### `OpportunityCard.tsx`
- Displays opportunity title, description, date, location, and type
- Clickable; navigates to detail page

#### `OpportunityDetailPage.tsx`
- Displays full opportunity info
- Includes a form to "register" with an email (local state only)

### Pages

#### `HomePage.tsx`
- Welcome message, CTA button, stats, testimonials, newsletter form

#### `OpportunitiesPage.tsx`
- Maps filtered opportunities to cards

#### `AboutPage.tsx`
- Explains project purpose, mission, and values

### Routing
- Configured in `App.tsx` using `react-router-dom`

### Filtering Logic
```ts
const filteredData = data.filter((opp) => {
  const matchesKeyword = opp.title.toLowerCase().includes(keyword.toLowerCase()) ||
                         opp.location.toLowerCase().includes(keyword.toLowerCase());
  const matchesType = selectedType === "" || opp.type === selectedType;
  return matchesKeyword && matchesType;
});
```

---

## 6. File & Folder Structure (Simplified)

```
VOLUNTEER_FINDER/
├── client/
│   └── src/
│       ├── components/
│       ├── hooks/
│       ├── pages/
│       ├── services/
│       ├── styles/
│       └── types/
├── server/
│   └── src/
│       ├── data/
│       ├── models/
│       ├── test/
│       └── server.ts
```

---

## 7. Testing

### Backend
- Uses `Supertest` to test `/api/opportunities` route

### Frontend
- Uses `Vitest` for unit tests on components and API service

---

## 8. How to Run Locally

### Start Backend
```bash
cd server
npm install
npm run dev
```
Runs on: `http://localhost:3001`

### Start Frontend
```bash
cd client
npm install
npm run dev
```
Runs on: `http://localhost:5173`

---

## 9. Limitations & Future Improvements
- Currently uses static JSON data instead of real database
- Registration is local only, no actual email handling
- No admin or user management
- Could be extended with filters like date, location radius, or tags

---

## 10. License

MIT License
