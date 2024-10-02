# Use an appropriate base image
FROM nginx:alpine

# Copy the static files from the repository to the appropriate directory in the Docker image
COPY . /usr/share/nginx/html

# Expose the necessary port for the web server
EXPOSE 80

# Set the default command to run the web server
CMD ["nginx", "-g", "daemon off;"]
