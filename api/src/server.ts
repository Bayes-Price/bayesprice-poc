import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import discoveryRoutes from './routes/discovery.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
    origin: process.env.FRONTEND_URL || '*', // Allow all origins for now
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
    next();
});

// Routes
app.use('/api/discovery', discoveryRoutes);

// Root endpoint
app.get('/', (req, res) => {
    res.json({
        name: 'Bayes Price API',
        version: '1.0.0',
        status: 'running',
        endpoints: {
            health: '/api/discovery/health',
            submit: 'POST /api/discovery/submit',
            submissions: 'GET /api/discovery/submissions',
            export: 'GET /api/discovery/submissions/export',
        },
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        error: 'Not found',
        message: `Route ${req.method} ${req.path} not found`,
    });
});

// Error handler
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error('Error:', err);
    res.status(500).json({
        error: 'Internal server error',
        message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong',
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`
╔═══════════════════════════════════════════╗
║                                           ║
║   🚀 Bayes Price API Server Running      ║
║                                           ║
║   Port: ${PORT}                             ║
║   Environment: ${process.env.NODE_ENV || 'development'}              ║
║   Frontend: ${process.env.FRONTEND_URL || 'http://localhost:5173'}    ║
║                                           ║
║   API Endpoints:                          ║
║   • POST /api/discovery/submit            ║
║   • GET  /api/discovery/submissions       ║
║   • GET  /api/discovery/submissions/export║
║   • GET  /api/discovery/health            ║
║                                           ║
╚═══════════════════════════════════════════╝
  `);
});

export default app;
