const express = require('express')
const bodyParser = require('body-parser')
const mc = require('./controllers/messages_controller')

const app = express()
app.use(bodyParser.json())
app.use(express.static('../public/build'))

const baseUrl = '/api/messages'
app.post(baseUrl, mc.create)
app.put(`${baseUrl}/:id`, mc.update)
app.delete(`${baseUrl}/:id`, mc.delete)
app.get(baseUrl, mc.read)


app.listen(3000, ()=> {console.log(`Server is running on port 3000`)})