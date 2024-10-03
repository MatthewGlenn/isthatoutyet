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
3. Pull the Docker image from the GitHub Container Registry:
   ```
   docker pull ghcr.io/matthewglenn/isthatoutyet:latest
   ```
4. Start the Docker container using Docker Compose:
   ```
   docker-compose up -d
   ```
5. The static webpage should now be accessible on port 80 of your Linux instance.

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
2. Pull the latest Docker image from the GitHub Container Registry:
   ```
   docker pull ghcr.io/matthewglenn/isthatoutyet:latest
   ```
3. Restart the Docker container:
   ```
   docker-compose up -d
   ```

## Pulling the Docker Image from the Container Registry

### On the VPS

1. Install Docker on your VPS by following the official Docker installation guide for your distribution.
2. Start the Docker service and enable it to start on boot.
3. Pull the Docker image from the GitHub Container Registry:
   ```
   docker pull ghcr.io/matthewglenn/isthatoutyet:latest
   ```
4. Start the Docker container using Docker Compose:
   ```
   docker-compose up -d
   ```

### Locally

1. Install Docker on your local machine.
2. Pull the Docker image from the GitHub Container Registry:
   ```
   docker pull ghcr.io/matthewglenn/isthatoutyet:latest
   ```
3. Start the Docker container using Docker Compose:
   ```
   docker-compose up -d
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
4. Pull the Docker image from the GitHub Container Registry:
   ```
   docker pull ghcr.io/matthewglenn/isthatoutyet:latest
   ```
5. Start the Docker container using Docker Compose:
   ```
   docker-compose up -d
   ```
6. The static webpage should now be accessible on port 80 of your local machine.

## NextJS
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.