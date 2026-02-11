# Project Evaluation Rubrics – Complete Checklist

**Project:** Secure Academic Audit Management Tool  
**Tech Stack:** MERN  
**Documentation:** [View SRS](https://docs.google.com/document/d/1ymDLTrmieVgAhO71OzmAkfq8Z1TxrwL_/edit?usp=sharing)

This document lists **all official evaluation metrics** for Web Development Phases 1–3, with project-specific checkboxes and where to find or add evidence.

---

# Web Development : 1 — Phase 1

---

## 1. Tech Stack & Architecture

**Evaluation metric:**  
*Justification of selected technology stack (MERN/PERN/etc.) with a clear system flow diagram explaining component interactions.*

| # | Criterion | Status | Where / Notes |
|---|-----------|--------|----------------|
| 1.1 | Justification of selected technology stack (MERN/PERN/etc.) | [ ] | `README.md` (Tech Stack & Justification) |
| 1.2 | Clear system flow diagram explaining component interactions | [ ] | `README.md` (System Flow Diagram – Mermaid; export from mermaid.live if image needed) |

---

## 2. DB Schema & Entity Design

**Evaluation metric:**  
*ER diagrams showing entities, relationships, table structures, and appropriate data type definitions.*

| # | Criterion | Status | Where / Notes |
|---|-----------|--------|----------------|
| 2.1 | ER diagram showing entities and relationships | [ ] | `README.md` (DB Schema & ER Diagram) |
| 2.2 | Table/collection structures | [ ] | `README.md`, `backend/models/User.js`, `backend/models/Audit.js` |
| 2.3 | Appropriate data type definitions | [ ] | `README.md`, Mongoose schemas in `backend/models/` |

---

## 3. UI/UX Wireframes & Theme

**Evaluation metric:**  
*Wireframes created using Figma/Adobe XD or hand-drawn sketches illustrating user journey, layout, and chosen color palette.*

| # | Criterion | Status | Where / Notes |
|---|-----------|--------|----------------|
| 3.1 | Wireframes (Figma / Adobe XD / hand-drawn sketches) | [ ] | `README.md` (UI/UX Wireframes & Theme) – add link or images if required |
| 3.2 | User journey illustrated | [ ] | `README.md` (UI/UX section) |
| 3.3 | Layout illustrated | [ ] | README wireframes section or Figma/XD |
| 3.4 | Chosen color palette | [ ] | `README.md` (UI/UX), CSS variables in `frontend/src/index.css` |

---

## 4. Project Boilerplate Setup

**Evaluation metric:**  
*GitHub repository initialization with proper client-server folder structure and environment variable configuration.*

| # | Criterion | Status | Where / Notes |
|---|-----------|--------|----------------|
| 4.1 | GitHub repository initialization | [ ] | `git init`, create repo on GitHub and push |
| 4.2 | Proper client-server folder structure | [x] | `frontend/`, `backend/` |
| 4.3 | Environment variable configuration | [ ] | `backend/.env`, `backend/.env.example`; document in README |

---

## 5. GitHub Workflow & Documentation

**Evaluation metric:**  
*Includes .gitignore setup, initial README with installation steps, and a clear branching strategy.*

| # | Criterion | Status | Where / Notes |
|---|-----------|--------|----------------|
| 5.1 | .gitignore setup | [x] | Root `.gitignore`; ensure `.env` and `node_modules` ignored |
| 5.2 | Initial README with installation steps | [x] | Root `README.md` |
| 5.3 | Clear branching strategy | [x] | Documented in `README.md` (main, develop, feature/*, fix/*) |

---

# Web Development : 2 — Phase 2

---

## 1. Backend API Development

**Evaluation metric:**  
*RESTful API routes are properly designed, implemented, and tested using Postman or Thunder Client.*

| # | Criterion | Status | Where / Notes |
|---|-----------|--------|----------------|
| 2.1.1 | RESTful API routes properly designed | [ ] | Resource-based URLs, correct HTTP methods in `backend/routes/` |
| 2.1.2 | RESTful API routes implemented | [ ] | `backend/routes/Auth.js`, `backend/routes/Audit.js`; add full CRUD if needed |
| 2.1.3 | API tested using Postman or Thunder Client | [ ] | Export collection; API summary in `README.md` |

---

## 2. Database & Auth Integration

**Evaluation metric:**  
*Successful database connection with secure authentication implemented using JWT or Firebase Authentication.*

| # | Criterion | Status | Where / Notes |
|---|-----------|--------|----------------|
| 2.2.1 | Successful database connection | [x] | `backend/server.js` – Mongoose to MongoDB |
| 2.2.2 | Secure authentication (JWT or Firebase) | [x] | JWT in `backend/routes/Auth.js`; protect write routes with auth middleware |

---

## 3. Full-Stack CRUD

**Evaluation metric:**  
*Frontend UI components correctly fetch, display, create, update, and delete data through backend APIs.*

| # | Criterion | Status | Where / Notes |
|---|-----------|--------|----------------|
| 2.3.1 | Fetch data through backend APIs | [ ] | GET in frontend (e.g. Dashboard, Admin, Staff, Student pages) |
| 2.3.2 | Display data | [ ] | List/detail views in UI |
| 2.3.3 | Create data through backend APIs | [ ] | POST from frontend (e.g. add audit) |
| 2.3.4 | Update data through backend APIs | [ ] | PUT/PATCH route + edit UI |
| 2.3.5 | Delete data through backend APIs | [ ] | DELETE route + delete UI |

---

## 4. State Management

**Evaluation metric:**  
*Efficient frontend state handling implemented using React Hooks, Redux, or Zustand for smooth data flow.*

| # | Criterion | Status | Where / Notes |
|---|-----------|--------|----------------|
| 2.4.1 | Frontend state handling (React Hooks / Redux / Zustand) | [ ] | useState, useEffect in pages; optional Context/Redux/Zustand for global state |

---

## 5. Error Handling & Security

**Evaluation metric:**  
*Server-side input validation, secure HTTP headers, and basic error logging mechanisms are implemented.*

| # | Criterion | Status | Where / Notes |
|---|-----------|--------|----------------|
| 2.5.1 | Server-side input validation | [ ] | Auth & Audit routes (e.g. express-validator or manual checks) |
| 2.5.2 | Secure HTTP headers | [ ] | e.g. helmet in `backend/server.js` |
| 2.5.3 | Basic error logging mechanisms | [ ] | Central error middleware; log to console or file |

---

# Web Development : 3 — Phase 3

---

## 1. UI/UX Refinement

**Evaluation metric:**  
*Final UI styling with responsive layouts for mobile and desktop, smooth animations, and user feedback using loaders and toast notifications.*

| # | Criterion | Status | Where / Notes |
|---|-----------|--------|----------------|
| 3.1.1 | Final UI styling | [ ] | Consistent theme, typography, spacing in `frontend/src/` |
| 3.1.2 | Responsive layouts for mobile and desktop | [ ] | Media queries / responsive grid |
| 3.1.3 | Smooth animations | [ ] | CSS transitions or animation library |
| 3.1.4 | User feedback: loaders and toast notifications | [ ] | Spinner/skeleton on load; toasts on success/error |

---

## 2. Advanced Logic

**Evaluation metric:**  
*Implementation of search, filtering, pagination, or integration with third-party services such as payments, maps, or Cloudinary.*

| # | Criterion | Status | Where / Notes |
|---|-----------|--------|----------------|
| 3.2.1 | At least one: search / filtering / pagination / third-party (payments, maps, Cloudinary) | [ ] | Current: department filter; can add search, pagination, or Cloudinary |

---

## 3. Performance & Testing

**Evaluation metric:**  
*Optimized database queries, frontend code splitting, and basic unit or integration testing for reliability.*

| # | Criterion | Status | Where / Notes |
|---|-----------|--------|----------------|
| 3.3.1 | Optimized database queries | [ ] | Select fields, .lean(), indexes in `backend/routes/` and models |
| 3.3.2 | Frontend code splitting | [ ] | e.g. React.lazy() for route components in `App.js` |
| 3.3.3 | Basic unit or integration testing | [ ] | Backend (Jest + supertest) and/or frontend (React Testing Library) |

---

## 4. Production Deployment

**Evaluation metric:**  
*Application deployed to live hosting platforms like Vercel, Render, or AWS with a working URL and CI/CD pipeline.*

| # | Criterion | Status | Where / Notes |
|---|-----------|--------|----------------|
| 3.4.1 | Deployed to Vercel / Render / AWS (or similar) | [ ] | Working live URL |
| 3.4.2 | CI/CD pipeline | [ ] | e.g. GitHub Actions for test and/or deploy on push |

---

## 5. Documentation & Final Viva

**Evaluation metric:**  
*Comprehensive project report, API documentation using Swagger or Postman, and clear code explanation during viva.*

| # | Criterion | Status | Where / Notes |
|---|-----------|--------|----------------|
| 3.5.1 | Comprehensive project report | [ ] | Overview, design decisions, challenges, future work |
| 3.5.2 | API documentation (Swagger or Postman) | [ ] | `README.md` (API Overview); Postman collection or Swagger spec |
| 3.5.3 | Clear code explanation during viva | [ ] | Prepare walkthrough of auth flow, CRUD, role-based UI, key files |

---

# Summary Table (all evaluation metrics at a glance)

| Phase | Category | Official evaluation metric |
|-------|----------|----------------------------|
| **1** | Tech Stack & Architecture | Justification of selected technology stack (MERN/PERN/etc.) with a clear system flow diagram explaining component interactions. |
| **1** | DB Schema & Entity Design | ER diagrams showing entities, relationships, table structures, and appropriate data type definitions. |
| **1** | UI/UX Wireframes & Theme | Wireframes created using Figma/Adobe XD or hand-drawn sketches illustrating user journey, layout, and chosen color palette. |
| **1** | Project Boilerplate Setup | GitHub repository initialization with proper client-server folder structure and environment variable configuration. |
| **1** | GitHub Workflow & Documentation | Includes .gitignore setup, initial README with installation steps, and a clear branching strategy. |
| **2** | Backend API Development | RESTful API routes are properly designed, implemented, and tested using Postman or Thunder Client. |
| **2** | Database & Auth Integration | Successful database connection with secure authentication implemented using JWT or Firebase Authentication. |
| **2** | Full-Stack CRUD | Frontend UI components correctly fetch, display, create, update, and delete data through backend APIs. |
| **2** | State Management | Efficient frontend state handling implemented using React Hooks, Redux, or Zustand for smooth data flow. |
| **2** | Error Handling & Security | Server-side input validation, secure HTTP headers, and basic error logging mechanisms are implemented. |
| **3** | UI/UX Refinement | Final UI styling with responsive layouts for mobile and desktop, smooth animations, and user feedback using loaders and toast notifications. |
| **3** | Advanced Logic | Implementation of search, filtering, pagination, or integration with third-party services such as payments, maps, or Cloudinary. |
| **3** | Performance & Testing | Optimized database queries, frontend code splitting, and basic unit or integration testing for reliability. |
| **3** | Production Deployment | Application deployed to live hosting platforms like Vercel, Render, or AWS with a working URL and CI/CD pipeline. |
| **3** | Documentation & Final Viva | Comprehensive project report, API documentation using Swagger or Postman, and clear code explanation during viva. |

---

# Quick reference – project structure

```
secure-audit-tool/
├── backend/           # Express + Mongoose API
├── frontend/          # React app
├── README.md
├── .gitignore
└── EVALUATION_RUBRICS.md  # This file
```

*Mark each `[ ]` as `[x]` when complete. Use the Summary Table for viva prep.*
