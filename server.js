const express = require("express");

const app = express();

app.use(express.static('.'));
app.use(express.static('./admin/src'));


app.listen(3000);