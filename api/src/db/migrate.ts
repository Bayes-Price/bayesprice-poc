import pool from './connection.js';

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS discovery_submissions (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    company VARCHAR(255),
    message TEXT,
    submitted_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    ip_address VARCHAR(45),
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
  );

  -- Create index on email for faster lookups
  CREATE INDEX IF NOT EXISTS idx_discovery_submissions_email ON discovery_submissions(email);
  
  -- Create index on submitted_at for sorting
  CREATE INDEX IF NOT EXISTS idx_discovery_submissions_submitted_at ON discovery_submissions(submitted_at DESC);
`;

async function migrate() {
    try {
        console.log('🔄 Running database migrations...');
        await pool.query(createTableQuery);
        console.log('✅ Database migrations completed successfully');
        process.exit(0);
    } catch (error) {
        console.error('❌ Migration failed:', error);
        process.exit(1);
    }
}

migrate();
