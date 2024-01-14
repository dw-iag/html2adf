
# HTML to ADF Conversion and Express Server Project

## Project Description
This project consists of a JavaScript module (`html2adf.js`) that converts HTML into Atlassian Document Format (ADF) and an Express server (`server.js`) setup. The module uses various libraries to facilitate the conversion, and the server handles requests and responses for this conversion process.

## Installation
To install the project dependencies, run `npm install` in your project directory. This project is compatible with Node version 20.10.0.

## html2adf.js Overview
[docs/html2adf.md](docs/html2adf.md)

## server.js Overview
[docs/server.md](docs/server.md)

## Usage
To run the server, execute `node server.js` in your terminal. The server listens on port 3000 and has two main routes:
- A POST route at `/` for converting HTML to ADF.
- A GET route at `/` responding with a 'Hello World!' message.

## Deploying to fly.io

As of 14 Jan 2024, I have this deployed to the fly.io service. You can follow the instructions below to do this. Please see https://fly.io/docs/hands-on/ for more details.

Deploying the application to fly.io involves several steps:

### 1. Install flyctl
- For macOS: Use Homebrew with `brew install flyctl` or the curl script `curl -L https://fly.io/install.sh | sh`.
- For Linux: Use the curl script `curl -L https://fly.io/install.sh | sh`.
- For Windows: Use PowerShell with `pwsh -Command "iwr https://fly.io/install.ps1 -useb | iex"`.

### 2. Sign In
- *Optional: If new to Fly.io, sign up with `fly auth signup` and follow the instructions.*
- Sign in with `fly auth login` and follow the instructions.

### 3. Launch the App
- Kickoff your app using `fly launch --image flyio/hellofly:latest`.
- Follow the prompts to configure your app, including choosing the region and app name.
- Once the launch sequence is followed, deploy your app using `fly deploy`

### 4. Check Your App's Status
- Use `fly status` to check the deployment status and details of your app.

### 5. Visit Your App
- Access your deployed app with `fly apps open`.
- Optionally, append `/<your-name>` to the command for a personalized path.
