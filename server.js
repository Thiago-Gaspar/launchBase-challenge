const express = require('express')
const server = express()

server.get('/', (req, res) => {
    return res.send('Olá')
})


server.listen(5000, function () {
    console.log('server is running')
})