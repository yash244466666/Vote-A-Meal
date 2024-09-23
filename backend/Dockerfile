# Use Node.js base image
FROM node:18

# Install PostgreSQL client tools
RUN apt-get update && apt-get install -y postgresql-client

# Create app directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json for dependency installation
COPY package.json package-lock.json /app/

# Install dependencies
RUN npm install

# Copy the rest of the app's source code
COPY . /app

# Copy the entrypoint script
COPY entrypoint.sh /app/

# Make the entrypoint script executable
RUN chmod +x /app/entrypoint.sh

# Expose the port used by the app
EXPOSE 3000

# Generate Prisma Client before starting the backend
RUN npx prisma generate

# Use the entrypoint script
ENTRYPOINT ["/app/entrypoint.sh"]