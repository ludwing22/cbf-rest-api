const express = require('express')
const app = express()

app.get('/healthcheck', function(req, res) {
  res.json({
    message: 'Ok'
  })
})


app.listen(3000, function() {
  console.log('api rodando na porta 3000!');
})