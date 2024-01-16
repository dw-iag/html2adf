import express from 'express'
import bodyParser from 'body-parser'
import html2adf from './lib/html2adf.js'
import html from 'index.js'

const app = express()
const htmlParse = bodyParser.text({ type: 'text/html' })

app.post('/', htmlParse, (req, res) => {
  res.set('Content-Type', 'application/json')
  try {
    let parsedBody = html2adf(req.body)
    console.log(parsedBody)
    res.send(parsedBody)
  } catch (error) {
    res.status(400)
    res.send(error)
  }
})

app.get("/", (req, res) => res.type('html').send(html));

const server = app.listen(10000, () => console.log(`App listening on port 10000!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;