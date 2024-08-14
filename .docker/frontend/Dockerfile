# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and yarn.lock files from the frontend directory
COPY frontend/package.json frontend/yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the frontend application code
COPY frontend/ ./

# Build the frontend for production
RUN yarn quasar build

# At this point, your frontend assets will be available in the `dist/spa` directory.
# Nginx will serve this directory directly from the volume.
CMD ["yarn", "start"]