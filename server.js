const path = require('path');
const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
app.use(express.static(path.join(__dirname,'public')));
const PORT = 2121||process.env.PORT;
server.listen(PORT,() =>{
    console.log(`Your connected on ${PORT}`)
})