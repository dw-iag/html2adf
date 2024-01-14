import express from 'express'
import bodyParser from 'body-parser'
const { text, json } = bodyParser

import html2adf from './lib/html2adf.js'

const app = express()
const htmlParse = text({ type: 'text/html' })

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

app.get('/', json, (_req, res) => {
  res.send('Hello World!')
})

app.listen(3000, () => {
  console.log('Server is listening on port 3000')
})
