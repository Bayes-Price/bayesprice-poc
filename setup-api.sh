#!/bin/bash

# Bayes Price API Quick Setup Script
# This script helps you set up the backend API quickly

set -e  # Exit on error

echo "╔═══════════════════════════════════════════╗"
echo "║                                           ║"
echo "║   Bayes Price API Setup                   ║"
echo "║                                           ║"
echo "╚═══════════════════════════════════════════╝"
echo ""

# Check if we're in the right directory
if [ ! -d "api" ]; then
    echo "❌ Error: api directory not found"
    echo "Please run this script from the project root directory"
    exit 1
fi

# Step 1: Install dependencies
echo "📦 Step 1/5: Installing dependencies..."
cd api
npm install
cd ..
echo "✅ Dependencies installed"
echo ""

# Step 2: Check PostgreSQL
echo "🔍 Step 2/5: Checking PostgreSQL..."
if command -v psql &> /dev/null; then
    echo "✅ PostgreSQL is installed"
else
    echo "❌ PostgreSQL not found"
    echo "Please install PostgreSQL:"
    echo "  macOS: brew install postgresql@15"
    echo "  Ubuntu: sudo apt-get install postgresql"
    exit 1
fi
echo ""

# Step 3: Create .env file
echo "⚙️  Step 3/5: Setting up environment variables..."
if [ ! -f "api/.env" ]; then
    cp api/.env.example api/.env
    echo "✅ Created api/.env file"
    echo "⚠️  IMPORTANT: You need to edit api/.env with your actual values:"
    echo "   - DATABASE_URL (PostgreSQL connection string)"
    echo "   - SENDGRID_API_KEY (from SendGrid dashboard)"
    echo "   - SENDGRID_FROM_EMAIL (verified sender email)"
    echo "   - SENDGRID_TO_EMAIL (where to receive notifications)"
else
    echo "✅ api/.env already exists"
fi
echo ""

# Step 4: Create frontend .env
echo "⚙️  Step 4/5: Setting up frontend environment..."
if [ ! -f ".env" ]; then
    echo "VITE_API_URL=http://localhost:3001" > .env
    echo "✅ Created .env file for frontend"
else
    if ! grep -q "VITE_API_URL" .env; then
        echo "VITE_API_URL=http://localhost:3001" >> .env
        echo "✅ Added VITE_API_URL to .env"
    else
        echo "✅ Frontend .env already configured"
    fi
fi
echo ""

# Step 5: Instructions for database setup
echo "📋 Step 5/5: Database setup instructions"
echo ""
echo "To complete the setup, you need to:"
echo ""
echo "1. Create the PostgreSQL database:"
echo "   psql postgres -c \"CREATE DATABASE bayesprice;\""
echo ""
echo "2. Update api/.env with your database credentials"
echo ""
echo "3. Run the database migration:"
echo "   cd api && npm run db:migrate"
echo ""
echo "4. Start the API server:"
echo "   cd api && npm run dev"
echo ""
echo "5. In another terminal, start the frontend:"
echo "   npm run dev"
echo ""
echo "╔═══════════════════════════════════════════╗"
echo "║                                           ║"
echo "║   Setup Complete! 🎉                      ║"
echo "║                                           ║"
echo "║   Next steps:                             ║"
echo "║   1. Edit api/.env with your credentials  ║"
echo "║   2. Create the database                  ║"
echo "║   3. Run migrations                       ║"
echo "║   4. Start the servers                    ║"
echo "║                                           ║"
echo "║   See API_SETUP.md for detailed guide    ║"
echo "║                                           ║"
echo "╚═══════════════════════════════════════════╝"
