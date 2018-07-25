const express = require('express')
const db = require('./manager.db')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.set('port', process.env.PORT || 3000)

db.connect().then(() => {
  const server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + server.address().port)
  })
})

