const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const path = require("path");


const url = "mongodb://localhost:27017/flaindb";
const app = express();
const jsonParser = express.json();

app.use(express.static('.'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'admin/admin_login.html'));
});
app.get('*', (req, res) => {
    res.status(403).send('Access denied');
});

async function connectToDatabase() {
    try {
        client = new MongoClient(url);
        await client.connect();
        console.log('Connected to database');
    } catch (err) {
        console.error(err);
    }
}
connectToDatabase();


app.post('/login/game/add', jsonParser, async (req, res) => {
    const data = req.body;
    try {
        const db = client.db('login_game');
        const collection = db.collection('codes');
        const result = await collection.insertOne(data);
        res.send({ message: 'Data added successfully' });
    } catch (err) {
        console.error(err);
    }
});


app.post('/login/game/check', jsonParser, async (req, res) => {
    const data = req.body;
    try {
        const db = client.db('login_game');
        const collection = db.collection('codes');
        const codes = await collection.find().toArray();
        for (let i=0; i<codes.length; i++){
            if (codes[i].code_text === data.code_text){
                res.json({success: true});
            }
        }
    } catch (err) {
        console.error(err);
    }
});







// Запускаем сервер
app.listen(3000, function () {
    console.log('Сервер запущен на порту 3000');
});

