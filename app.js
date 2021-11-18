const express = require('express')
const app = express()
let ip_add = require("ip");

app.get('/', (req, res) => {
    let obj = {
        msg: 'Fantastic!!! You ddeployed it... Very Good & Keep it up...',
        server_ip: ip_add.address()
    }
    console.log(obj)
    res.send(obj)
})

app.get('/service-a', (req, res) => {
    let obj = {
        msg: 'Nice!!! You did it... Service A is responding...',
        server_ip: ip_add.address()
    }
    console.log(obj)
    res.send(obj)
})

app.get('/service-b', (req, res) => {
    let obj = {
        msg: 'Good!!! You did it... Service B is responding...',
        server_ip: ip_add.address()
    }
    console.log(obj)
    res.send(obj)
})

const port = 8080
app.listen(port, () => {
    console.log(`Example app listening at ${port}`)
})
