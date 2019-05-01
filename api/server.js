const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')

const cohortsRouter = require('./routers/cohorts')
const server = express()

server.use(helmet())
server.use(morgan())
server.use(express.json())

server.get('/', async (req, res) => {
    res.send('This is not the endpoint you are looking for.')
})

server.use('/api/cohorts', cohortsRouter)
//server.use('/api/students', studentsRouter)

module.exports = server
