const socketController = (socket) => {
  console.log('cliente conectado con id', socket.id)

  socket.on('disconnect', () => {
    console.log('cliente desconectado')
  })

  socket.on('message', (payload) => {
    socket.broadcast.emit('message', payload)
  })
}

module.exports = {
  socketController,
}
