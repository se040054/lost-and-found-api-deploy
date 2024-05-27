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

const PORT = process.env.PORT || 443;

app.get('/', (req, res) => {
  res.send('Azure Deploy Server Is Running');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
  console.info(`${PORT} nod_env = ${process.env.NODE_ENV}`)
});
