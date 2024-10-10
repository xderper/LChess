const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const path = require("path");
const chess = require("chess.js")

const url = "mongodb://localhost:27017/flaindb";

const app = express();
const jsonParser = express.json();


const server = require('http').createServer(app);
const io = require('socket.io')(server);

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




io.on('connection', (socket) => {
    socket.on('join_room', (roomId) => {
        socket.join(roomId);
    });

    socket.on('move', (fen) => {
        const roomId = Array.from(socket.rooms)[1];
        io.to(roomId).emit('update_move', fen);
    });

});


async function connectToDatabase() {
    try {
        client = new MongoClient(url);
        await client.connect();
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
        for (let i = 0; i < codes.length; i++) {
            if (codes[i].code_text === data.code_text) {
                res.json({ success: true });
            }
        }
    } catch (err) {
        console.error(err);
    }
});







// Запускаем сервер
server.listen(3000, function () {
    console.log('Сервер запущен на порту 3000');
});

