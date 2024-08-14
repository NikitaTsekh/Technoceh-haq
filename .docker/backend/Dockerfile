# Use the official Python image from the Docker Hub
FROM python:3.10

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set the working directory in the container
WORKDIR /app


# Print the current working directory


COPY backend/.env /app/.env

# Upgrade pip to the latest version
RUN pip install --upgrade pip

# Copy the requirements file into the container
COPY backend/requirements.txt .

# Install any dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code into the container
COPY backend/src /backend/src



# Set the environment variable for Django settings module
ENV DJANGO_SETTINGS_MODULE=djangoProject.settings


# Expose the port Django runs on
EXPOSE 8001

# Set environment variables
ENV PYTHONUNBUFFERED=1

COPY .docker/backend/entrypoint.sh /backend/entrypoint.sh


ENTRYPOINT ["/backend/entrypoint.sh"]
