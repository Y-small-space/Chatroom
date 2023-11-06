const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const ChatRoom = require('../../models/ChatRoom')

router.get('roomId', async (req, res) => {
    const { userId1, userId2 } = req.body;
    const user1 = await User.findOne({ username: userId1 });
    const user2 = await User.findOne({ username: userId2 });
    const chatroom = await ChatRoom.findOne({
        users: { $all: [user1._id, user2._id] }
    });
    const roomId = chatroom.roomId;
    res.json({ roomId });
})

module.exports = router