const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')
const newspapers = require("./Utilities/Index")
console.log(newspapers)

const app = express()
const port = 8888

app.get('/', (req, res) => res.send('Heyy There, I am a cat.'))
app.listen(port, () => console.log(`Project is running on port ${port}!`))