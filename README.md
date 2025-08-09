# Personal Website

## Project Overview

This repository contains the source code for my personal website built with React. The site is automatically built and deployed using a GitHub Actions workflow, providing a simple CI/CD pipeline.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or later recommended)
- [npm](https://www.npmjs.com/)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/IsaacRodgz/isaacrodgz.github.io.git
   ```
2. Navigate to the project directory:
   ```bash
   cd isaacrodgz.github.io
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Development

- `npm start` – Start the development server with hot reloading.
- `npm test` – Run the test suite.
- `npm run build` – Create an optimized production build.

## Deployment

Deployment is handled through GitHub Pages via a GitHub Actions workflow. Pushing to the `main` branch triggers the workflow defined in `.github/workflows/deploy.yml`, which builds the project and publishes the contents of the `build` directory to the `gh-pages` branch. GitHub Pages then serves the site from that branch. You can also deploy locally using:

```bash
npm run deploy
```
