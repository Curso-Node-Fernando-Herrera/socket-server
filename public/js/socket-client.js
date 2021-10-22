const socket = io()

const statusState = document.getElementById('status')
const inputMessage = document.getElementById('form_input')
const inputSubmit = document.getElementById('form_submit')

socket.on('connect', () => {
  statusState.innerText = 'Online'
  statusState.style.color = 'green'
})

socket.on('disconnect', () => {
  console.log('desconectado desde el front')
  statusState.innerText = 'Offline'
  statusState.style.color = 'red'
})

socket.on('message', (payload) => {
  console.log('desde el propio front: ', payload)
})

inputSubmit.addEventListener('click', () => {
  const messageToServer = inputMessage.value

  socket.emit('message', messageToServer)
})
