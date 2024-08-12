# Use the official Nginx image as a parent image
FROM nginx:latest

# Remove the default Nginx configuration file
RUN rm /etc/nginx/conf.d/default.conf

# Copy the custom configuration file from your project directory into the container
COPY .docker/nginx/nginx.conf /etc/nginx/conf.d

# Optionally, copy static and media files if they are not volumed from Django
#COPY static/ /usr/share/nginx/html/static/
#COPY media/ /usr/share/nginx/html/media/
CMD ["nginx", "-g", "daemon off;"]
# Expose port 80 to the outside once the container has launched
EXPOSE 80
