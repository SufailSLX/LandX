const express = require("express")
const cors = require("cors")
const app = express()
const port = 5555

app.use(cors())

app.get('/api/data', (req,res) =>{
    res.send("Hello frombackend")
})

app.listen(port, ()=>{
    console.log(`Server Running PORT ${port}`);
})