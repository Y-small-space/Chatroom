const express = require('express');
const router = express.Router();
const User = require('../../models/User/index');

// 处理好友搜索的POST请求
router.get('/search', async (req, res) => {
    try {
        const { query } = req.query;
        console.log(query);
        const matchingUsers = await User.find({
            $or: [
                { username: { $regex: query, $options: 'i' } }
            ]
        });

        res.json({ users: matchingUsers })
    } catch (error) {
        console.error('搜索好友失败', error);
        res.status(500).json({ error: '搜索好友失败' })
    }
})

module.exports = router