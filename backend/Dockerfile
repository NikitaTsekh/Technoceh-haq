# Use the official Python image from the Docker Hub
FROM python:3.10

# Set the working directory in the container
WORKDIR /app

COPY .env /app/.env

# Upgrade pip to the latest version
RUN pip install --upgrade pip

# Copy the requirements file into the container
COPY requirements.txt .

# Install any dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code into the container
COPY src .

# Copy the entrypoint script into the container
COPY entrypoint.sh /app/entrypoint.sh

# Set the environment variable for Django settings module
ENV DJANGO_SETTINGS_MODULE=djangoProject.settings


# Expose the port Django runs on
EXPOSE 8001

# Set environment variables
ENV PYTHONUNBUFFERED=1

# Run the Django development server
ENTRYPOINT ["/app/entrypoint.sh"]
