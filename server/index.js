//index.js

const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors())

app.get('/', (req, res) => {
      res.send('Hello from our server!')
})

app.listen(3000, () => {
      console.log('server listening on port 3000')
})