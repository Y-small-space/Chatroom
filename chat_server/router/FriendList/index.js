const express = require('express');
const router = express.Router();
const User = require('../../models/User/index');
const { default: mongoose } = require('mongoose');

router.get('/friendList',async(req,res)=>{
    try {
        const useId = req.query.userId;
        console.log(useId);
        const user = await User.findOne({username:useId});

        if(!user){
            return res.status(404).json({error:'用户不存在'});
        }
        const friendId = user.friends || []
        const ObjectId = mongoose.Types.ObjectId;
        const friendList = await User.find({_id:friendId.map(id=> new ObjectId(id))});
        res.json(friendList);
    } catch (error) {
        console.error('加载好友列表失败',error);
        res.status(500).json({error:'加载好友列表失败'});
    }
})

module.exports = router;