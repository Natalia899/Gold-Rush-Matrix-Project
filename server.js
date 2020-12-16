const express = require('express')
const path = require('path')
const app = express()


app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(express.json())
app.use(express.urlencoded({extended: false}))



const PORT = 3002
app.listen(PORT, ()=>{
    console.log(`${PORT} ok`);
})