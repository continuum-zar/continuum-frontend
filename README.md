# Continuum Frontend

## Freelancer Productivity Platform - Frontend

This is the dedicated frontend repository for the Continuum platform, a clean and unified platform designed for freelancers and small teams to track work, log hours, and manage tasks.

---

## Tech Stack

- **Framework:** React
- **Build Tool:** Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Zustand (or similar, based on `store/` analysis)
- **API Client:** Axios

---

## Getting Started

### Prerequisites

- Node.js 20+
- Docker and Docker Compose (optional for local development)

### Local Development

1.  **Install dependencies:**
    ```bash
    cd frontend
    npm install
    ```

2.  **Start development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

### Running with Docker

```bash
docker compose up --build
```
The application will be available at `http://localhost:5174`.

---

## Project Structure

```
continuum-frontend/
├── frontend/                # React + Vite application
│   ├── src/
│   │   ├── api/            # API client
│   │   ├── components/     # React components
│   │   ├── hooks/          # Custom hooks
│   │   ├── pages/          # Page components
│   │   └── store/          # State management
│   ├── Dockerfile
│   └── package.json
├── Dockerfile               # Root Dockerfile (Railway/Production)
├── docker-compose.yml       # Local Docker orchestration
└── README.md
```

---

## Environment Variables

The following environment variables are used:

- `VITE_API_BASE_URL`: The base URL for the backend API (defaults to `http://localhost:8001/api`).

---

## License

MIT License
