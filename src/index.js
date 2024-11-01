import express from 'express'

const app = express()
const port = process.env.PORT || 3000

app.get('/', (request, response)=>{
    response.statusCode(200).send('OK')
})
app.get('/', (request, response)=>{
    response.statusCode(200).send('OK')
})
app.get('/', (request, response)=>{
    response.statusCode(200).send('OK')
})
app.get('/', (request, response)=>{
    response.statusCode(200).send('OK')
})

