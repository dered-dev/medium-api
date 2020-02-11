
const db = require('./src/lib/db')
const server = require('./src/server')

db
  .then(() => {
    console.log('Estamos conectados')
    console.log('Levantando servicio')
    server.listen(8080, () => {
      console.log('server runing')
    })
  })
  .catch(error => {
    console.error('Algo salio mal', error)
  })
