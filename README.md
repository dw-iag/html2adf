
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

## Deploying to render.com

As of 16 Jan 2024, this is easily deployed to the render.com free tier. You can follow the instructions below to do this. Please see https://docs.render.com/deploy-node-express-app for more details.

Deploying the application to render.com involves several steps:

### 1. Create account / sign in at https://dashboard.render.com/

### 2. Connect to Github repo

### 3. Select html2adf associated repo

### 4. Wait 5-10 minutes

### 5. Visit Your App!
