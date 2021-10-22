require('dotenv').config()

const express = require('express')
const cors = require('cors')
const { socketController } = require('./sockets/controller')

const app = express()

const server = require('http').createServer(app)
const io = require('socket.io')(server)

const PORT = process.env.PORT || 8080

// middlewares
app.use(cors())
app.use('/', express.static('public'))

io.on('connection', socketController)

server.listen(PORT, () => {
  console.log(`Connecting for http://localhost:${PORT}`)
})
