#!/bin/bash
# Deploy script for Bayes Price website
# Server: 4.234.10.64 (Azure)

set -e

SERVER="4.234.10.64"
DEPLOY_PATH="/home/azureuser/bayesprice-poc"

echo "=== Bayes Price Deployment ==="
echo ""

# Build locally
echo "[1/4] Building frontend..."
yarn build

# Sync files to server
echo "[2/4] Syncing files to server..."
rsync -avz --delete \
  --exclude 'node_modules' \
  --exclude '.git' \
  --exclude 'api/node_modules' \
  ./ ${SERVER}:${DEPLOY_PATH}/

# Install dependencies and rebuild on server
echo "[3/4] Installing dependencies on server..."
ssh ${SERVER} "cd ${DEPLOY_PATH} && yarn install --frozen-lockfile"

# Update API .env.docker with GitHub token if needed
echo "[4/4] Ensuring API has latest env..."
ssh ${SERVER} "cd ${DEPLOY_PATH} && docker compose restart api 2>/dev/null || true"

echo ""
echo "=== Deployment Complete ==="
echo "Site: https://pages.bayesprice.com"
echo ""
