# Use an appropriate base image
FROM node:lts-alpine3.20

# Set the image source from the repo url
LABEL org.opencontainers.image.source https://github.com/matthewglenn/isthatoutyet/

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Expose port 3000 to the host
EXPOSE 3000

# Copy the start script into the container
COPY start.sh /usr/local/bin/start.sh
RUN chmod +x /usr/local/bin/start.sh

# Command to run the application
CMD [ "/usr/local/bin/start.sh" ]