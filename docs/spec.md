# Volunteer Finder – Technical Specification

## 1. Purpose

Define all expected behaviors, system constraints, and technical requirements for the Volunteer Finder application, a full-stack project for browsing volunteer opportunities.

---

## 2. Functional Requirements

### Core Functionalities

| ID  | Feature             | Description                                                              |
| --- | ------------------- | ------------------------------------------------------------------------ |
| FR1 | Opportunity Listing | User can view a list of all volunteer opportunities                      |
| FR2 | Keyword Filtering   | User can filter opportunities by title or location                       |
| FR3 | Type Filtering      | User can filter opportunities by type/category                           |
| FR4 | Opportunity Detail  | User can view detailed information about a specific opportunity          |
| FR5 | Registration        | User can submit their email to register for an opportunity (mocked only) |
| FR6 | Navigation          | User can navigate between Home, About, Opportunities, and Detail pages   |

---

## 3. Non-Functional Requirements

| ID   | Requirement     | Description                                                                |
| ---- | --------------- | -------------------------------------------------------------------------- |
| NFR1 | Type Safety     | Application must be fully typed using TypeScript                           |
| NFR2 | Performance     | Frontend should load under 2 seconds in a local dev environment            |
| NFR3 | Scalability     | Backend structured to allow database swap in future                        |
| NFR4 | Maintainability | Code should be modular, well-documented, and follow standard linting rules |
| NFR5 | Usability       | Responsive layout, intuitive filters, and accessible form inputs           |

---

## 4. System Architecture

### Frontend

- React + TypeScript (Vite)
- `react-router-dom` for client-side routing
- CSS modules for styling
- `useState`, `useEffect` for state/data management

### Backend

- Node.js + Express (TypeScript)
- Static JSON file used as a mock data source
- API Endpoint: `GET /api/opportunities`
- Port: 3001

---

## 5. API Specification

### Endpoint

```http
GET /api/opportunities
```

### Response (200 OK)

Returns an array of objects with the following schema:

```ts
interface Opportunity {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  type: string;
}
```

---

## 6. Component Contracts

| Component           | Props                                      | Description                             |
| ------------------- | ------------------------------------------ | --------------------------------------- |
| `SearchBar`         | `keyword`, `setKeyword`                    | Text input for filtering                |
| `TypeFilter`        | `selectedType`, `setSelectedType`, `types` | Dropdown to choose opportunity category |
| `OpportunityCard`   | `opportunity`                              | Displays brief info and links to detail |
| `OpportunityDetail` | URL param `id` via `useParams()`           | Shows extended info + mock email form   |

---

## 7. Testing Expectations

### Backend

- Test response status and structure for `/api/opportunities`
- Simulate empty/malformed JSON (optional)

### Frontend

- Test:
  - Rendering of components
  - Filtering behavior
  - Prop handling in `SearchBar` and `TypeFilter`
  - Page routing and navigation

---

## 8. Limitations

- Data is static and not connected to a live database
- Email registration does not persist or trigger any server logic
- No authentication or user roles
- Filtering is basic (no fuzzy match, date range, etc.)
- No pagination or sorting

---

## 9. Future Enhancements

- Integrate PostgreSQL or Firebase
- Add JWT-based authentication
- Build admin panel to add/edit opportunities
- Add calendar filter, geolocation, and distance radius
- Host backend with Render and frontend with Vercel
- Introduce automated deployment and CI/CD

---

## 10. Acceptance Criteria

| ID  | Criteria                                                |
| --- | ------------------------------------------------------- |
| AC1 | App loads successfully and shows default opportunities  |
| AC2 | Keyword and type filters work as expected               |
| AC3 | User can click into detail view and register with email |
| AC4 | All major components are typed and reusable             |
| AC5 | Tests validate basic UI and API behaviors               |

---

## License

MIT License
