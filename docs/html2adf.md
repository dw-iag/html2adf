
# html2adf.js Module Overview

## Purpose
The `html2adf.js` module is designed for converting HTML into Atlassian Document Format (ADF), using various libraries.

## Libraries Used
- `jsdom`: Implements the DOM in a JavaScript environment, facilitating HTML interaction.
- `@atlaskit/adf-schema`: Provides a predefined schema for ADF.
- `@atlaskit/editor-json-transformer`: Converts between ProseMirror's Node format and JSON.
- `@atlaskit/editor-jira-transformer`: Handles conversion between HTML and ProseMirror's Node format.
- `html-escaper`: Unescapes HTML entities in input HTML.

## Process and Functionality
1. **Importing Libraries**: The module starts by importing the above libraries.
2. **Creating Transformers**:
   - `jiraTransformer`: Initialized with `defaultSchema` for ADF.
   - `adfTransformer`: Used for encoding into ADF JSON.
3. **The html2adf Function**: The core function of the module.
   - **Input**: HTML string.
   - **Process**:
     1. Unescapes HTML using `html-escaper`.
     2. Creates a `JSDOM` instance to simulate a browser environment.
     3. Uses `jiraTransformer` to convert HTML to a ProseMirror Node.
     4. Encodes the Node to ADF JSON using `adfTransformer`.
     5. Stringifies and returns the ADF JSON.
   - **Error Handling**: Catches errors, returning them with the input HTML.
4. **Exporting the Function**: `html2adf` is exported as the default for use in other JavaScript files.
