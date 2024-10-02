# Deployment Instructions

## Setting up Docker on the Linux Instance

1. Install Docker on your Linux instance by following the official Docker installation guide for your distribution.
2. Start the Docker service and enable it to start on boot.
3. Install Docker Compose by following the official Docker Compose installation guide.

## Building and Running the Docker Container using `docker-compose`

1. Clone the repository to your Linux instance:
   ```
   git clone https://github.com/MatthewGlenn/isthatoutyet.git
   ```
2. Navigate to the repository directory:
   ```
   cd isthatoutyet
   ```
3. Build and start the Docker container using Docker Compose:
   ```
   docker-compose up --build -d
   ```
4. The static webpage should now be accessible on port 80 of your Linux instance.

## Removing the Docker Container

1. To stop and remove the Docker container, run:
   ```
   docker-compose down
   ```

## Updating the Docker Container

1. To update the Docker container with the latest changes, pull the latest changes from the repository:
   ```
   git pull
   ```
2. Rebuild and restart the Docker container:
   ```
   docker-compose up --build -d
   ```

## Running Locally

1. Install Docker and Docker Compose on your local machine.
2. Clone the repository to your local machine:
   ```
   git clone https://github.com/MatthewGlenn/isthatoutyet.git
   ```
3. Navigate to the repository directory:
   ```
   cd isthatoutyet
   ```
4. Build and start the Docker container using Docker Compose:
   ```
   docker-compose up --build -d
   ```
5. The static webpage should now be accessible on port 80 of your local machine.
