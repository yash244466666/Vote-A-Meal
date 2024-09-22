#!/bin/sh

# Wait for PostgreSQL to be ready
until pg_isready -h db -p 5432 -U postgres; do
  echo "Waiting for PostgreSQL to be ready..."
  sleep 2
done

# Start the backend service in the background
npm run start:dev &

# Wait for the backend service to be ready
until curl -s http://localhost:3000 > /dev/null; do
  echo "Waiting for backend service to be ready..."
  sleep 2
done

# Run Prisma migrations
npx prisma migrate dev

# Seed the database
npm run seed

# Keep the container running
wait