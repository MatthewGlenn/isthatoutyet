# Deployment Instructions

## Setting up Cloudflare Pages

1. Log in to your Cloudflare account.
2. Go to the Cloudflare Pages dashboard.
3. Click on "Create a project".

## Connecting the Repository to Cloudflare Pages

1. Connect your GitHub repository to Cloudflare Pages.
2. Select the repository and branch you want to deploy.
3. Click "Begin setup".

## Deploying the React and TypeScript Application with Deno 2

1. Configure the build settings:
   - **Build command:** `deno bundle src/index.tsx dist/bundle.js`
   - **Build directory:** `dist`
   - **Framework/tool:** `Deno 2`
2. Click "Save and Deploy".
