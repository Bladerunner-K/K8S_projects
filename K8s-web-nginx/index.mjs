import express from 'express'
import fetch from 'node-fetch'



const app = express()
const PORT = 80
//const os = require('os');

app.get("/", (req, res) => {
    //const hostname = os.hostname();
    const HM = 'This is the v3 version from node js'
    console.log(HM)
    res.send(HM)
})

app.get("/nginx", async (req, res) => {
    const url = 'http://nginx'
    const response = await fetch(url);
    const body = await response.text();
    res.send(body)
})

app.listen(PORT, () => {
    console.log('app listening on port 80')
})