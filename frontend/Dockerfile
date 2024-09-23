# Use a lightweight Node.js base image
FROM node:18-alpine

# Create app directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json for dependency installation
COPY package.json package-lock.json /app/

# Install dependencies
RUN npm install 

# Copy the rest of the app's source code
COPY . .

# Expose the port used by the app
EXPOSE 3000

# Start the frontend service
CMD ["npm", "run", "dev"]