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
# Give the container the ability to run the start.sh script
RUN npx prisma generate & chmod +x start.sh

# Expose port 3000 to the host
EXPOSE 3000

# Command to run the application
CMD [ "./start.sh" ]