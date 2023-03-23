import express from 'express'
//import os from 'os'


const app = express()
const PORT = 80
//const os = require('os');

app.get("/", (req, res) => {
    //const hostname = os.hostname();
    const HM = 'This is the v3 version'
    console.log(HM)
    res.send(HM)
})

app.listen(PORT, () => {
    console.log('app listening on port 80 and this is working')
})