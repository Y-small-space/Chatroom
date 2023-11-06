const express = require('express');
const router = express.Router();
const User = require('../../models/User/index');

router.post('/addFriends',async(req,res)=>{
    try {
        const {userIdToAdd} = req.body;
        const {currentUserId} = req.body;

        console.log(userIdToAdd,currentUserId)

        // 查找当前用户和要添加的好友
        const currentUser= await User.findOne({username:currentUserId});
        const friendToAdd = await User.findOne({username:userIdToAdd});

        if(!friendToAdd || !currentUser){
            return res.status(404).json({error:'用户不存在'});
        }

        currentUser.friends.push(friendToAdd);
        await currentUser.save();
        
        res.json({message:'成功添加好友'});
    } catch (error) {
        console.error('添加好友失败',error)
        res.status(500).json({error:'添加好友失败'});
    }
})

module.exports = router
