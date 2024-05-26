const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.static('public')) // public視為根目錄 不需要在路由path當中寫入public
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
require('dotenv').config()

const apis = require('./routes/index')
app.use('/api', apis)


app.get('/', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log('Request received from IP:', ip);
  res.send(`Hello, World! Your IP address is ${ip}`);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
  console.info(`${PORT} nod_env = ${process.env.NODE_ENV}`)
});
