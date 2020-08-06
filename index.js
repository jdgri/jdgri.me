require('newrelic')
const express = require('express')
const app = express()
app.use(express.static('public'))
app.get('/about', function (req, res) {
    res.send('Edge DNS Rocks!')
})
app.get('/helloworld', function (req, res) {
    res.send('Edge DNS says hello!')
})
app.listen(3000, () => console.log('Server running on port 3000'))