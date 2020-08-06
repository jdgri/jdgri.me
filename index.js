require('newrelic')
const express = require('express')
const app = express()
app.use(express.static('public'))
app.get('/about', function (req, res) {
    res.send('about')
})
app.listen(3000, () => console.log('Server running on port 3000'))