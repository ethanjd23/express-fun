const express = require('express');
const app = express();
const path = require('path');

app.use((req, res, next) => {
    console.log(req.originalUrl);
    next();
})

app.use(express.static(path.join(__dirname, '../public')))

app.get('/', (req, res) => {
    res.send("Hello from the server side...");
})

app.listen(3000);