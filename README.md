# isthatoutyet

![Build Status](https://github.com/MatthewGlenn/isthatoutyet/actions/workflows/docker-image.yml/badge.svg?branch=main)
Calendar for New Media Releases

## Title of the Static Webpage

The title of the static webpage is "Is that out yet?".

## Deployment Instructions

For detailed deployment instructions, please refer to the [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) file.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

### Getting Started

1. Setup a Postgres Database and create an `.env` that points to it
2. Run the `build_and_run.sh` script to build and run the Docker container
3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

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
