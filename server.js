const express = require("express");
const path = require("path");

const app = express();

app.use(express.static('.'));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});
app.get('*', (req, res) => {
    res.status(403).send('Access denied');
});


app.listen(3000);