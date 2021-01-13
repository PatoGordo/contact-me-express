const express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors');
const app = express()

const port = 3000
const get_data = require('./Routes/get')
const set_data = require('./Routes/set')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.listen(process.env.PORT || 3000, (err, data) => {
  if (err)
    console.log(err)
  else
    console.log(`Connected! port: ${port} `)
})

app.get("/", (req, res) => {
  res.send('<a href="/get">Go to get</a>')
})

app.get("/get/",(req, res) => {
  get_data.getData((data) => {
    res.send({"status": 200,"status_code": 1, "results":data})
  })
})

app.post("/set/", (req, res) => {
  set_data.saveData(req.body, (err, data) => {
    res.send(data)
  })
})