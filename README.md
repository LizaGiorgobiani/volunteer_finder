# 🌱 Volunteer Finder

**Volunteer Finder** is a full-stack web application that allows users to browse, search, and explore volunteer opportunities based on their interests and availability.

---

## 🛠️ Technologies Used

### Frontend

- **React**
- **TypeScript**
- **React Router**
- **React Calendar** – for calendar-based date filtering
- **Password-Based Login & Signup** – with mocked authentication

### Backend

- **Node.js**
- **Express**
- **TypeScript**

### Data

- Static `opportunities.json` file (mock data)

---

## ✨ Features

- View a list of volunteer opportunities
- Filter by:
  - **Keyword** (title or location)
  - **Type** (e.g., education, environment)
  - **Date** (using a calendar)
- View full details of each opportunity
- Simulate email registration
- Login/signup with username and password (mocked)
- Fully typed using TypeScript
- Modular codebase with reusable components

---

## 📁 Project Structure

```
VOLUNTEER_FINDER/
├── client/         # React frontend
│   └── src/
│       ├── components/    # Reusable UI elements
│       ├── context/       # Auth context
│       ├── hooks/         # useOpportunities custom hook
│       ├── pages/         # Route-based pages
│       ├── services/      # API logic
│       ├── styles/        # Component styles
│       └── types/         # Shared TypeScript interfaces
├── server/         # Express backend
│   └── src/
│       ├── data/          # opportunities.json
│       ├── models/        # Type definitions
│       ├── test/          # Supertest API tests
│       └── server.ts      # Express entry point
├── docs/           # Markdown documentation (specs, schema, architecture)
├── README.md       # This file
├── TODO.md         # Task checklist
└── spec.md         # Technical specification
```

---

## 🎯 Purpose

This project demonstrates:

- Building a full-stack app using **modern web technologies**
- Organizing a clean, maintainable project structure
- Implementing end-to-end flows: API development, UI rendering, user interaction

---

## 🚀 Getting Started

### 1. Start the backend

```bash
cd server
npm install
npm run dev
```

Runs at: [http://localhost:3001](http://localhost:3001)

### 2. Start the frontend

```bash
cd client
npm install
npm run dev
```

Runs at: [http://localhost:5173](http://localhost:5173)

---

## 📄 License

MIT License
