
# Server.js Overview

## Description
This JavaScript file, `server.js`, sets up a simple server using Express, a minimal and flexible Node.js web application framework for building web and mobile applications.

## Modules Imported
- `express`: The core framework for the server.
- `body-parser`: Middleware for parsing incoming request bodies.
- `html2adf.js`: A local module for converting HTML to Atlassian Document Format (ADF).

## Server Setup
1. **Create Express Application**: Initialize using `express()`.
2. **Middleware Configuration**:
   - `htmlParse`: Created using the text factory from `body-parser` to parse `text/html` content types.
   - `json`: Extracted from `body-parser` to parse JSON request bodies.

## Routes
1. **POST Route** (`'/'`):
   - Uses `htmlParse` middleware.
   - Converts parsed HTML to ADF using `html2adf`.
   - Returns the ADF as a JSON response.
   - Error Handling: Responds with a 400 status code and the error message on failure.
2. **GET Route** (`'/'`):
   - Uses `json` middleware.
   - Responds with a 'Hello World!' message.

## Server Execution
- Listens on port 3000.
- Logs a message to the console when the server is ready, indicating it's listening on port 3000.
