#!/bin/bash

# Bayes Price Docker Quick Start
set -e

echo "╔═══════════════════════════════════════════╗"
echo "║                                           ║"
echo "║   🐳 Bayes Price Docker Setup            ║"
echo "║                                           ║"
echo "╚═══════════════════════════════════════════╝"
echo ""

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed"
    echo "Please install Docker Desktop from: https://www.docker.com/products/docker-desktop"
    exit 1
fi

# Check if Docker is running
if ! docker info &> /dev/null; then
    echo "❌ Docker is not running"
    echo "Please start Docker Desktop and try again"
    exit 1
fi

echo "✅ Docker is installed and running"
echo ""

# Check for .env.docker file
if [ ! -f ".env.docker" ]; then
    echo "📝 Creating .env.docker file..."
    cp .env.docker.example .env.docker
    echo "✅ Created .env.docker"
    echo ""
    echo "⚠️  IMPORTANT: You need to edit .env.docker and add your Resend API key!"
    echo ""
    echo "1. Get your API key from: https://resend.com/api-keys"
    echo "2. Edit .env.docker and replace 're_123456789' with your actual key"
    echo "3. Verify your domain in Resend (or use onboarding@resend.dev)"
    echo ""
    read -p "Press Enter when you've updated .env.docker..."
fi

# Check if RESEND_API_KEY is set
if grep -q "re_123456789" .env.docker; then
    echo "⚠️  Warning: Resend API key not configured in .env.docker"
    echo "The API will start but emails won't be sent until you add your key"
    echo ""
    read -p "Continue anyway? (y/n) " -n 1 -r
    echo ""
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

echo "🚀 Starting Docker containers..."
echo ""

# Start Docker Compose
docker-compose --env-file .env.docker up --build

# Note: The script will stay running and show logs
# Press Ctrl+C to stop
