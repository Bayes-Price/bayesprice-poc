# 🐳 Docker Setup Guide

## Quick Start (Easiest Way!)

### 1. Set up environment variables:
```bash
cp .env.docker.example .env.docker
```

Edit `.env.docker` and add your SendGrid API key:
```env
SENDGRID_API_KEY=SG.your_actual_key_here
SENDGRID_FROM_EMAIL=noreply@bayesprice.com
SENDGRID_TO_EMAIL=info@bayesprice.com
```

### 2. Start everything with one command:
```bash
docker-compose --env-file .env.docker up
```

That's it! 🎉

The system will:
- ✅ Start PostgreSQL database
- ✅ Create the database and tables automatically
- ✅ Start the API server
- ✅ Run migrations
- ✅ Be ready to accept form submissions

### 3. Access the application:

- **Frontend**: http://localhost:5173 (run `npm run dev` separately)
- **API**: http://localhost:3009
- **API Health Check**: http://localhost:3009/api/discovery/health
- **PostgreSQL**: localhost:5439

## What's Running?

```
┌─────────────────────────────────────────┐
│  Frontend (localhost:5173)              │
│  Run separately: npm run dev            │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│  API Server (localhost:3009)            │
│  - Express + TypeScript                 │
│  - SendGrid emails                      │
│  - Form validation                      │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│  PostgreSQL (localhost:5439)            │
│  - Database: bayesprice                 │
│  - User: bayesprice_user                │
│  - Data persisted in Docker volume      │
└─────────────────────────────────────────┘
```

## Docker Commands

### Start services:
```bash
# Start in foreground (see logs)
docker-compose --env-file .env.docker up

# Start in background
docker-compose --env-file .env.docker up -d

# Start and rebuild
docker-compose --env-file .env.docker up --build
```

### Stop services:
```bash
# Stop containers
docker-compose down

# Stop and remove volumes (deletes database data!)
docker-compose down -v
```

### View logs:
```bash
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f api
docker-compose logs -f postgres
```

### Access database:
```bash
# Connect to PostgreSQL
docker-compose exec postgres psql -U bayesprice_user -d bayesprice

# View submissions
docker-compose exec postgres psql -U bayesprice_user -d bayesprice -c "SELECT * FROM discovery_submissions;"
```

### Restart a service:
```bash
docker-compose restart api
docker-compose restart postgres
```

### Run migrations manually:
```bash
docker-compose exec api npm run db:migrate
```

## Development Workflow

### Option 1: Docker for Backend, Local for Frontend (Recommended)

**Terminal 1 - Start Docker services:**
```bash
docker-compose --env-file .env.docker up
```

**Terminal 2 - Run frontend locally:**
```bash
npm run dev
```

This gives you:
- ✅ Easy database management (Docker)
- ✅ Fast frontend hot-reload (local)
- ✅ API with auto-restart (Docker)

### Option 2: Everything in Docker

Uncomment the `frontend` service in `docker-compose.yml` and run:
```bash
docker-compose --env-file .env.docker up
```

### Option 3: Everything Local (No Docker)

Follow the instructions in `API_SETUP.md`

## Environment Variables

The `.env.docker` file contains:

| Variable | Description | Required |
|----------|-------------|----------|
| `POSTGRES_PASSWORD` | Database password | Yes |
| `SENDGRID_API_KEY` | SendGrid API key | Yes |
| `SENDGRID_FROM_EMAIL` | Verified sender email | Yes |
| `SENDGRID_TO_EMAIL` | Where to receive notifications | Yes |
| `NODE_ENV` | development/production | No |
| `FRONTEND_URL` | Frontend URL for CORS | No |

## Data Persistence

Database data is stored in a Docker volume named `postgres_data`. This means:
- ✅ Data persists between container restarts
- ✅ Data survives `docker-compose down`
- ❌ Data is deleted with `docker-compose down -v`

### Backup database:
```bash
docker-compose exec postgres pg_dump -U bayesprice_user bayesprice > backup.sql
```

### Restore database:
```bash
cat backup.sql | docker-compose exec -T postgres psql -U bayesprice_user bayesprice
```

## Troubleshooting

### "Port already in use"

If ports 3001 or 5432 are already in use:

**Option 1:** Stop the conflicting service
```bash
# Find what's using the port
lsof -ti:3001 | xargs kill
lsof -ti:5432 | xargs kill
```

**Option 2:** Change ports in `docker-compose.yml`
```yaml
ports:
  - "3002:3001"  # Use 3002 instead of 3001
```

### "Cannot connect to database"

```bash
# Check if PostgreSQL is healthy
docker-compose ps

# View PostgreSQL logs
docker-compose logs postgres

# Restart PostgreSQL
docker-compose restart postgres
```

### "API not responding"

```bash
# Check API logs
docker-compose logs api

# Check API health
curl http://localhost:3001/api/discovery/health

# Restart API
docker-compose restart api
```

### "SendGrid errors"

1. Verify your API key is correct in `.env.docker`
2. Check sender email is verified in SendGrid
3. View API logs: `docker-compose logs api`

### Reset everything:
```bash
# Stop and remove everything (including database data)
docker-compose down -v

# Start fresh
docker-compose --env-file .env.docker up --build
```

## Production Deployment

### Build for production:
```bash
docker-compose -f docker-compose.prod.yml up -d
```

### Use managed database:

Instead of running PostgreSQL in Docker, use a managed service:
- AWS RDS
- Google Cloud SQL
- DigitalOcean Managed Databases
- Heroku Postgres

Update `DATABASE_URL` in your production environment.

## Health Checks

Docker Compose includes health checks:

- **PostgreSQL**: Checks if database accepts connections
- **API**: Checks `/api/discovery/health` endpoint

Services won't start until their dependencies are healthy.

## Monitoring

### Check service status:
```bash
docker-compose ps
```

### View resource usage:
```bash
docker stats
```

### View all containers:
```bash
docker ps -a
```

## Cleaning Up

### Remove stopped containers:
```bash
docker-compose down
```

### Remove images:
```bash
docker-compose down --rmi all
```

### Remove everything (containers, networks, volumes, images):
```bash
docker-compose down -v --rmi all
```

### Clean up Docker system:
```bash
docker system prune -a
```

## Next Steps

1. ✅ Copy `.env.docker.example` to `.env.docker`
2. ✅ Add your SendGrid API key
3. ✅ Run `docker-compose --env-file .env.docker up`
4. ✅ In another terminal, run `npm run dev` for frontend
5. ✅ Visit http://localhost:5173 and test the form!

## Benefits of Docker Setup

✅ **No PostgreSQL installation needed** - Runs in container  
✅ **Consistent environment** - Same setup for all developers  
✅ **Easy cleanup** - `docker-compose down` removes everything  
✅ **Isolated** - Doesn't interfere with other projects  
✅ **Production-ready** - Same setup works in production  
✅ **Automatic migrations** - Runs on startup  
✅ **Health checks** - Ensures services are ready  
✅ **Data persistence** - Database data survives restarts  

---

**Need help?** Check the troubleshooting section or see `API_SETUP.md` for more details.
