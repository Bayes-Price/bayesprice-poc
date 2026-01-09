# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Bayes Price marketing website with a React frontend and Express/Node.js backend API for handling form submissions.

## Commands

### Frontend (root directory)
```bash
yarn dev          # Start dev server on http://localhost:8080
yarn build        # Production build to dist/
yarn lint         # Run ESLint
```

### Backend API (api/ directory)
```bash
cd api
yarn dev          # Start API with hot reload (tsx watch)
yarn build        # Compile TypeScript
yarn start        # Run compiled output
yarn db:migrate   # Run database migrations
```

### Docker (full stack with PostgreSQL)
```bash
docker compose up     # Start PostgreSQL + API
docker compose down   # Stop all services
```

Docker exposes: PostgreSQL on `5439`, API on `3009`

## Architecture

**Frontend** (`src/`): React 18 + TypeScript + Vite
- shadcn/ui components in `src/components/ui/`
- Pages in `src/pages/` (routed via react-router-dom in `App.tsx`)
- Path alias `@/` maps to `src/`

**Backend API** (`api/`): Express + TypeScript + PostgreSQL
- Entry: `api/src/server.ts`
- Routes: `api/src/routes/discovery.ts` (handles form submissions)
- Database: `api/src/db/` (connection, migrations)
- Email: `api/src/services/email.ts` (Resend integration)

**API Endpoints**:
- `POST /api/discovery/submit` - Form submission
- `GET /api/discovery/submissions` - List submissions
- `GET /api/discovery/submissions/export` - Export data
- `GET /api/discovery/health` - Health check

## Environment Variables

Copy `.env.docker.example` to `.env.docker` for Docker setup, or `api/.env.example` to `api/.env` for local API development.

Required:
- `DATABASE_URL` - PostgreSQL connection string
- `RESEND_API_KEY` - For email notifications
- `FRONTEND_URL` - CORS origin (default: http://localhost:5173)
