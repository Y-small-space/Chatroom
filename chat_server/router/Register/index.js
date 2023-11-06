const express = require('express')

const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../../models/User/index')



router.post('/register', async (req, res) => {
    const { username, password } = req.body;

    const existingUser = await User.findOne({username});
    if(existingUser){
        return res.status(400).json({error:'用户名已存在'})
    }

    bcrypt.hash(password, 10, async (err, hashPassword) => {
        if (err) {
            console.error('密码哈希错误：', err);
            return res.status(500).json({ error: '用户注册失败' });
        }
        // 创建一个新用户文档
        const newUser = new User({
            username,
            password: hashPassword
        });

        try {
            await newUser.save();
            res.json({ message: '用户注册成功！' });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: '用户注册失败'
            })
        }
    })
})



module.exports = router