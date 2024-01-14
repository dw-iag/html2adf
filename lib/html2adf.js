import { JSDOM } from 'jsdom';
import { defaultSchema } from '@atlaskit/adf-schema/dist/cjs/schema/default-schema.js';
import { JSONTransformer } from '@atlaskit/editor-json-transformer';
import { JIRATransformer } from '@atlaskit/editor-jira-transformer';
import { unescape } from 'html-escaper';

const jiraTransformer = new JIRATransformer(defaultSchema);
const adfTransformer = new JSONTransformer();

function html2adf(html) {
  html = unescape(html)
  try {
    const dom = new JSDOM('<!doctype html><html><body></body></html>');
    global.window = dom.window;
    global.DOMParser = window.DOMParser;
    global.Node = dom.window.Node;
    global.HTMLElement = dom.window.HTMLElement;

    const pmNode = jiraTransformer.parse(html);
    const adfJson = adfTransformer.encode(pmNode);
    const stringified = JSON.stringify(adfJson)
    return stringified
  }
  catch (error) {
    return { err: JSON.stringify(error), inputHTML: html }
  }
}

export default html2adf
