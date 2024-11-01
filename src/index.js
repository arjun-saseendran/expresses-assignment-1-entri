import express from 'express'

const app = express()
const port = process.env.PORT || 3000

app.get('/', (request, response)=>{
    response.statusCode(200).send('OK')
})
app.post('/', (request, response)=>{
    response.statusCode(201).send('Created')
})
app.put('/', (request, response)=>{
    response.statusCode(202).send('Accepted')
})
app.get('/', (request, response)=>{
    response.statusCode(200).send('OK')
})

