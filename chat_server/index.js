const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 4000;
const userRegisterRouter = require('./router/Register/index')
const userLoginRouter = require('./router/Login/index')
const userSearchRouter = require('./router/SearchUser/index')
const userAddFriends = require('./router/AddFriends/index')
const userFriendList = require('./router/FriendList/index')
const createRoom = require('./router/CreateRoom/index')
const server = require('http').Server(app);
const Message = require('./models/Message');
const User = require('./models/User/index')
const userAllChatHistory = require('./router/ChatHistory/index')
const cors = require('cors');

app.use(cors());
const socketIo = require('socket.io');
const { default: excludeVariablesFromRoot } = require('@mui/material/styles/excludeVariablesFromRoot');
const io = socketIo(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
        credentials: true
    },
    path: '/socket.io'
});

mongoose.connect('mongodb://127.0.0.1:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'mongodb connection error!!!'));
db.once('open', () => {
    console.log('Mongodb连接成功！')
})

app.use(express.json());
app.use('/api', userRegisterRouter);
app.use('/api', userLoginRouter);
app.use('/api', userSearchRouter);
app.use('/api', userAddFriends);
app.use('/api', userFriendList);
app.use('/api', userAllChatHistory)
app.use('/api', createRoom);

app.get('/api', (req, res) => {
    res.json({
        message: 'Hello world',
    });
});

io.on('connection', (socket) => {
    console.log('A User connected');

    socket.on('join', (roomId) => {
        console.log('A user join')
        socket.join(roomId);
    })

    socket.on('message', async (message) => {
        console.log('Received message:', message);
        const { sender, receiver, roomId, content } = message;

        try {
            const senderUser = await User.findOne({ username: sender })
            const receiverUser = await User.findOne({ username: receiver })
            if (!senderUser || !receiverUser) {
                console.error('查询用户时出错：', sender, receiver);
            } else {
                const senderObjectId = senderUser._id
                const receiverUserID = receiverUser._id
                const newMessage = new Message({
                    sender: senderObjectId,
                    sender_username: senderUser.username,
                    receiver: receiverUserID,
                    receiver_username: receiverUser.username,
                    content: content,
                    timestamp: new Date(),
                    roomId: roomId
                });
                newMessage.save()
                    .then(savedMessage => {
                        console.log('消息已保存：', savedMessage);
                        io.to(roomId).emit('message', savedMessage);
                    })
                    .catch(error => {
                        console.error('检索信息时出错：', error);
                    })
            }
        } catch (error) {
            console.error('查询信息时出错：', error)
        }


    })

    socket.on('disconnect', () => {
        console.log('User disconnected');
    })
})

server.listen(PORT, () => {
    console.log(`Sever listening on ${PORT}`);
})
