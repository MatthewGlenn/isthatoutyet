# Deployment Instructions

## Setting up Docker on the Linux Instance

1. Install Docker on your Linux instance by following the official Docker installation guide for your distribution.
2. Start the Docker service and enable it to start on boot.
3. Install Docker Compose by following the official Docker Compose installation guide.

## Building and Running the Docker Container

### Clone the Repository

1. Clone the repository to your Linux instance:
   ```sh
   git clone https://github.com/MatthewGlenn/isthatoutyet.git
   ```
2. Navigate to the repository directory:
   ```sh
   cd isthatoutyet
   ```

### Pull the Docker Image

1. Pull the Docker image from the GitHub Container Registry:
   ```sh
   docker pull ghcr.io/matthewglenn/isthatoutyet:latest
   ```

### Start the Docker Container

You have two options to start the Docker container:

#### Option 1: Using Docker Compose

1. Start the Docker container using Docker Compose:
   ```sh
   docker-compose up -d
   ```

#### Option 2: Using Docker Run

1. Run the Docker container:
   ```sh
   docker run -d -p 80:80 ghcr.io/matthewglenn/isthatoutyet:latest
   ```

The static webpage should now be accessible on port 80 of your Linux instance.

## Removing the Docker Container

You have two options to stop and remove the Docker container:

### Option 1: Using Docker Compose

1. Stop and remove the Docker container:
   ```sh
   docker-compose down
   ```

### Option 2: Using Docker Run

1. Find the container ID and remove it:
   ```sh
   docker ps
   docker stop <container_id>
   docker rm <container_id>
   ```

## Updating the Docker Container

1. Pull the latest changes from the repository:
   ```sh
   git pull
   ```
2. Pull the latest Docker image from the GitHub Container Registry:
   ```sh
   docker pull ghcr.io/matthewglenn/isthatoutyet:latest
   ```

You have two options to restart the Docker container:

### Option 1: Using Docker Compose

1. Restart the Docker container:
   ```sh
   docker-compose up -d
   ```

### Option 2: Using Docker Run

1. Stop and remove the existing container:
   ```sh
   docker stop <container_id>
   docker rm <container_id>
   ```
2. Run the Docker container:
   ```sh
   docker run -d -p 80:80 ghcr.io/matthewglenn/isthatoutyet:latest
   ```

## Pulling the Docker Image from the Container Registry

### On the VPS

1. Install Docker on your VPS by following the official Docker installation guide for your distribution.
2. Start the Docker service and enable it to start on boot.
3. Pull the Docker image from the GitHub Container Registry:
   ```sh
   docker pull ghcr.io/matthewglenn/isthatoutyet:latest
   ```

### Locally

1. Install Docker on your local machine.
2. Pull the Docker image from the GitHub Container Registry:
   ```sh
   docker pull ghcr.io/matthewglenn/isthatoutyet:latest
   ```

You have two options to start the Docker container:

#### Option 1: Using Docker Compose

1. Start the Docker container:
   ```sh
   docker-compose up -d
   ```

#### Option 2: Using Docker Run

1. Run the Docker container:
   ```sh
   docker run -d -p 80:80 ghcr.io/matthewglenn/isthatoutyet:latest
   ```

## Running Locally

1. Install Docker and Docker Compose on your local machine.
2. Clone the repository to your local machine:
   ```sh
   git clone https://github.com/MatthewGlenn/isthatoutyet.git
   ```
3. Navigate to the repository directory:
   ```sh
   cd isthatoutyet
   ```
4. Pull the Docker image from the GitHub Container Registry:
   ```sh
   docker pull ghcr.io/matthewglenn/isthatoutyet:latest
   ```

You have two options to start the Docker container:

### Option 1: Using Docker Compose

1. Start the Docker container:
   ```sh
   docker-compose up -d
   ```

### Option 2: Using Docker Run

1. Run the Docker container:
   ```sh
   docker run -d -p 80:80 ghcr.io/matthewglenn/isthatoutyet:latest
   ```

The static webpage should now be accessible on port 80 of your local machine.

