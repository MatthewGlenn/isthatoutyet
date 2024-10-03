# isthatoutyet
![Build Status](https://github.com/MatthewGlenn/isthatoutyet/actions/workflows/docker-image.yml/badge.svg?branch=main)
Calendar for New Media Releases

## Title of the Static Webpage
The title of the static webpage is "Is that out yet?".

## Deployment Instructions
For detailed deployment instructions, please refer to the [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) file.

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

### Pulling the Docker Image from the Container Registry
For instructions on pulling the Docker image from the GitHub Container Registry, please refer to the "Pulling the Docker Image from the Container Registry" section in the [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) file.

## Project Information
This project is a basic static webpage with the title "Is that out yet?".

## How it Works
The static webpage displays the title "Is that out yet?" in the browser. It is a simple HTML file with a `<title>` element and a `<h1>` element containing the text "Is that out yet?".

## Documentation
For more information on how to run this application, please refer to the following documentation:
- [HTML Documentation](https://developer.mozilla.org/en-US/docs/Web/HTML)

## Deployment Documentation
For detailed deployment instructions, please refer to the [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) file.

## Future Features and Tasks
The following features and tasks are planned for future implementation:
- [ ] A calendar view to display upcoming media releases.
  - [ ] Week View
  - [ ] Month view
- [ ] Integration with external APIs to fetch release dates.
- [ ] Countdown for item page
- [ ] Newsletter for users
- [ ] Discord alerts
- [ ] Support for different types of media releases, such as:
  - [ ] Video Games
    - [ ] Player(s)
    - [ ] Feature(s)
    - [ ] Link to Open Critic
    - [ ] Link to Meta Critic
    - [ ] Link to Twitch streams (Twitch ID)
  - [ ] Movies
  - [ ] TV Shows
  - [ ] Comic Books
- [ ] Securing the site with HTTPS
- [ ] Using Kubernetes
- [ ] Automated builds
- [ ] Automated deploys to a container registry
- [ ] Automated tests and PR checks
