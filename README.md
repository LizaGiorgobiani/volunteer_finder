# Volunteer Finder

**Volunteer Finder** is a full-stack web application that displays a list of volunteer opportunities. Users can browse available events and filter them by keyword or activity type.

---

## 🛠 Technologies Used

### Frontend

- React
- TypeScript
- React Router

### Backend

- Node.js
- Express
- TypeScript

### Data

- Static `opportunities.json` file (mock data)

### Styling

- Basic CSS (custom and per-component styles)

---

## ✨ Features

- Browse all volunteer opportunities
- Filter by **keyword** (title/location)
- Filter by **type** (e.g., environment, education)
- View full details of each opportunity
- Simulate registration with email input
- Fully typed using TypeScript across client and server
- Modular and organized codebase

---

## 📁 Project Structure

```
VOLUNTEER_FINDER/
├── client/       # React frontend
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── hooks/
│       ├── styles/
│       └── types/
├── server/       # Node/Express backend
│   └── src/
│       ├── data/
│       ├── models/
│       ├── test/
│       └── server.ts
├── README.md     # Project overview (this file)
├── TODO.md       # Task tracking
└── spec.md       # Full technical specifications
```

---

## 🎯 Purpose

This project was created for learning and practice. It demonstrates:

- Building a complete full-stack application using **modern web technologies**
- Clean folder structure and modular design
- End-to-end flow: API creation, data handling, UI rendering, and user interaction

---

## 🚀 Getting Started

### 1. Start the backend

```bash
cd server
npm install
npm run dev
```

Runs on `http://localhost:3001`

### 2. Start the frontend

```bash
cd client
npm install
npm run dev
```

Runs on `http://localhost:5173`

---

## 📄 License

MIT License
